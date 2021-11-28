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

export const usePokemonFetcher = (setter) => {
  useEffect(() => {
    let subscription = searchResultObservable.subscribe((result) => {
      loadingSubject.next(0);
      setter(result);
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
