function Nav({buildings, setSelectedBuilding}) {

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
        </div>
    )
}

export default Nav