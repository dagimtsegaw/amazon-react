import axios from "axios";

const axiosInstance = axios.create({
  //local firebase function
  // baseURL: "http://127.0.0.1:5001/clone-68f3e/us-central1/api",

  //amazon on render.com
  baseURL: "https://amazon-api-deploy-ukse.onrender.com",
});

export { axiosInstance };
