import { useState } from 'react'
import './App.css'
import AddUser from './Users/AddUser'
import Users from './Users/Users'

function App () {
  const [view, setView] = useState<'users' | 'addUser'>('users')

  return (
    <>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('users')}>Users</button>
        <button onClick={() => setView('addUser')}>Add User</button>
      </nav>
      {view === 'users' && <Users />}
      {view === 'addUser' && <AddUser />}
    </>
  )
}

export default App
