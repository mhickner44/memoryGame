import { useState } from 'react'
import viteImg from "../assets/vite.png"

function card(pokeImg,pokeName) {


    return (
        <>
            <div  className='card'>
                <img src={viteImg} className='img'/>
                <h1 className='pokeName'>pokemon Name</h1>
            </div>
        </>
    )
}

export default card
