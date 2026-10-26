import { useState, useEffect } from 'react';

function BankingWidget() {
  const [balance, setBalance] = useState(1000);
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (balance < 0) {
      console.error('OVERDRAFT DETECTED! Locking account...');
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
  }, [balance]);

  const handleTransaction = (type) => {
    const value = Number(amount);

    if (!Number.isFinite(value) || value <= 0) {
      alert('Enter a valid amount greater than zero.');
      return;
    }

    if (type === 'WITHDRAWAL' && isLocked) {
      alert('Account is locked due to overdraft!');
      return;
    }

    const transactionValue =
      type === 'DEPOSIT' ? value : -value;

    setBalance(previousBalance => previousBalance + transactionValue);

    const newRecord = {
      id: Date.now(),
      type,
      amount: value,
      date: new Date().toLocaleString()
    };

    setHistory(previousHistory => [newRecord, ...previousHistory]);
    setAmount('');
  };

  return (
    <div>
      <h2>Banking Ledger</h2>

      <h3>Balance: KSh {balance.toFixed(2)}</h3>

      {isLocked && (
        <p style={{ color: 'red' }}>
          ACCOUNT LOCKED: Overdraft detected!
        </p>
      )}

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />

      <button onClick={() => handleTransaction('DEPOSIT')}>
        Deposit
      </button>

      <button onClick={() => handleTransaction('WITHDRAWAL')}>
        Withdraw
      </button>

      <h3>Transaction History</h3>

      {history.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {history.map(transaction => (
            <li key={transaction.id}>
              {transaction.type}: KSh {transaction.amount.toFixed(2)}
              {' — '}
              {transaction.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BankingWidget;