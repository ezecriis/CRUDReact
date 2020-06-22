import React, { useState } from 'react';
import UserTable from '../src/components/UserTable';
import AddUserForm from '../src/components/AddUserForm';
import EditUserForm from '../src/components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ];

  // State
  const [users, setUsers] = useState(usersData);

  // Users add
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // Users Delete
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);
  }

  // User edit
  const [editing, setEditing] = useState(false);

  const [currenUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm currenUser={currenUser} updateUser={updateUser} />
              </div>
            ) : (
              <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
              </div>
            )
          }
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
          users={users}
          deleteUser={deleteUser}
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
