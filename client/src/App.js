import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState([]);

  useEffect(() => {
    fetch('buildings')
    .then((res) => res.json()
    .then((data) => setBuildings(data))
    )
  }, [])

  const buildingsToRender = buildings.map((building) => (
    <option key={building.id} value={building.name}>{building.name}</option>
  ))

  return (
    <div className="App">
      <h1>Inventory App</h1>
      <select onChange={(e) => setSelectedBuilding(e.target.value)}>
        {buildingsToRender}
      </select>
      <ul>

      </ul>
    </div>
  );
}

export default App;
