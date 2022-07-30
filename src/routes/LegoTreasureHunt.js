import React from "react";
import { displayQuestion } from "../games/Lego/legoData";

export default function LegoTreasureHunt() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>{displayQuestion(1)}</h2>
      </main>
    );
  }