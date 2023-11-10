import { useState } from 'react'
import viteImg from "../assets/vite.png"
import blastoise from '../assets/pokemonImages/blastoise.png'

function card(pokeImg) {
 

    //pokeimage needs state ?
    //const [pokeName, setPokeName] = useState([]);

    return (
        <>
            <div  className='card'>
                <img src={pokeImg} className='img'/>
                <h1 className='pokeName'>pokemon Name</h1>
            </div>
        </>
    )
}

export default card
