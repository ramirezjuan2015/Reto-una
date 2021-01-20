import axios from "axios";
import { AsyncStorage } from "react-native";

let url;
if (__DEV__) {
  url = 'http://f3960424641b.ngrok.io';
} else {
  url = 'http://f3960424641b.ngrok.io';
}
const instance = axios.create({
  baseURL: url,
});
//instance.defaults.headers = {
//contentType: "application/json"
//}
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
