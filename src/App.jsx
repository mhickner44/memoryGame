import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Scoreboard from './components/scoreboard'


function App() {

  let pokeImages = [
    { id: 0, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
    { id: 1, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
    { id: 2, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
    { id: 3, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
    { id: 4, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg" },
    { id: 5, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
    { id: 6, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
    { id: 7, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
    { id: 8, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
    { id: 9, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { id: 10, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png" }
  ];


  const pokeCards = pokeImages.map(poke => <Card pokeImg={poke.url} key={poke.id} />);


  return (
    <>
      <Scoreboard />
      <div className='cardContainer'>
        {pokeCards}
      </div>

    </>
  )
}

export default App
