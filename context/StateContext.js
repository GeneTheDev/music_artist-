import React, { useContext, createContext, useState, useEffect } from "react";

/**
 * @typedef {Object} CursorContextI
 * @property {string} isHovering
 * @property {React.Dispatch<React.SetStateAction<string>>} setIsHovering
 */

/** @type {React.Context<CursorContextI>} */
const StateContext = createContext({ isHovering: "", setIsHovering: () => {} });

export const useCursorContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }

  useEffect(() => {
    console.log(context.isHovering);
  }, [context.isHovering]);

  return context;
};

export const CursorProvider = ({ children }) => {
  const [isHovering, setIsHovering] = useState("");

  return (
    <StateContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </StateContext.Provider>
  );
};
