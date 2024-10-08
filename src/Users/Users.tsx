// src/Users.tsx

import { useEffect, useState } from 'react'
import { getUsers, User } from './getUsers' // Import the getUsers function and User interface

export default function Users () {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers() // Use the getUsers function from userService
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
