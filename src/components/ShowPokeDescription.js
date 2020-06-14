import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function ShowPokeDescription(props) {
  if (props.load) {
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
    let i = 1;
    const listOp = props.how.nombre.map((name) => (
      <li key={i} className="list-group-item">
          {i++}. {name.name}
      </li>
    ));
    return (
      <React.Fragment>
        <div className="mb-2">
          <div className="alert alert-secondary in-left" role="alert">
            <h4 className="alert-heading"> ¿Quién es {props.titulo}?</h4>
            <p className="text-justify">
              {props.titulo} es un pokémon de la primera generación, con una
              altura de {props.data.height} su color principalmente es {props.how.color}, pertenece a la especie {props.how.especie.name}; habitualmente el habitat de {props.titulo} usualmente suele ser{" "}
              {props.how.habitat}.
            </p>
            <hr />
    <h5>{props.titulo} en diferentes idiomas:</h5>
            <ul className="list-group">{listOp}</ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ShowPokeDescription;
