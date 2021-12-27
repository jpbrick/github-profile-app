import "./ProfileCard.css"

function ProfileCard({user, handleRemoveUser}) {
    return (
        <div className="profile-card">
        <div className="top-section">
            <h3 className="close-btn" onClick={() => handleRemoveUser(user.login)}>X</h3>
        </div>
            <h3>{user.login}</h3>
            <img alt="profile-pic" src={user.avatar_url} className="profile-pic" />
            <h5>Followers: {user.followers}</h5>
            <h5>Following: {user.following}</h5>
            <button className="profile-link"><a href={user.html_url} target="_blank">Visit Profile</a></button>
        </div>
    )
}

export default ProfileCard;