import React from "react";

// Components
import ProfileCard from "./ProfileCard";

const ProfileContainer = ({users, handleRemoveUser}) => {
    return (
        <div className="profile-container">
            {
                users.map(user => (
                    <ProfileCard user={user} handleRemoveUser={handleRemoveUser} />
                ))
            }
        </div>
    )
}

export default ProfileContainer;