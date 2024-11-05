// src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};
