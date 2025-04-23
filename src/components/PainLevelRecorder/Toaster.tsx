import { useEffect } from "react";

type ToasterProps = {
  showMessage: boolean;
  setShowMessage: (show: boolean) => void;
  message: string;
  duration?: number; // Optional duration prop
};
const Toaster = ({
  showMessage,
  setShowMessage,
  message,
  duration = 2000, // Default duration is 2000ms (2 seconds)
}: ToasterProps) => {
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [showMessage, duration, setShowMessage]);

  if (!showMessage) {
    return <> </>;
  }

  return (
    <div className={`submission-message ${showMessage ? "" : "fade-out"}`}>
      {message}
    </div>
  );
};

export default Toaster;
