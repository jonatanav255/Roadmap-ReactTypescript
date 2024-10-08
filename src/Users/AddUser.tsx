import { useState } from 'react'
import { User } from './UserInterface'
import { createUser } from './UserService'

function AddUser () {
  const [newUser, setNewUser] = useState<User>({ username: '', email: '' })

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const createdUser = await createUser(newUser)
      alert("User Created")
      console.log(createdUser)
      setNewUser({ username: '', email: '' }) // Reset form
    } catch (error) {
      return error
    }
  }
  return (
    <div>
      <h1>Add Users</h1>
      <form style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
        <div>
          <label style={{ display: 'block' }} htmlFor='Username'>
            Username
          </label>
          <input
            type='text'
            value={newUser.username}
            onChange={e => setNewUser({ ...newUser, username: e.target.value })}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block' }} htmlFor='Email'>
            Email
          </label>
          <input
            type='text'
            value={newUser.email}
            onChange={e => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>
        <button
          type='submit'
          style={{ width: '100px' }}
          onClick={(e: React.FormEvent) => handleCreateUser(e)}
        >
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUser
