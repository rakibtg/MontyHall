import http from "../utils/http";

export const appAction = (payload) => ({
  type: "APP_DATA",
  payload,
});

export const simulatorAction = (payload) => ({
  type: "SIMULATOR_DATA",
  payload,
});

export const fetchSimulatorResult = ({ totalSimulations, switchDoor }) => (
  dispatch
) => {
  const endpoint = `montyhall?total_simulations=${totalSimulations}&switch_door=${switchDoor}`;
  dispatch(appAction({ loading: true }));
  http({ endpoint })
    .then((res) => {
      dispatch(appAction({ loading: false, result: res.data }));
    })
    .catch((error) => {
      dispatch(appAction({ loading: false }));
      alert("Error occured, please try again.");
      console.log(error);
    });
};
