import React from "react";

interface AggressiveModeToggleProps {
  aggressiveMode: boolean;
  toggleAggressiveMode: () => void;
}

const AggressiveModeToggle: React.FC<AggressiveModeToggleProps> = ({
  aggressiveMode,
  toggleAggressiveMode,
}) => {
  return (
    <div className="toggle-container">
      <label htmlFor="aggressiveModeSwitch">
        {aggressiveMode
          ? "Angry Parse (More links): ON"
          : "Angry Parse (More links): OFF"}
      </label>
      <input
        id="aggressiveModeSwitch"
        type="checkbox"
        checked={aggressiveMode}
        onChange={toggleAggressiveMode}
      />
    </div>
  );
};

export default AggressiveModeToggle;
