import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Scoreboard from './components/scoreboard'

function App() {
  const [pokeTeam, setPokeTeam] = useState([]);


  //list of wanted pokemon
  let pokemon = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "pikachu",
    "pichu",
    "raichu"
  ]

  let pokeArr = []

  //fetch calls
  let callsArr = pokemon.map((name) => fetch('https://pokeapi.co/api/v2/pokemon/' + name));

  async function makePokeRequest() {

    let response = await Promise.all(callsArr);
    response = response.map(res => res.clone()) //for error about reading response.json multiple times
    const data = await Promise.all(response.map(responses => responses.json()))
    //map throught he data arr and get what I want
   
    pokeArr = data.map((pokeData) => pokeData =  {url:pokeData["sprites"]["other"]["official-artwork"]["front_default"], id:pokeData.name})
    
    setPokeTeam(pokeArr)
  }

  useEffect(() => {
    makePokeRequest();
  }, []);


  return (
    <>
      <Scoreboard />
      <div className='cardContainer'>
        {pokeTeam.map((pokeInfo) => <Card poke={pokeInfo} key={pokeInfo.id} />)}
      </div>

    </>
  )

}
export default App
