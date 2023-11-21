import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Scoreboard from './components/Scoreboard'

function App() {
  const [score, setScore] = useState(0);
  const [pokeTeam, setPokeTeam] = useState([]);
  const [chosenArr, setChosenArr] = useState([]);


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

    pokeArr = data.map((pokeData) => pokeData = { url: pokeData["sprites"]["other"]["official-artwork"]["front_default"], id: pokeData.name })

    setPokeTeam(pokeArr)
  }

  useEffect(() => {
    makePokeRequest();
  }, []);



  function seeCompInfo(e, data) {
    let currentPoke;

    
//this logic is all fucked up
    if (e.target.dataset.name == undefined) {
      currentPoke = e.target.parentNode.dataset.name
    } else {
      currentPoke = e.target.dataset.name
    }
    setScore(score + 1)

    for (const key in chosenArr) {
      if (chosenArr[key] == currentPoke) {
        setScore(0)
      }
    }
    if (score != 0) {
      let chosenTemp = []
      chosenTemp.push(currentPoke)
      setChosenArr(chosenTemp)
    }

    //check array for what I have selected already 
  }


  return (
    <>
      <Scoreboard data={score} />
      <div className='cardContainer' onClick={seeCompInfo}>
        {pokeTeam.map((pokeInfo) => <Card poke={pokeInfo} key={pokeInfo.id} onClick={((e) => seeCompInfo(e, data))} />)}
      </div>

    </>
  )

}
export default App
