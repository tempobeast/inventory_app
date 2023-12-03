import Computer from "./Computer"

function ComputerContainer({selectedBuilding, search}) {

    const filterComputers = selectedBuilding.computers.filter((computer) => {
        if(search) {
            return computer.asset_tag.toString().startsWith(search.toString())
        } else {
            return selectedBuilding.computers
        }
    })

    const computersToRender = filterComputers.map((computer) => (
        <Computer key={computer.id} computer={computer} selectedBuilding={selectedBuilding}/>
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