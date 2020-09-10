import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Simulator from "../components/Simulator";
import store from "../store";
import { simulatorAction, appAction } from "../store/action";

test("Simulator component has all required elements", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Simulator />
    </Provider>
  );

  const form = getByTestId("simulator");
  expect(form).toBeInTheDocument();

  const simulationsInputField = getByTestId("simulations-input");
  expect(simulationsInputField).toBeRequired();
  expect(simulationsInputField).toBeEnabled();
  expect(simulationsInputField).toHaveValue(1);

  fireEvent.change(simulationsInputField, { target: { value: 100000 } });
  expect(simulationsInputField).toHaveValue(100000);

  const submitButton = getByTestId("simulator-submit-button");
  expect(submitButton).toBeEnabled();

  const changeDoorCheckbox = getByTestId("simulator-switch-door");
  expect(changeDoorCheckbox).not.toBeChecked();
  fireEvent.click(changeDoorCheckbox);
  expect(changeDoorCheckbox).toBeChecked();

  store.dispatch(simulatorAction({ simulations: 1000 }));
  expect(simulationsInputField).toHaveValue(1000);

  store.dispatch(simulatorAction({ switch: true }));
  expect(changeDoorCheckbox).toBeChecked();

  store.dispatch(simulatorAction({ switch: false }));
  expect(changeDoorCheckbox).not.toBeChecked();

  store.dispatch(appAction({ loading: true }));
  expect(submitButton).toBeDisabled();

  store.dispatch(appAction({ loading: false }));
  expect(submitButton).toBeEnabled();
});
