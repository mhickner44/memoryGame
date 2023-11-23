import { useState } from 'react'
import viteImg from "../assets/vite.png"


function Card(poke) {
   
   //can access the stored information in the componenet 
        //but how do I use this to update the score state in the app file?
    // function handleClick(){
    //     alert(poke.poke.id)
    // }

    
    return (
        <>
            <div  className='card'  data-name={poke.poke.id} >
                <img src={poke.poke.url}  className='img' data-name={poke.poke.id}/>
                <h1 className='pokeName'>{poke.poke.id}</h1>
            </div>
        </>
    )
}

export default Card
