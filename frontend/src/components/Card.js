import React from "react";
import Simulator from "./Simulator";

function Card() {
  return (
    <section className="card">
      <header className="card-header">
        <h1>Monty Hall Simulator</h1>
      </header>
      <section className="card-body">
        <Simulator />
      </section>
    </section>
  );
}

export default Card;
