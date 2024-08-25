import { useState, useEffect } from "react";
import "./App.css";
import "./styles/style.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [selectedPokemons, setSelectedPokemons] = useState([]);

    function addSelectedPokemon(pokemon) {}

    function incrementScore() {}

    function resetScore() {}

    if (score > bestScore) setBestScore(score);

    return (
        <div id='page-container'>
            <Header />
            <Cards />
        </div>
    );
}

export default App;
