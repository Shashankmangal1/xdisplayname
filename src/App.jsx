import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents refresh

    if (firstName.trim() === "" || lastName.trim() === "") {
      setError("Please fill out both fields.");
      setFullName("");
      return;
    }

    setError("");
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Full Name Display
      </h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ padding: "5px", width: "200px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ padding: "5px", width: "200px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "6px 16px",
            border: "1px solid black",
            background: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {/* Error message */}
      {error && (
        <p style={{ marginTop: "20px", color: "red", fontWeight: "bold" }}>
          {error}
        </p>
      )}

      {/* Full Name message */}
      {fullName && (
        <h2 style={{ marginTop: "20px" }}>Full Name: {fullName}</h2>
      )}
    </div>
  );
}

export default App;
