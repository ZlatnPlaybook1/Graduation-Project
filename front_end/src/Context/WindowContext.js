import { createContext, useEffect, useState } from "react";

// Corrected the way createContext is called
export const WindowSizeContext = createContext();

export default function WindowContext({ children }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Clean up function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={{ windowSize }}>
      {children}
    </WindowSizeContext.Provider>
  );
}
