import "./style.scss";
import React, { useState } from "react";
import {
  pokemonSubject,
  usePokemonFetcher,
  loadingSubject,
  useLoadingStatus,
} from "../../services/pokemon";

export default function AppDetailPage() {
  const [pokemon, setPokemon] = useState("");

  usePokemonFetcher(setPokemon);

  return <div>Detailpage</div>;
}
