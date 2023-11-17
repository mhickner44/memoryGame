import { useState } from 'react'
import viteImg from "../assets/vite.png"


function Card(poke) {

    return (
        <>
            <div  className='card' >
                <img src={poke.poke.url}  className='img'/>
                <h1 className='pokeName'>{poke.poke.id}</h1>
            </div>
        </>
    )
}

export default Card
