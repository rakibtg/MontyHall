export const appReducer = (state = null, action) => {
  switch (action.type) {
    case "APP_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const simulatorReducer = (state = null, action) => {
  switch (action.type) {
    case "SIMULATOR_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
