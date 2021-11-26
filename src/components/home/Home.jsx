import { useState, useEffect } from "react";
import axios from "axios";

import logo from '../../logo.svg';
import '../../App.css';

// Components
import Searchbar from './Searchbar';
import ProfileContainer from "./ProfileContainer";

const Home = () => {
    const [starterData, setStarterData] = useState('jpbrick');
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(false)

    const handleAddUser = async (username) => {
        try {
            const request = await axios.get(`https://api.github.com/users/${username}`)
            setUserData([...userData, request])
            setError(false)
        } catch(error) {
            setError(true)
        }
    }

    const handleRemoveUser = (username) => {
        const newUserData = userData.filter(item => item.data.login !== username)
        setUserData(newUserData);
    }

    useEffect(() => {
        axios.get(`https://api.github.com/users/${starterData}`).then(res => setUserData([...userData, res]))
    }, [])

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <p>Github Profile App</p>

            <Searchbar handleAddUser={handleAddUser} errorStatus={error} errorHandling={setError} />
            <ProfileContainer users={userData} handleRemoveUser={handleRemoveUser} />
        </>
    )
}

export default Home;