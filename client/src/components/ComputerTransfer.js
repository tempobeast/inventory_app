import { useState, useContext } from 'react'
import { BuildingsContext } from '../context/buildings'
import { SelectedBuildingContext } from '../context/selectedBuilding'

function ComputerContainer({ computer, setTransfer }) {

    const [to, setTo] = useState('')
    const [transferType, setTransferType] = useState('')
    const {buildings, setBuildings} = useContext(BuildingsContext)
    const { selectedBuilding, setSelectedBuilding } = useContext(SelectedBuildingContext)
    console.log(selectedBuilding)
    
    function handleSubmit(e) {
        e.preventDefault()

        fetch(`transfers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: to,
                from: selectedBuilding,
                transfer_type: transferType,
                computer_id: computer.id
            })
        }).then((res) => res.json())
        .then((data) => {
            const fromBuilding = data[0];
            const toBuilding = data[1];
            const otherBuildings = buildings.filter((building) => building.id !== data[0].id && building.id !== data[1].id);
            setSelectedBuilding(fromBuilding)
            setBuildings([...otherBuildings, fromBuilding, toBuilding])
        })
    }

    return(
       <form className='transfer' onSubmit={handleSubmit}>
        <button onClick={() => setTransfer(false)}>x</button>
        <label>To: </label>
        <input 
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
        />
        <label>Transfer-type: </label>
        <input 
            type="text"
            id="Transfer-type"
            value={transferType}
            onChange={(e) => setTransferType(e.target.value)}
        />

        <button type='submit'>submit</button>
       </form>
    )

}
export default ComputerContainer