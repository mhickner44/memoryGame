import { useState } from 'react'

function Scoreboard({data}){


    return (
        <>
            <div className='board'>
                <h1>current count:{data}</h1>
                <h1>best score:</h1>
            </div>
        </>
    )
}

export default Scoreboard