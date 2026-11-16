const API_URL = "http://localhost:4000/devices";

export const fetchDevices = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }

  return response.json();
};

export const updateDevice = async (id, updatedData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  if (!response.ok) {
    throw new Error("Failed to update device");
  }

  return response.json();
};