// src/services/apiService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Update to match your backend URL

export async function register(username: string, email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user");
  }
}
