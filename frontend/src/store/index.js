import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import schema from "./schema";
import { appReducer, simulatorReducer } from "./reducer";

const reducers = combineReducers({
  app: appReducer,
  simulator: simulatorReducer,
});

export default createStore(
  (state, action) => reducers(state, action),
  schema,
  applyMiddleware(thunk)
);
