import { useState } from 'react';
import axios from 'axios';
import './App.css';

// Components
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import ProfileContainer from './components/ProfileContainer';

function App() {
  const [users, setUsers] = useState([]);

  async function handleAddUsers(user) {
    const request = await axios.get(`https://api.github.com/users/${user}`)
    setUsers([...users, request.data])
  }

  function handleRemoveUser(username) {
    const updatedUsers = users.filter(user => user.login !== username);
    setUsers(updatedUsers)
  }

  return (
    <div className="App">
        <Header />
        <Searchbar handleAddUsers={handleAddUsers} />
        <ProfileContainer users={users} handleRemoveUser={handleRemoveUser} />
    </div>
  );
}

export default App;