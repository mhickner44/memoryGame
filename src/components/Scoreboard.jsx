import { useState } from 'react'

function Scoreboard(props){

console.log(props)
    return (
        <>
            <div className='board'>
                <h1>current count:{props.currentScore}</h1>
                <h1>best score:{props.topScore}</h1>
            </div>
        </>
    )
}

export default Scoreboard