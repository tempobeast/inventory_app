function ComputerPage({setOpenComputerPage}) {
    return (
        <div>
            <p>Computer Page</p>
            <button onClick={() => setOpenComputerPage(false)}>Close</button>
        </div>
    )
}

export default ComputerPage