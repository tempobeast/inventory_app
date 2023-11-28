import { useState } from 'react'

function ComputerContainer({selectedBuilding}) {

    const [to, setTo] = useState('')

    return(
       <form className='transfer'>
        <label>To: </label>
        <input 
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
        />
       </form>
    )

}
export default ComputerContainer