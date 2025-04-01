// BetterButton.tsx

import React from "react";

// Renamed component and props for better clarity
interface ButtonProps {
  onClick: () => void; // Explicitly define type for click handler
  label?: string; // Optional label for the button
}

const BetterButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  // Using a default value for label, providing fallback if not passed
  const buttonText = label || "Click me";

  return (
    // Styled button with descriptive class names for scalability
    <button
      onClick={onClick}
      style={{
        backgroundColor: "blue",
        padding: "10px",
        color: "white",
        borderRadius: "5px", // Added border radius for better visuals
        border: "none", // Removed border for a cleaner look
        cursor: "pointer", // Indicating it's clickable
      }}
    >
      {buttonText}
    </button>
  );
};

export default BetterButton;
