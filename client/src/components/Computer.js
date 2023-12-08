import { useState, useContext } from 'react'
import ComputerTransfer from './ComputerTransfer'
import { SelectedBuildingContext } from '../context/selectedBuilding'
import ComputerPage from './ComputerPage';

function Computer({ computer }) {
    const [transfer, setTransfer] = useState(false);
    const [openComputerPage, setOpenComputerPage] = useState(false)
    const { selectedBuilding } = useContext(SelectedBuildingContext);

    return(
        <li className='computer-container' key={computer.id} >
          <div className='computer-item'>
            <p className='arrow' onClick={() => setOpenComputerPage(!openComputerPage)}>{!openComputerPage ? '▶' : '▼'}</p>
            <p>{computer.asset_tag}</p>
            <p>{computer.model}</p>
            <p>{computer.serial_number}</p>
            <button className='transfer-button' onClick={() => setTransfer(!transfer)}>transfer</button>
          </div>
          {openComputerPage ? 
          <ComputerPage />
            : null
          }
          {transfer ?
          <ComputerTransfer computer={computer} setTransfer={setTransfer} selectedBuilding={selectedBuilding}/>
          : null
          }
        </li>
    )
}
export default Computer