import axios from "axios";

const API_BASE = "https://api.escuelajs.co/api/v1";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE}/categories`);
  return response.data;
};