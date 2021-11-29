import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="_navbar">
      <Link to="/">
        <div>
          <h1>Pokemon Tracking</h1>
        </div>
      </Link>
    </div>
  );
}
