import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // ton backend PHP Flight
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // ou true si tu utilises des cookies
});

export default api;
