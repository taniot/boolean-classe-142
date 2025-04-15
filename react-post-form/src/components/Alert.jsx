import { useEffect } from "react";

function Alert({ message, onClose }) {



  useEffect(() => {
    //mount e quando cambia onClose
    const timer = setTimeout(onClose, 5000);
    //unmount
    return () => clearTimeout(timer);
  }, [onClose]);






  return (
    <div className="alert">
      {message}
    </div>
  );
}

export default Alert;