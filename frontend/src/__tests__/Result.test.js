import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Result from "../components/Result";
import store from "../store";
import { appAction } from "../store/action";

test("Result component renders with valid elements", async () => {
  const { getByTestId, getByText } = render(
    <Provider store={store}>
      <Result />
    </Provider>
  );

  const scoreBoard = getByTestId("score-board");
  expect(scoreBoard).toBeEmpty();

  store.dispatch(appAction({ loading: true }));
  expect(getByText("Simulating, please wait...")).toBeInTheDocument();

  store.dispatch(appAction({ result: 23, loading: false }));
  expect(getByText("🎉")).toBeInTheDocument();
  expect(getByText("Winning chances are 23%")).toBeInTheDocument();

  store.dispatch(appAction({ result: 0, loading: false }));
  expect(getByText("💔")).toBeInTheDocument();
  expect(getByText("Winning chances are 0%")).toBeInTheDocument();

  store.dispatch(appAction({ result: null, loading: false }));

  expect(scoreBoard).toBeEmpty();
});
