import React, { useEffect, useState } from "react";
import "./pokemon.css";
import { Detail } from "../App";

interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities:
    | {
        ability: string;
        name: string;
      }[]
    | undefined;
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail.id, id]);

  const closeDetail = () => {
    setDetail({ id: 0, isOpened: false });
  };

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
                Abilites:{" "}
                {abilities?.map((abilit: any) => {
                  return <div className="">{abilit.ability.name}</div>;
                })}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="pokemon-list-container">
          <img src={image} alt="pokemon" />
          <div className="pokemon-info">
            <h2>{name}</h2>
            <p>#{id}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
