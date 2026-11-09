function CrewCard({ id, name, rank, isOnDuty, onToggleDuty }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "10px"
      }}
    >
      <h2>{name}</h2>

      <p>
        <strong>Rank:</strong> {rank}
      </p>

      <p style={{ display: "flex", alignItems: "center" }}>
        <strong>Status:</strong>

        <span
          style={{
            display: "inline-block",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            backgroundColor: isOnDuty ? "green" : "red",
            marginLeft: "10px"
          }}
        ></span>
      </p>

      <button
        onClick={() => onToggleDuty(id)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default CrewCard;