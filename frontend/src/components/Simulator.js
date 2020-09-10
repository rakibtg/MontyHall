import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { simulatorAction, fetchSimulatorResult } from "../store/action";

function Simulator() {
  const dispatch = useDispatch();
  const simulator = useSelector((state) => state.simulator, shallowEqual);
  const handleInputChage = (event) => {
    const { name, type } = event.target;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    dispatch(
      simulatorAction({
        [name]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      fetchSimulatorResult({
        totalSimulations: simulator.simulations,
        switchDoor: simulator.switch,
      })
    );
  };

  return (
    <section className="simulator">
      <form onSubmit={handleSubmit}>
        <label htmlFor="simulations">
          Number of simulations
          <input
            type="number"
            min="1"
            id="simulations"
            name="simulations"
            required
            value={simulator.simulations}
            onChange={handleInputChage}
          />
        </label>
        <label htmlFor="door">
          <input
            type="checkbox"
            id="door"
            name="switch"
            value={simulator.switch}
            onChange={handleInputChage}
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
