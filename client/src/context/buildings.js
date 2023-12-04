import React, { useState } from 'react';

const BuildingsContext = React.createContext();

function BuildingsProvider({ children }) {
    const [buildings, setBuildings] = useState([]);

    return (
        <BuildingsContext.Provider value={{ buildings, setBuildings}}>
            {children}
        </BuildingsContext.Provider>
    )
}
export { BuildingsContext, BuildingsProvider}