import './style.css';



export default function UserCard({
    avatar,
    name,
    userNAme,
    followers,
    following
}) {
    return (
        <div className="user-card">
            <div
                className="avatar"
                style={{ backgroundImage: `url(${avatar})` }} />
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <span className="username">{userNAme}</span>
            <div className="container-follow">
                <span>{followers}</span>
                <span>seguidores</span>
            </div>
            <div className="container-follow">
                <span>{following}</span>
                <span>seguindo</span>
            </div>
        </div>
    )
}