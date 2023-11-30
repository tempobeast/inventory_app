import './App.css';
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ComputerContainer from './components/ComputerContainer'
import Header from './components/Header'
import Nav from './components/Nav'

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

  return (
    <div className="App">
      <Header />
      <Nav buildings={buildings} setSelectedBuilding={setSelectedBuilding}/>
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
