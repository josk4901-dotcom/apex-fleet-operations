const BASE_URL = 'http://localhost:5000';

export const getAgents = async () => {
    try {
        const response = await fetch(`${BASE_URL}/agents`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch agents:", error);
        return [];
    }
};
export const addAgent = async (newAgent) => {
    
        const response = await fetch(`${BASE_URL}/agents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAgent),
        });
        return await response.json();
    }