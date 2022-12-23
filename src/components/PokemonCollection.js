import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ search, pokemon }) {
  const searchFilteredPokemon = pokemon.filter((poke) => {
    return poke.name.includes(search);
  });

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {searchFilteredPokemon.map((poke, i) => {
        return <PokemonCard key={i} pokemon={poke} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
