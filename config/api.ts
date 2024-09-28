import axios from "axios";

const baseURL = "https://dummyjson.com";
const ApiClient = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export default ApiClient();
