import React from "react";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import CardList from "./CardList";
class Cards extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    init: 0,
  };

  componentDidMount() {
    this.fetchData();
  }

  prev = () => {
    if (this.state.init !== 0) {
      this.setState({ init: 0 });

      this.fetchData();
    }
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.pokemons.list(9, this.state.init);
      let fetchs = this.state.init + 9;
      this.i(data.results);
      this.setState({ init: fetchs });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  i = async (array) => {
    const result = await [];
    for await (let i of array) {
      const n = await api.pokemons.find(i.name);
      const pokemon = {
        id: n.id,
        name: n.name,
        types: n.types,
      };
      result.push(pokemon);
    }
    this.setState({ loading: false, data: result });
  };

  addPokemon = (e) => {
    this.fetchData();
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
        <div className="container">
          <p>
            &nbsp;
            <button
              onClick={this.addPokemon}
              className="btn btn-outline-primary btn-sm float-right ml-2"
            >
              Siguiente
            </button>
          </p>

          <CardList cards={this.state.data} loading={this.state.loading} />
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
