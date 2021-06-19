import { useState, useEffect } from "react";

const useTouchPosition = () => {
  const [touchPosition, setTouchPosition] = useState({ touchX: null, touchY: null });

  const updateTouchPosition = ev => {
    setTouchPosition({ touchX: ev.changedTouches[0].clientX, touchY: ev.changedTouches[0].clientY });
  };

  useEffect(() => {
    window.addEventListener("touchmove", updateTouchPosition);

    return () => window.removeEventListener("touchmove", updateTouchPosition);
  }, []);

  return touchPosition;
};

export default useTouchPosition;