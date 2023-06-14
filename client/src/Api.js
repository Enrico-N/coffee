import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const renderInstance = axios.create({
  baseURL: "https://coffeeapp.onrender.com",
});
