import React from "react";
import { Link } from "react-router-dom";

export default function Games() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2><Link to='lego'>Lego Treasure Hunt</Link></h2>
        <h2>Chess</h2>
        <h2>Ten Pin Bowling</h2>
        <h2>Dinosaur Maze</h2>
      </main>
    );
  }