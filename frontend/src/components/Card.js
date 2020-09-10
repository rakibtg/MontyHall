import React from "react";
import Simulator from "./Simulator";
import Result from "./Result";

function Card() {
  return (
    <section className="card">
      <header className="card-header">
        <h1>Monty Hall Simulator</h1>
      </header>
      <section className="card-body">
        <Simulator />
      </section>
      <Result />
    </section>
  );
}

export default Card;
