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

  //shuffle algo
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  function seeCompInfo(e, data) {
    let currentPoke;
    let beenUsed = false
    let chosenTempArr = chosenArr;
    let tempPokeDisplay = pokeTeam;
    console.log(tempPokeDisplay)

    //if clicked on the poke image it gets the card info
    if (e.target.dataset.name != undefined) {
      //click was not on a card
      //if card it gets the poke name 
      currentPoke = e.target.dataset.name

      //checks to see if the pokemon has been selected already by checkign the array
      for (const key in chosenArr) {
        if (chosenArr[key] == currentPoke) {
          console.log("pokemon has been selected")
          //if found in array set score to 0 
          beenUsed = true;
        }
      }

      //increments the score 
      if (beenUsed === true) {
        setScore(0)
        chosenTempArr = []
        setChosenArr(chosenTempArr)
      } else {
        setScore(score + 1)
        chosenTempArr.push(currentPoke)
        setChosenArr(chosenTempArr)
      }
      //re arrange the array to then display again.

      tempPokeDisplay = pokeTeam
      shuffle(tempPokeDisplay)
      setPokeTeam(tempPokeDisplay)
    }

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
