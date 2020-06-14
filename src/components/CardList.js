import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./style/components.css";
import api from "../api";

function getUrl(url) {
  return `/${url}`;
}

function CardList(props) {
  const cards = props.cards;
  const listItems = cards.map((card,i) => (
    
    <li key={i} className="card no-style-link">
      <Link to={getUrl(card.name)} className="no-style-link">
        <Card
          name={card.name}
          img={api.pokemons.pokeImg(card.id)}
          type={card.types}
          loading={props.loading}
        />
      </Link>
    </li>
  ));
  return <ul className="card-columns">{listItems}</ul>;
}

export default CardList;
