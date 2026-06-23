import axios from "axios";

const API = axios.create({
  baseURL: "https://talentiq-ai-career-platform-2.onrender.com",
});

export default API;