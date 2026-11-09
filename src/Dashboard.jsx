import { useState, useEffect } from 'react';
import { getAgents, addAgent } from './api';

export default function Dashboard() {
    const [agentList, setAgentList] = useState([]);
    const [codename, setCodename] = useState('');
    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);

            const data = await getAgents();

            setAgentList(data);
            setIsLoading(false);
        };

        loadData();
    }, []);

    if (isLoading) {
        return <h2>Decrypting Intel...</h2>;
    }
    const handleDeploy=async (e) => {
        e.preventDefault();
        const newAgent = { codename, location, status: 'active' };

        try {
            const deployedAgent = await addAgent(newAgent);
            setAgentList(prevList => [...prevList, deployedAgent]);

           
        } catch (error) {
            console.error("Failed to add agent:", error);
        }
    };

    return (
        <div>
            <h1>Active Operatives</h1>

            <ul>
                {agentList.map(agent => (
                    <li key={agent.id}>
                        <strong>{agent.codename}</strong> - {agent.location}
                        ({agent.status})
                    </li>
                ))}
            </ul>
            <form onSubmit={handleDeploy}>
                <input type="text" placeholder="Codename" value={codename} onChange={(e) => setCodename(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                <button type="submit">Add Agent</button>
            </form>
        </div>
    );
}