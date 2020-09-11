import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ade69.cloudfunctions.net/api", //The API (cloud function) URL
});

export default instance;
//http://localhost:5001/clone-ade69/us-central1/api
