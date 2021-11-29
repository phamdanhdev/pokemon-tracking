import "./style.scss";
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import {
  pokemonSubject,
  usePokemonFetcher,
  useLoadingStatus,
} from "../../services/pokemon";
import { useParams } from "react-router";
import PokemonCard from "../../components/PokemonCard";
import PokemonInfo from "../../components/PokemonInfo";

export default function AppDetailPage() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(0);

  const { id } = useParams();

  usePokemonFetcher(setPokemon);
  useLoadingStatus(setIsLoading);

  useEffect(() => {
    pokemonSubject.next(id);
  }, [id]);

  return (
    <div className="_pokemonDetail">
      {isLoading ? (
        <div className="_loading">
          <Spin size="large" tip="Finding pokemon . . ." />
        </div>
      ) : (
        <>
          <div className="_pokemonCard-container">
            <PokemonCard pokemon={pokemon} />
          </div>
          <div className="_pokemonInfo-container">
            <PokemonInfo pokemon={pokemon} />
          </div>
        </>
      )}
    </div>
  );
}
