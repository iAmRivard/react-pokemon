import React from "react";
import { Redirect } from "react-router-dom";

import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015

function getLink(l) {
  return `/${l}`;
}


class Buscador extends React.Component {
  state = {
    link: false,
    selected: null,
    buscar: false

  };
  
  buscar = (e) => {
    const s = this.state.link;
    console.log(this.state.link)
    if (s) {
      this.setState({buscar: true});
    }else{
    }
  };

  redirect(){
    if (this.state.buscar) {
      return   <Redirect to={getLink(this.state.link)} />
    }else{
      return;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="input-group mb-3">
            <Typeahead
              placeholder="Buscar Pokémon"
              id="thypeahead"
              onChange={e => {

                  this.setState({ link: e[0]});
              }}
              options={["Bulbasaur ", "Ivysaur ", "Venusaur ", "Charmander ", "Charmeleon ", "Charizard ", "Squirtle ", "Wartortle ", "Blastoise ", "Caterpie ", "Metapod ", "Butterfree ", "Weedle ", "Kakuna ", "Beedrill ", "Pidgey ", "Pidgeotto ", "Pidgeot ", "Rattata ", "Raticate ", "Spearow ", "Fearow ", "Ekans ", "Arbok ", "Pikachu ", "Raichu ", "Sandshrew ", "Sandslash ", "Nidoran ", "Nidorina ", "Nidoqueen ", "Nidoran ", "Nidorino ", "Nidoking ", "Clefairy ", "Clefable ", "Vulpix ", "Ninetales ", "Jigglypuff ", "Wigglytuff ", "Zubat ", "Golbat ", "Oddish ", "Gloom ", "Vileplume ", "Paras ", "Parasect ", "Venonat ", "Venomoth ", "Diglett ", "Dugtrio ", "Meowth ", "Persian ", "Psyduck ", "Golduck ", "Mankey ", "Primeape ", "Growlithe ", "Arcanine ", "Poliwag ", "Poliwhirl ", "Poliwrath ", "Abra ", "Kadabra ", "Alakazam ", "Machop ", "Machoke ", "Machamp ", "Bellsprout ", "Weepinbell ", "Victreebel ", "Tentacool ", "Tentacruel ", "Geodude ", "Graveler ", "Golem ", "Ponyta ", "Rapidash ", "Slowpoke ", "Slowbro ", "Magnemite ", "Magneton ", "Farfetch'd ", "Doduo ", "Dodrio ", "Seel ", "Dewgong ", "Grimer ", "Muk ", "Shellder ", "Cloyster ", "Gastly ", "Haunter ", "Gengar ", "Onix ", "Drowzee ", "Hypno ", "Krabby ", "Kingler ", "Voltorb "]}
            />
            <div className="input-group-append">

                <button className="input-group-text" id="addon-wrapping" onClick={this.buscar}>
                  Ir
                </button>

            </div>
            {this.redirect()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Buscador;
