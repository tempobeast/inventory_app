import './App.css';
import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ComputerContainer from './components/ComputerContainer'
import Header from './components/Header'
import Nav from './components/Nav'
import { BuildingsContext } from './context/buildings';
import { SelectedBuildingContext } from './context/selectedBuilding';

function App() {
  const { buildings, setBuildings} = useContext(BuildingsContext)
  const { selectedBuilding, setSelectedBuilding } = useContext(SelectedBuildingContext)
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
      <Nav search={search} setSearch={setSearch}/>
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
