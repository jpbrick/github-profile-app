import React from "react";
import "./style.css";


const ProfileCard = ({user, handleRemoveUser}) => {
    return (
        <div className="profile-card">
            <div className="top-section">
                <p className="delete-btn" onClick={() => handleRemoveUser(user.data.login)} >X</p>
            </div>
            <img src={user.data.avatar_url} className="profile-pic" alt="profile picture"/>
            <p>{user.data.login}</p>
            <div>
                <p>Followers: {user.data.followers}</p>
                <p>Following: {user.data.following}</p>
                <div className="profile-link"><a href={user.data.html_url} target="_blank">Visit Profile</a></div>
            </div>
        </div>
    )
}

export default ProfileCard;