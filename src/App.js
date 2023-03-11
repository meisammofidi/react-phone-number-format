import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="contain">
        <h1>Phone Number</h1>
        <PhoneNumberInput />
      </div>
    </>
  );
}

const PhoneNumberInput = () => {
  const [userInput, setUserInput] = useState("");
  const handleInput = (e) => {
    const formatedNumber = formatNumberPhone(e.target.value);
    setUserInput(formatedNumber);
  };
  const formatNumberPhone = (number) => {
    if(!number) return number
    const phoneNumber = number.replace(/[^\d]/g, "");
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
  };
  return (
    <>
      <input className="space" onChange={(e) => handleInput(e)} value={userInput} />
      <div className="display">Phone: {userInput}</div>
    </>
  );
};

export default App;
