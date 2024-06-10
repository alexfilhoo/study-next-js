import React, { useEffect, useState } from "react";
import "./pokemon.css";
import { Detail } from "../App";

export type Ability = {
  ability: string;
  name: string;
  url: string;
}

interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities: Ability[] | undefined;
  name: string;
  id: number;
  image: string;
}

const PokemonRow: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail.id, id]);

  const closeDetail = () => {
    setDetail({ id: 0, isOpened: false });
  };

  useEffect(() => {
    console.log(abilities)
  })

  return (
    <div>
      {isSelected ? (
        <div className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="pokemon" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">
                Golpes:{" "}
                {abilities?.map((abilit: any) => {
                  return (
                  <div className="golpes">
                    <p className="detail-ability">{abilit.ability.name}</p>
                  </div>
                  )
                })}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="pokemon-list-container">
          <img src={image} alt="pokemon" className="image-pokemon" />
          <div className="pokemon-info">
            <h2 className="pokemon-name">{name}</h2>
            <p>#{id}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonRow;
