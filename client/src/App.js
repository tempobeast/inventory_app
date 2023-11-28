import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import ComputerContainer from './components/ComputerContainer'

function App() {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState({
    name: "",
    code: "",
    computers: []
  });
  
  useEffect(() => {
    fetch('buildings')
    .then((res) => res.json()
    .then((data) => setBuildings(data))
    )
  }, [])

  const buildingsToRender = buildings.map((building) => (
    <option key={building.id} value={building.name}>{building.name}</option>
  ))
  
  

  function handleBuildingChange(e) {
    setSelectedBuilding(buildings.find((building) => building.name === e.target.value))
  }

  return (
    <div className="App">
      <h1>Inventory App</h1>
      <select onChange={handleBuildingChange}>
        {buildingsToRender}
      </select>
      {selectedBuilding ? 
      <ul>
        
        <ComputerContainer selectedBuilding={selectedBuilding}/>
      </ul>
      : null
    }
    </div>
  );
}

export default App;
