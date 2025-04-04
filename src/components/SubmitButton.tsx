import React from "react";

interface SubmitButtonProps {
  handleSubmit: () => void;
  loading: boolean;
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  handleSubmit,
  loading,
  text,
}) => {
  return (
    <button onClick={handleSubmit} disabled={loading}>
      {loading ? text + "..." : text}
    </button>
  );
};

export default SubmitButton;
