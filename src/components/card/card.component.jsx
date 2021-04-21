import React from "react";
import "../card/card.styles.css";
const cardList = ({ monster }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set2`}
      alt="monster"
      width="180px"
      height="180px"
    />
    <h2>{monster.name}</h2><p>{monster.email}</p>
  </div>
);
export default cardList;
