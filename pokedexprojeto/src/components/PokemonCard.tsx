import React from "react";
import { PokemonDetail } from "../interface";
import PokemonList from "./PokemonRow";
import "./pokemon.css";
import { Detail } from "../App";

interface Props {
  pokemon: PokemonDetail[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon, viewDetail, setDetail } = props;
  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpened) {
      setDetail({ id: id, isOpened: true });
    }
  };

  return (
    <div
      className={
        viewDetail.isOpened
          ? "collection-container-active"
          : "collection-container"
      }
    >
      {viewDetail.isOpened ? (
        <div className="overlay"></div>
      ) : (
        <div className=""></div>
      )}
      {pokemon
        .sort((a, b) => a.id - b.id)
        .map((pokemon) => {
          return (
            <div onClick={() => selectPokemon(pokemon.id)}>
              <PokemonList
                viewDetail={viewDetail}
                setDetail={setDetail}
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                abilities={pokemon.abilities}
                image={pokemon.sprites.front_default}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PokemonCard;
