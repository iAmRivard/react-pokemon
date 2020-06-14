import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function UpFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ReturnClass(ca) {
  const c = `card-img-top in-down ${ca}`;
  return c;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function isLoading(loading, pro, lt) {
  if (loading) {
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
        
        {pro.loading}
        <img
          className={ReturnClass(pro.type[0].type.name)}
          src={pro.img}
          alt={pro.name}
        />
        <div className="card-body">
          <h5 className="card-title"> {UpFirst(pro.name)}</h5>
          <ul className="list-group list-group-horizontal-sm">{lt}</ul>
        </div>
      </React.Fragment>
    );
  }
}
class Card extends React.Component {
  render() {
    const pro = this.props;
    const types = this.props.type;
    const listType = types.map((t) => (
      <li key={getRandomInt(1, 100)}>
        <div className="list-group-item type-poke">{UpFirst(t.type.name)}</div>
      </li>
    ));
    return isLoading(pro.loading, pro, listType);
  }
}
export default Card;
