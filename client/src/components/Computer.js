import { useState, useContext } from 'react'
import ComputerTransfer from './ComputerTransfer'
import { SelectedBuildingContext } from '../context/selectedBuilding'

function Computer({ computer }) {
    const [transfer, setTransfer] = useState(false);
    const { selectedBuilding } = useContext(SelectedBuildingContext);

    return(
        <li className='computer-container' key={computer.id}>
          <div className='computer-item'>
            <p>{computer.asset_tag}</p>
            <p>{computer.model}</p>
            <p>{computer.serial_number}</p>
            <button onClick={() => setTransfer(!transfer)}>transfer</button>
          </div>
          {transfer ?
          <ComputerTransfer computer={computer} setTransfer={setTransfer} selectedBuilding={selectedBuilding}/>
          : null
          }
        </li>
    )
}
export default Computer