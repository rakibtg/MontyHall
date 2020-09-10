import React from "react";

function Simulator() {
  
  return (
    <section className="simulator">
      <form>
        <label htmlFor="simulations">
          Number of simulations
          <input
            type="number"
            min="1"
            id="simulations"
            name="simulations"
            required
          />
        </label>
        <label htmlFor="door">
          <input
            type="checkbox"
            id="door"
            name="switch"
          />
          Switch door
        </label>
        <label htmlFor="submit" aria-label="Start simulator">
          <input id="submit" type="submit" value="Simulate" />
        </label>
      </form>
    </section>
  );
}

export default Simulator;
