import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
}

const apiBaseUrl = 'http://localhost:8080'; // Replace with your actual API URL
const postUserUrl = `${apiBaseUrl}/users`;

export default function Users() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace 'user' and 'password' with your actual username and password
        const response = await axios.get(postUserUrl, {
          auth: {
            username: 'user',      // Replace with your username
            password: 'password',  // Replace with your password
          },
        });

        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
