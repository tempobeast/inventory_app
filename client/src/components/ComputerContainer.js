import Computer from "./Computer"

function ComputerContainer({selectedBuilding}) {

    const computersToRender = selectedBuilding.computers.map((computer) => (
        <Computer computer={computer}/>
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