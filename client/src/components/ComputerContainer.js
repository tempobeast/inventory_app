import Computer from "./Computer"

function ComputerContainer({selectedBuilding}) {

    const computersToRender = selectedBuilding.computers.map((computer) => (
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