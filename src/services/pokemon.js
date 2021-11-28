import { useEffect } from "react";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  from,
  switchMap,
} from "rxjs";
import { filter } from "rxjs/operators";

export const searchSubject = new BehaviorSubject("");

export const loadingSubject = new BehaviorSubject(0);

export const pokemonSubject = new BehaviorSubject({});

export const getPokemonById = async (id) => {
  if (typeof id === "object") {
    return;
  }
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
    (res) => res.json()
  );
  return pokemon;
};

export const getPokemonObservable = pokemonSubject.pipe(
  switchMap((val) => from(getPokemonById(val)))
);

export const usePokemonFetcher = (setter) => {
  useEffect(() => {
    let subscription = getPokemonObservable.subscribe((result) => {
      setter(result);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [setter]);
};

export const getPokemonByName = async (name) => {
  const { results: pokemonList } = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=1000"
  ).then((res) => res.json());
  return pokemonList.filter((pokemon) => pokemon.name.includes(name));
};

let searchResultObservable = searchSubject.pipe(
  filter((val) => val.length > 0),
  debounceTime(750), //Only work when user stop typing after 750ms
  distinctUntilChanged(), //For sure that only work when user type new input after 750ms
  switchMap((val) => from(getPokemonByName(val)))
);

export const usePokemonListFetcher = (setter) => {
  useEffect(() => {
    let subscription = searchResultObservable.subscribe((result) => {
      loadingSubject.next(0);
      setter(result.slice(0, 10));
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [setter]);
};

//Loading
export const useLoadingStatus = (setter) => {
  useEffect(() => {
    let subscription = loadingSubject.subscribe((result) => setter(result));
    return () => {
      subscription.unsubscribe();
    };
  }, [setter]);
};
