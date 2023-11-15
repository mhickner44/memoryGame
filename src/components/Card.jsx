import { useState } from 'react'
import viteImg from "../assets/vite.png"


function Card({poke}) {

    return (
        <>
            <div  className='card'  key={poke.id}>
                <img src={poke} key={poke.id} className='img'/>
                <h1 className='pokeName'>pokemon Name</h1>
            </div>
        </>
    )
}

export default Card
