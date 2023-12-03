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
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetch('buildings')
    .then((res) => res.json()
    .then((data) => setBuildings(data))
    )
  }, [])

  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch} buildings={buildings} setSelectedBuilding={setSelectedBuilding}/>
      {selectedBuilding ? 
      <ul>
        <ComputerContainer search={search} selectedBuilding={selectedBuilding}/>
      </ul>
      : null
    }
    </div>
  );
}

export default App;
