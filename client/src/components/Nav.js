import { useState } from "react"

function Nav({buildings, setSelectedBuilding, setSearch, search}) {

    const buildingsToRender = buildings.map((building) => (
        <option key={building.id} value={building.name}>{building.name}</option>
      ))

      function handleBuildingChange(e) {
        setSelectedBuilding(buildings.find((building) => building.name === e.target.value))
      }

    return (
        <div className="nav">
            <select onChange={handleBuildingChange}>
                {buildingsToRender}
            </select>
            <label>Search:</label>
            <input 
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </div>
    )
}

export default Nav