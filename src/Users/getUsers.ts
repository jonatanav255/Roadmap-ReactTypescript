// src/userService.ts

import axios from 'axios';

// Define the User interface here if it's not globally shared
export interface User {
  id: number;
  username: string;
  email: string;
}

const apiBaseUrl = 'http://localhost:8080'; // Replace with your actual API URL
const postUserUrl = `${apiBaseUrl}/users`;

// Function to fetch users with Basic Auth
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(postUserUrl, {
      auth: {
        username: 'user', // Replace with your username
        password: 'password', // Replace with your password
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};
