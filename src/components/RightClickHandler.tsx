import { useEffect } from "react";

const RightClickHandler: React.FC = () => {
  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      alert("Right-click is disabled to protect content.");
    };

    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return null;
};

export default RightClickHandler;
