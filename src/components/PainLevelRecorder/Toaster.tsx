import { useEffect, useState } from "react";

type ToasterProps = {
  showMessage: boolean;
  setShowMessage: (show: boolean) => void;
  message: string;
  duration?: number;
};

const Toaster = ({
  showMessage,
  setShowMessage,
  message,
  duration = 2000,
}: ToasterProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showMessage) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setShowMessage(false), 300); // match transition duration
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [showMessage, duration, setShowMessage]);

  if (!showMessage && !visible) return null;

  return (
    <div
      className={`
        fixed bottom-24 left-1/2 -translate-x-1/2 z-50
        px-6 py-4 rounded-xl shadow-2xl
        bg-purple-900 text-white-900 font-semibold text-lg
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      style={{ pointerEvents: "none" }}
    >
      {message}
    </div>
  );
};

export default Toaster;
