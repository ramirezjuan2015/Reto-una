import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import Conectionapi from "../api/Conection";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    case "start_loading":
      return { ...state, loading: true };
    case "stop_loading":
      return { ...state, loading: false };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Maqueta");
  } else {
    navigate("Inscribirse");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const registro = (dispatch) => async ({ email, password }) => {
  try {
    const response = await Conectionapi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("Maqueta");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Algo salio mal al registrase",
    });
  }
};

const inscribirse = (dispatch) => async ({ email, password }) => {
  try {
    const response = await Conectionapi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("Maqueta");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Algo salio mal al iniciar sesión",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

const startLoading = (dispatch) => () => {
  dispatch({ type: "start_loading" });
};

const stopLoading = (dispatch) => () => {
  dispatch({ type: "stop_loading" });
};

export const { Provider, Context } = createDataContext(
  authReducer, {
  registro,
  signout,
  inscribirse,
  clearErrorMessage,
  tryLocalSignin,
  startLoading,
  stopLoading,
},
  { token: null, errorMessage: "", loading: false }
);
