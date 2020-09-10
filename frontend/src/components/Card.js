import React from "react";
import Simulator from "./Simulator";
import Result from "./Result";

function Card() {
  return (
    <section className="card" data-testid="card">
      <header data-testid="card-header" className="card-header">
        <h1 data-testid="card-header-title">Monty Hall Simulator</h1>
      </header>
      <section className="card-body" data-testid="simulator-wrapper">
        <Simulator />
      </section>
      <Result />
    </section>
  );
}

export default Card;
