import React from "react";

import Header from "../components/Header";
import Cards from "../components/Cards";
import Buscador from "../components/Buscador";

class Inicio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Buscador />

        <Cards />
      </React.Fragment>
    );
  }
}

export default Inicio;
