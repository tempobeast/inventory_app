import React, { useState } from 'react';

const SelectedBuildingContext = React.createContext();

function SelectedBuildingProvider({ children }) {
    const [selectedBuilding, setSelectedBuilding] = useState({
        name: "",
        code: "",
        computers: []
    });

    return (
        <SelectedBuildingContext.Provider value={{ selectedBuilding, setSelectedBuilding}}>
            {children}
        </SelectedBuildingContext.Provider>
    )
}
export { SelectedBuildingContext, SelectedBuildingProvider}