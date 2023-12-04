import { useState } from 'react'

function ComputerContainer({computer, setTransfer, selectedBuilding}) {

    const [to, setTo] = useState('')
    const [transferType, setTransferType] = useState('')
    
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
        .then((data) => console.log(data))
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