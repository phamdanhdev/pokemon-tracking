import "./style.scss";
import React from "react";

export default function PokemonCard({ pokemon }) {
  const types = pokemon?.types?.map((t) => (
    <p key={t?.slot} style={{ margin: "0" }}>
      {t?.type?.name}
    </p>
  ));
  return (
    <div className="_pokemonCard">
      <div className="_img-container">
        <img
          src={pokemon?.sprites?.other?.home?.front_default}
          alt="pokemonImg"
        />
      </div>
      <div className="_info">
        <div className="_number">
          <p>#{pokemon?.id}</p>
        </div>
        <div className="_name">{pokemon?.name}</div>
        <div className="_type">{types}</div>
      </div>
    </div>
  );
}
