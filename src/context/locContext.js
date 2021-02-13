import createDataContext from "./createDataContext";
import Conection from "../api/Conection";

const loc = (state, action) => {
  switch (action.type) {
    case "location":
      return action.payload;
    default:
      return state;
  }
};

const got = (dispatch) => async () => {
  const accion = await Conection.get("/location");
  dispatch({ type: "location", payload: accion.data });
};

const location = () => async (animalId, markers, name, location) => {
  console.log("DATA TO SENT", { animalId, markers, name, location })
  await Conection.post("/location", { animalId, markers, name, location });
};

export const { Context, Provider } = createDataContext(
  loc,
  { got, location },
  []
);