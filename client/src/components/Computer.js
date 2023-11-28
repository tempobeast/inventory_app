import { useState } from 'react'
import ComputerTransfer from './ComputerTransfer'

function Computer({computer}) {
    const [transfer, setTransfer] = useState(false)

    return(
        <li className='computer-container' key={computer.id}>
          <div className='computer-item'>
            <p>{computer.asset_tag}</p>
            <p>{computer.model}</p>
            <p>{computer.serial_number}</p>
            <button onClick={() => setTransfer(!transfer)}>transfer</button>
          </div>
          {transfer ?
          <ComputerTransfer />
          : null
          }
        </li>
    )

}
export default Computer