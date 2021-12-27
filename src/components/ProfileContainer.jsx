import ProfileCard from "./ProfileCard";
import "./ProfileContainer.css"

function ProfileContainer({users, handleRemoveUser}) {
    return (
        <div className="profile-container">
            {
                users.map(user => (
                    <ProfileCard user={user} handleRemoveUser={handleRemoveUser}/>
                ))
            }
        </div>
    )
}

export default ProfileContainer;