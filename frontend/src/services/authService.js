import axios from "axios";

const API_URL = "http://localhost:8080"; 
// Ganti jika backend Anda memakai port lain

export const register = (data) => {
  return axios.post(`${API_URL}/register`, data);
};

export const login = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const getProfile = () => {
  const token = localStorage.getItem("token");
  
  return axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
