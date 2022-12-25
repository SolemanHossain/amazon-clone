import axios from "axios";

const instance = axios.create({
  baseUrl: "http://127.0.0.1:5003/challenge-41fbc/us-central1/api", // the api (cloud function) URL
});

export default instance;
