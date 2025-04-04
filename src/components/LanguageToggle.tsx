import React from "react";

interface LanguageToggleProps {
  language: string;
  toggleLanguage: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  toggleLanguage,
}) => {
  return (
    <button onClick={toggleLanguage}>{language === "en" ? "Es" : "Eng"}</button>
  );
};

export default LanguageToggle;
