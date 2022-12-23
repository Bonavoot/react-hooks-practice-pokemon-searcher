import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch("http://localhost:3001/pokemon");
      const pokemonData = await res.json();

      setPokemon(pokemonData);
    };

    fetchPokemon();
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} pokemon={pokemon} />
      <br />
      <PokemonCollection search={search} pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
