import Card from "./Card";
import { useEffect, useState } from "react";
import pokemonList from "../assets/pokemonList";
const dataUrl = "https://pokeapi.co/api/v2/pokemon/";

export default function Cards({ handleCardClick, addSelectedPokemon }) {
    const [pokemon, setPokemon] = useState([]);

    function fetchImages() {
        // Create an array of promises for fetching each Pokémon's data
        const fetchPokemonPromises = pokemonList.map((pokemon) => {
            return fetch(dataUrl + pokemon)
                .then((response) => response.json())
                .then((json) => ({
                    url: json.sprites.front_default,
                    name: pokemon,
                }));
        });

        // Wait for all promises to resolve and then update state
        Promise.all(fetchPokemonPromises)
            .then((newPokemon) => setPokemon(newPokemon))
            .catch((error) => console.error("Error fetching data:", error));
    }

    // Fetch only on mount
    useEffect(() => {
        fetchImages();
    }, []);

    function randomizePokemonOrder() {
        let newPokemon = [...pokemon];
        let curr = pokemon.length;
        while (curr != 0) {
            let rand = Math.floor(Math.random() * curr);
            curr--;
            [newPokemon[curr], newPokemon[rand]] = [
                newPokemon[rand],
                newPokemon[curr],
            ];
        }
        setPokemon(newPokemon);
    }

    function handleCardClick(name) {
        console.log(name);
        addSelectedPokemon(name);
        randomizePokemonOrder();
    }

    return (
        <div id='cards'>
            {pokemon.length === 0 ? (
                <p>Loading...</p>
            ) : (
                pokemon.map((obj) => (
                    <Card
                        url={obj.url}
                        key={obj.name}
                        name={obj.name}
                        onClick={handleCardClick}
                    />
                ))
            )}
        </div>
    );
}
