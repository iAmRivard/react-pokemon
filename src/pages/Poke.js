import React from "react";

import Header from "../components/Header";
import ShowPokemon from "../components/ShowPokemon";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

class Poke extends React.Component {
  state = {
    pokemon: this.props.match.params.pokemon,
    loading: true,
    error: null,
    data: undefined,
    how: undefined
  };

  componentDidMount() {
    this.info(String(this.state.pokemon).trim().toLowerCase());
  }

  info = async (name) => {
    try {
      const n = await api.pokemons.find(name);
      const pokemon = {
        id: n.id,
        name: n.name,
        types: n.types,
        abilities: n.abilities,
        height: n.height,
      };
      this.setState({ loading: false, data: pokemon });

    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };



  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <Header
          titulo={this.state.pokemon}
          poke="true"
          data={this.state.data}
          loading={this.state.loading}
        />
        <ShowPokemon
          titulo={this.state.pokemon}
          poke="true"
          data={this.state.data}
          loading={this.state.loading}
          how={this.state.how}
        />
      </React.Fragment>
    );
  }
}

export default Poke;
