import { useState, useEffect } from 'react';

function StorefrontWidget() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        return response.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Failed to load products. Check your internet connection.');
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>E-Commerce Storefront</h2>

      {isLoading && <p>Loading products...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div>
          {products.map(product => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width="100"
                height="100"
                style={{ objectFit: 'contain' }}
              />

              <h3>{product.title}</h3>

              <p>Price: ${product.price}</p>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StorefrontWidget;