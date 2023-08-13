import React, { createContext, useContext, useState } from 'react';

// Create the context
const CallCountContext = createContext();

// Create a custom hook to access the context
export const useCallCount = () => {
  return useContext(CallCountContext);
};

// Create a provider component
export function CallCountProvider({ children }) {
  const [callCount, setCallCount] = useState(0);

  return (
    <CallCountContext.Provider value={{ callCount, setCallCount }}>
      {children}
    </CallCountContext.Provider>
  );
}
