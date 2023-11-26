import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

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
  
  const computersToRender = selectedBuilding.computers.map((computer) => (
    <li key={computer.id}>
      <p>{computer.asset_tag}</p>
      <p>{computer.model}</p>
      <p>{computer.serial_number}</p>
    </li>
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
        <li>
          <p>Tag Number</p>
          <p>Model</p>
          <p>Serial Number</p>
        </li>
        {computersToRender}
      </ul>
      : null
    }
    </div>
  );
}

export default App;
