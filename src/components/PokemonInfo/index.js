import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function PokemonInfo({ pokemon }) {
  const abilities = pokemon?.abilities?.map((a, index, arr) => {
    if (index === arr.length - 1) {
      return <span key={a?.ability?.name}>{a?.ability?.name}.</span>;
    }
    return <span key={a?.ability?.name}> {a?.ability?.name}, </span>;
  });

  const types = pokemon?.types?.map((a, index, arr) => {
    if (index === arr.length - 1) {
      return <span key={a?.type?.name}>{a?.type?.name}.</span>;
    }
    return <span key={a?.type?.name}> {a?.type?.name}, </span>;
  });

  return (
    <div className="_pokemonInfo">
      <div className="_id">
        ID: <span>{pokemon?.id}</span>
      </div>
      <div className="_experience">
        Experience: <span>{pokemon?.base_experience}</span>
      </div>
      <div className="_height">
        Height: <span>{pokemon?.height}</span>
      </div>
      <div className="_weight">
        Weight: <span>{pokemon?.weight}</span>
      </div>
      <div className="_abilities">Abilities: {abilities}</div>
      <div className="_types">Types: {types}</div>
      <div className="_btn">
        <Link to={"/"}>Back to find</Link>
      </div>
    </div>
  );
}
