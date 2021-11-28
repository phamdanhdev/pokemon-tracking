import "./style.scss";
import React, { useState, useEffect } from "react";
import { pokemonSubject, usePokemonFetcher } from "../../services/pokemon";
import { useParams } from "react-router";
import PokemonCard from "../../components/PokemonCard";
import PokemonInfo from "../../components/PokemonInfo";

export default function AppDetailPage() {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  usePokemonFetcher(setPokemon);

  useEffect(() => {
    pokemonSubject.next(id);
  }, [id]);

  return (
    <div className="_pokemonDetail">
      <div className="_pokemonCard-container">
        <PokemonCard pokemon={pokemon} />
      </div>
      <div className="_pokemonInfo-container">
        <PokemonInfo pokemon={pokemon} />
      </div>
    </div>
  );
}
