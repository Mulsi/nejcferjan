import React, { createContext, useContext, useState } from 'react';

const InitialLoadContext = createContext();

export function InitialLoadProvider({ children }) {
    const [initialLoadComplete, setInitialLoadComplete] = useState(true);

    return (
        <InitialLoadContext.Provider value={{ initialLoadComplete, setInitialLoadComplete }}>
            {children}
        </InitialLoadContext.Provider>
    );
}

export function useInitialLoad() {
    return useContext(InitialLoadContext);
}
