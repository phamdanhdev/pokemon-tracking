import "./style.scss";
import React, { useState } from "react";
import { Spin } from "antd";
import {
  searchSubject,
  usePokemonListFetcher,
  loadingSubject,
  useLoadingStatus,
} from "../../services/pokemon";
import { Link } from "react-router-dom";

export default function Searchbox() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  usePokemonListFetcher(setResult);

  useLoadingStatus(setIsLoading);

  const handleOnChangeSearch = (e) => {
    const input = e.target.value;
    setSearch(input);
    searchSubject.next(input);
    loadingSubject.next(1);
  };

  const renderPokemonList = () => {
    return result.map((pokemon) => {
      const pokemonId = pokemon.url.slice(0, -1).split("/").pop();
      return (
        <Link to={`/pokemon/?id=${pokemonId}`} key={pokemon.name}>
          <div className="_pokemonItem">
            <p>{pokemon.name}</p>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="_searchBox">
      <div className="_searchInput">
        <input
          type="text"
          placeholder="Pokemon's name ..."
          onChange={handleOnChangeSearch}
          value={search}
        />
      </div>
      {isLoading ? (
        <div className="_loading">
          <Spin size="large" tip="Finding pokemon . . ." />
        </div>
      ) : (
        <div className="_searchResult">{renderPokemonList()}</div>
      )}
    </div>
  );
}
