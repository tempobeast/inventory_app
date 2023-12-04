import { useContext } from "react";
import Computer from "./Computer";
import { SelectedBuildingContext } from "../context/selectedBuilding";



function ComputerContainer({ search }) {
    const { selectedBuilding } = useContext(SelectedBuildingContext)
    
    const filterComputers = selectedBuilding.computers.filter((computer) => {
        if(search) {
            return computer.asset_tag.toString().startsWith(search.toString())
        } else {
            return selectedBuilding.computers
        }
    })

    const computersToRender = filterComputers.map((computer) => (
        <Computer key={computer.id} computer={computer}/>
      ))

    return(
        <ul>
            <li>
            <p>Tag Number</p>
            <p>Model</p>
            <p>Serial Number</p>
            </li>
            {computersToRender}
        </ul>
    )

}
export default ComputerContainer