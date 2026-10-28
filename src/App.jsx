import { useState, useReducer, useEffect } from "react";
import "./App.css";

const initialFleetState = {
  activeDrone: "Drone-Alpha",
  altitude: 100,
  battery: 85,
  status: "STANDBY",
};

function fleetReducer(state, action) {
  switch (action.type) {
    case "LAUNCH":
      if (state.battery <= 0) return state;
      return { ...state, status: "AIRBORNE" };

    case "LAND":
      return { ...state, status: "STANDBY", altitude: 0 };

    case "ADJUST_ALTITUDE":
      if (state.status !== "AIRBORNE") return state;
      return {
        ...state,
        altitude: Math.max(
          0,
          Math.min(500, state.altitude + action.payload)
        ),
      };

    case "DRAIN_BATTERY":
      return {
        ...state,
        battery: Math.max(0, state.battery - 5),
        status: state.battery <= 5 ? "STANDBY" : state.status,
        altitude: state.battery <= 5 ? 0 : state.altitude,
      };

    default:
      return state;
  }
}

function App() {
  // Phase 2: Mission state management
  const [fleetState, dispatch] = useReducer(
    fleetReducer,
    initialFleetState
  );

  // Phase 4: Local form input
  const [targetCoords, setTargetCoords] = useState("");
  const [missionMessage, setMissionMessage] = useState("");

  // Bonus: Waypoint API data
  const [waypoints, setWaypoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  // Phase 3: Automatic telemetry
  useEffect(() => {
    if (fleetState.status !== "AIRBORNE") return;

    const telemetryInterval = setInterval(() => {
      dispatch({ type: "DRAIN_BATTERY" });
    }, 3000);

    return () => clearInterval(telemetryInterval);
  }, [fleetState.status]);

  // Bonus: Fetch waypoint schedules on startup
  useEffect(() => {
    const controller = new AbortController();

    async function fetchWaypoints() {
      try {
        setIsLoading(true);
        setApiError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to retrieve waypoint schedules.");
        }

        const data = await response.json();

        setWaypoints(
          data.map((item, index) => ({
            id: item.id,
            name: `Waypoint ${index + 1}`,
            destination: item.title,
            completed: item.completed,
          }))
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          setApiError("Unable to load waypoints. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchWaypoints();

    return () => controller.abort();
  }, []);

  // Phase 4: Submit target coordinates
  function handleSubmit(event) {
    event.preventDefault();

    if (!targetCoords.trim()) {
      setMissionMessage("Please enter target coordinates.");
      return;
    }

    setMissionMessage(`Target coordinates set: ${targetCoords}`);
  }

  // Phase 1: useState handles independent local values.
  // useReducer handles complex fleet state.
  // useEffect handles timers and API requests.

  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">APEX FLEET CONTROL</p>
          <h1>Mission Operations Center</h1>
          <p className="subtitle">
            Autonomous drone monitoring and mission management
          </p>
        </div>
        <span
          className={`status ${
            fleetState.status === "AIRBORNE" ? "flying" : ""
          }`}
        >
          {fleetState.status}
        </span>
      </header>

      <section className="overview">
        <article className="panel drone-panel">
          <p className="eyebrow">ACTIVE UNIT</p>
          <h2>{fleetState.activeDrone}</h2>
          <div className="drone-symbol">✦</div>
          <p className="muted">Autonomous aerial vehicle</p>

          <div className="controls">
            <button
              onClick={() => dispatch({ type: "LAUNCH" })}
              disabled={
                fleetState.status === "AIRBORNE" ||
                fleetState.battery <= 0
              }
            >
              Launch Drone
            </button>
            <button
              className="secondary"
              onClick={() => dispatch({ type: "LAND" })}
              disabled={fleetState.status !== "AIRBORNE"}
            >
              Land Drone
            </button>
          </div>
        </article>

        <article className="panel">
          <p className="eyebrow">BATTERY TELEMETRY</p>
          <h2>{fleetState.battery}%</h2>
          <div className="meter">
            <div
              className={`meter-fill ${
                fleetState.battery <= 20 ? "low" : ""
              }`}
              style={{ width: `${fleetState.battery}%` }}
            />
          </div>
          <p className="muted">
            {fleetState.status === "AIRBORNE"
              ? "Live updates every 3 seconds"
              : "Telemetry standing by"}
          </p>
        </article>

        <article className="panel">
          <p className="eyebrow">FLIGHT ALTITUDE</p>
          <h2>{fleetState.altitude} m</h2>
          <p className="muted">Operational limit: 500 m</p>
          <div className="controls">
            <button
              className="secondary"
              disabled={fleetState.status !== "AIRBORNE"}
              onClick={() =>
                dispatch({
                  type: "ADJUST_ALTITUDE",
                  payload: -10,
                })
              }
            >
              −10 m
            </button>
            <button
              disabled={fleetState.status !== "AIRBORNE"}
              onClick={() =>
                dispatch({
                  type: "ADJUST_ALTITUDE",
                  payload: 10,
                })
              }
            >
              +10 m
            </button>
          </div>
        </article>
      </section>

      <section className="panel section-panel">
        <p className="eyebrow">PHASE 4 · MISSION INPUT</p>
        <h2>Set Target Coordinates</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="coordinates">
            Target coordinates
          </label>
          <div className="form-row">
            <input
              id="coordinates"
              type="text"
              value={targetCoords}
              onChange={(event) =>
                setTargetCoords(event.target.value)
              }
              placeholder="e.g. -1.2864, 36.8172"
            />
            <button type="submit">Set Target</button>
          </div>
        </form>
        {missionMessage && (
          <p className="message">{missionMessage}</p>
        )}
      </section>

      <section className="panel section-panel">
        <p className="eyebrow">BONUS · ASYNC API</p>
        <h2>Waypoint Schedules</h2>

        {isLoading ? (
          <p className="muted">Loading waypoint schedules...</p>
        ) : apiError ? (
          <div>
            <p className="error">{apiError}</p>
            <button
              onClick={() => {
                setIsLoading(true);
                setApiError("");
                fetch(
                  "https://jsonplaceholder.typicode.com/todos?_limit=5"
                )
                  .then((response) => {
                    if (!response.ok) throw new Error("Request failed");
                    return response.json();
                  })
                  .then((data) =>
                    setWaypoints(
                      data.map((item, index) => ({
                        id: item.id,
                        name: `Waypoint ${index + 1}`,
                        destination: item.title,
                        completed: item.completed,
                      }))
                    )
                  )
                  .catch(() =>
                    setApiError("Unable to load waypoints. Please retry.")
                  )
                  .finally(() => setIsLoading(false));
              }}
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="waypoint-list">
            {waypoints.map((waypoint) => (
              <article className="waypoint" key={waypoint.id}>
                <div>
                  <strong>{waypoint.name}</strong>
                  <p>{waypoint.destination}</p>
                </div>
                <span
                  className={`waypoint-status ${
                    waypoint.completed ? "complete" : ""
                  }`}
                >
                  {waypoint.completed ? "Completed" : "Scheduled"}
                </span>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer>
        Apex Fleet Operations · React Hooks Capstone
      </footer>
    </main>
  );
}

export default App;