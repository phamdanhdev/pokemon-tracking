import React from "react";
import "./style.scss";
import grovyleImg from "../../assets/img/253-grovyle-grass.png";
import pikachuImg from "../../assets/img/25-pikachu-electric.png";
import charizardImg from "../../assets/img/6-charizard-fire.png";
import Searchbox from "../../components/Searchbox";

export default function AppHomePage() {
  return (
    <div className="_homePage">
      <div className="_advertise-container">
        <div className="_advertise">
          <div className="_p0">
            <h2>Let's check out Pokemon!</h2>
          </div>
          <div className="_pokemon _p1">
            <div className="_img-container">
              <img src={grovyleImg} alt="grovyleImg" />
            </div>
            <div className="_info">
              <div className="_number">
                <p>#253</p>
              </div>
              <div className="_name">Grovyle</div>
              <div className="_type">Grass</div>
            </div>
          </div>
          <div className="_pokemon _p2">
            <div className="_img-container">
              <img src={pikachuImg} alt="pikachuImg" />
            </div>
            <div className="_info">
              <div className="_number">
                <p>#25</p>
              </div>
              <div className="_name">Pikachu</div>
              <div className="_type">Electric</div>
            </div>
          </div>
          <div className="_pokemon _p3">
            <div className="_img-container">
              <img src={charizardImg} alt="charizardImg" />
            </div>
            <div className="_info">
              <div className="_number">
                <p>#6</p>
              </div>
              <div className="_name">Charizard</div>
              <div className="_type">Fire</div>
            </div>
          </div>
        </div>
      </div>
      <div className="_searchBox-container">
        <Searchbox />
      </div>
    </div>
  );
}
