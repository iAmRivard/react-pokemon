import React from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ShowPokeDescription from "./ShowPokeDescription";
import api from '../api';
class ShowPokemon extends React.Component {
    state = {
        how: undefined,
        load: true,
        error: false,
    }
    componentDidMount(){
        this.getDescription(this.props.data.id)
    }
  getDescription = async (id) => {
    try {
      const d = await api.pokemons.getDescription(id);
      const about = {
        color: d.color.name || "desconocido",
        especie: d.evolves_from_species || "desconocido",
        habitat: d.habitat.name || "desconocido",
        nombre: d.names,
      };
      console.log(about)
      this.setState({ load: false, how: about });
    } catch (error) {
      this.setState({ load: false, error: true });
    }
  };
  isLoading(p) {
    if (p.loading) {
      return (
        <div className="p-5">
          <SkeletonTheme color="#202020" highlightColor="#717573">
            <p>
              <Skeleton count={7} />
            </p>
          </SkeletonTheme>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb in-left">
                <li className="breadcrumb-item">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.props.titulo}
                </li>
              </ol>
            </nav>
            <ShowPokeDescription
              titulo={this.props.titulo}
              data={this.props.data}
              how={this.state.how}
              load={ this.state.load}
            />
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return this.isLoading(this.props);
  }
}
export default ShowPokemon;
