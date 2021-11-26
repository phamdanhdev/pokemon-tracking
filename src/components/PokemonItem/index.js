import "./style.scss";
import React from "react";

export default function PokemonItem() {
  return (
    <div className="_pokemon">
      <div className="_img-container">
        <img src={grovyleImg} alt="grovyleImg" />
      </div>
      <div className="_info">
        <div className="_number">
          <p>#6</p>
        </div>
        <div className="_name">Grovyle</div>
        <div className="_type">Grass</div>
      </div>
    </div>
  );
}
