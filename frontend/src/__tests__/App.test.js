import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 100, success: true }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("App can simulate monty hall game", async () => {
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByTestId("main")).toBeInTheDocument();

  const simulationsInputField = getByTestId("simulations-input");
  fireEvent.change(simulationsInputField, { target: { value: 100000 } });

  const submitButton = getByTestId("simulator-submit-button");
  fireEvent.click(submitButton);

  await waitForElement(() => getByText("Simulating, please wait..."));
  await waitForElement(() => getByText("Winning chances are 100%"));
});
