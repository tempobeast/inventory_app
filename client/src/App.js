import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [computers, setComputers] = useState([])  

  useEffect(() => {
    fetch('computers')
    .then((res) => res.json()
    .then((data) => console.log(data))
    )
  }, [])

  return (
    <div className="App">
      <h1>Inventory App</h1>
    </div>
  );
}

export default App;
