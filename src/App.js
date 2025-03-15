import React, { useState } from "react";
import validator from "validator";
import './App.css';

function App() {

  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    setpassword(value);
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage("✅ Strong Password");
    } else {
      setErrorMessage("❌ Weak Password - Try adding uppercase, numbers, and symbols!");
    }
  };

  return (
    <div className="App">
      <h2>🔒 Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter your password..."
        value={password}
        onChange={(e) => validate(e.target.value)}
      />

      <div className={`message ${errorMessage.includes("Strong") ? "strong" : "weak"}`}>
        {errorMessage}
      </div>
    </div>
  );
}

export default App;
