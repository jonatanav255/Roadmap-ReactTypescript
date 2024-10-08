// src/userService.ts

import axios from 'axios'
import { User } from './UserInterface'

const apiBaseUrl = 'http://localhost:8080' // Replace with your actual API URL
const UserUrl = `${apiBaseUrl}/users`

// Function to fetch users with Basic Auth
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(UserUrl, {
      auth: {
        username: 'user', // Replace with your username
        password: 'password' // Replace with your password
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error // Rethrow the error to handle it in the component
  }
}

export const createUser = async (newUser: User): Promise<User> => {
  try {
    const response = await axios.post(UserUrl, newUser, {
      auth: {
        username: 'user',
        password: 'password'
      }
    })
    return response.data
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}
