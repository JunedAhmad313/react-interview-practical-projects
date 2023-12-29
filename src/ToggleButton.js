import react, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((preveState) => !preveState);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default ToggleSwitch;
