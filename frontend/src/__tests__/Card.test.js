import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Card from "../components/Card";
import store from "../store";

test("Card component renders with valid elements", () => {
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <Card />
    </Provider>
  );

  expect(getByTestId("card")).toBeInTheDocument();
  expect(getByTestId("card-header-title")).toBeInTheDocument();
  expect(getByText("Monty Hall Simulator")).toBeInTheDocument();

  expect(getByTestId("simulator-wrapper")).toBeInTheDocument();
  expect(getByTestId("simulator")).toBeInTheDocument();

  expect(getByTestId("score-board")).toBeEmpty();
});
