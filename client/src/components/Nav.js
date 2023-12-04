import { useContext } from "react"
import { BuildingsContext } from "../context/buildings"
import { SelectedBuildingContext } from "../context/selectedBuilding"

function Nav({ setSearch, search}) {
    const { buildings } = useContext(BuildingsContext);
    const { setSelectedBuilding } = useContext(SelectedBuildingContext)

    const buildingsToRender = buildings.map((building) => (
        <option key={building.id} value={building.name}>{building.name}</option>
      ))

      function handleBuildingChange(e) {
        setSelectedBuilding(buildings.find((building) => building.name === e.target.value))
      }

    return (
        <div className="nav">
            <select defaultValue="all" onChange={handleBuildingChange}>
                <option value="all">All</option>
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