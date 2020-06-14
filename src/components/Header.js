import React from "react";
import "./style/components.css";
import pikachu from "../images/pikachu-sin-fondo.png";
import api from '../api'

function Header(props) {

  if (!props.loading) {

  if (props.poke) {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="display-4  in-left">{props.titulo}</h1>
                <p className="lead in-left">
                  {props.titulo} es un pokémon de la primera generación
                </p>
              </div>
              <div className="col-md-4  ">
                <img
                  src={api.pokemons.pokeImg(props.data.id)}
                  alt="Pikachu busca pokemon"
                  width="150px;"
                  className="headerImagen in-down"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="display-4  in-left">Todos los Pokémon</h1>
                <p className="lead in-left ">
                  Encuentra todos los pokémon existentes.
                </p>
              </div>
              <div className="col-md-4  ">
                <img
                  src={pikachu}
                  alt="Pikachu busca pokemon"
                  width="150px;"
                  className="headerImagen in-down"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}else{

}
}

export default Header;
