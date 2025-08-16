import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Fixed typo in URL

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return []; // Return empty array if API fails
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, userData);
    return response.data; // Returns the updated user object
  } catch (error) {
    console.error("Update Error:", error);
    throw error; // Re-throw for error handling in components
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_URL}/${userId}`);
    return userId; // Return deleted user's ID
  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};

/* We'll add these later:
- addUser()
- updateUser()
- deleteUser() 
*/