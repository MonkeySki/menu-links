import { useParams } from "react-router-dom";
import { getMessage } from "../data";
import React from "react";

export default function Message() {
    let params = useParams();
    let message = getMessage(parseInt(params.messageId, 10));
  return (
    <main style={{ padding: "0.5rem" }}>
      <h2>{message.name}</h2>
      <p style={{padding: "0.5rem"}}>{message.info}</p>
    </main>
  );
}