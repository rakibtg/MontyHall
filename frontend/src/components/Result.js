import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function Result() {
  const { result } = useSelector((state) => state.app, shallowEqual);

  return <section className="result">{result}</section>;
}

export default Result;
