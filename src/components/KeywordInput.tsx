import React from "react";

interface KeywordInputProps {
  keywords: string;
  setKeywords: (value: string) => void;
  placeholder: string;
}

const KeywordInput: React.FC<KeywordInputProps> = ({
  keywords,
  setKeywords,
  placeholder,
}) => {
  return (
    <input
      id="keywordsInput"
      type="text"
      placeholder={placeholder}
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
    />
  );
};

export default KeywordInput;