import { useState, useEffect } from "react";
import { fetchDevices, updateDevice } from "./api";

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const data = await fetchDevices();
        setDevices(data);
      } catch (error) {
        setError("Failed to load devices");
      } finally {
        setLoading(false);
      }
    };

    loadDevices();
  }, []);

  const toggleDevice = async (device) => {
    let newStatus;

    if (device.status === "On") {
      newStatus = "Off";
    } else if (device.status === "Off") {
      newStatus = "On";
    } else if (device.status === "Locked") {
      newStatus = "Unlocked";
    } else if (device.status === "Unlocked") {
      newStatus = "Locked";
    } else {
      return;
    }

    try {
      setError("");

      const updatedDevice = await updateDevice(
        device.id,
        { status: newStatus }
      );

      setDevices((previousDevices) =>
        previousDevices.map((item) =>
          item.id === device.id ? updatedDevice : item
        )
      );
    } catch (error) {
      setError("Failed to update device");
    }
  };

  if (loading) return <p>Loading devices...</p>;

  return (
    <div className="dashboard">
      <h1>Nexus IoT Dashboard</h1>
      <p>Smart Home Control Panel</p>

      {error && <p>{error}</p>}

      <div className="device-grid">
        {devices.map((device) => (
          <div className="device-card" key={device.id}>
            <h2>{device.name}</h2>
            <p>{device.type}</p>
            <p>Status: {device.status}</p>

            {(device.status === "On" ||
              device.status === "Off" ||
              device.status === "Locked" ||
              device.status === "Unlocked") && (
              <button onClick={() => toggleDevice(device)}>
                {device.status === "On" ||
                device.status === "Locked"
                  ? "Turn Off / Unlock"
                  : "Turn On / Lock"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;