import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { simulatorAction, fetchSimulatorResult } from "../store/action";

function Simulator() {
  const dispatch = useDispatch();
  const simulator = useSelector((state) => state.simulator, shallowEqual);
  const { loading } = useSelector((state) => state.app, shallowEqual);
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
      <form data-testid="simulator" onSubmit={handleSubmit}>
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
            data-testid="simulations-input"
          />
        </label>
        <label htmlFor="door">
          <input
            type="checkbox"
            id="door"
            name="switch"
            checked={simulator.switch}
            onChange={handleInputChage}
            data-testid="simulator-switch-door"
          />
          Switch door
        </label>
        <label htmlFor="submit" aria-label="Start simulator">
          <input
            id="submit"
            disabled={loading}
            type="submit"
            value="Simulate"
            data-testid="simulator-submit-button"
          />
        </label>
      </form>
    </section>
  );
}

export default Simulator;
