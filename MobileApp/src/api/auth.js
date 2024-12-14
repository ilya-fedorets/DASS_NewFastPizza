import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000//api/v1/api';

export const loginDriver = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login/staff/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Ошибка сервера' };
  }
}; 