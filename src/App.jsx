import { useState } from "react";
import "./App.css";
import "./styles/style.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [selectedPokemons, setSelectedPokemons] = useState([]);

    function addSelectedPokemon(pokemonName) {
        if (selectedPokemons.includes(pokemonName)) {
            resetScore();
        } else {
            let newArr = selectedPokemons.slice();
            newArr.push(pokemonName);
            setSelectedPokemons(newArr);
            incrementScore();
        }
    }

    function incrementScore() {
        setScore(score + 1);
    }

    function resetScore() {
        setScore(0);
        setSelectedPokemons([]);
    }

    if (score > bestScore) setBestScore(score);

    return (
        <div id='page-container'>
            <Header score={score} bestScore={bestScore} />
            <Cards addSelectedPokemon={addSelectedPokemon} />
        </div>
    );
}

export default App;
