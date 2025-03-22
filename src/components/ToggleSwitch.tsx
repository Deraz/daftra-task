import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
        isOn ? "bg-blue-700" : "bg-gray-300"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
