import React from 'react';

const UserDisplayer = (props) => {
    return (
        <div className="user-displayer">
            <img className="avatar" src={props.user.avatar_url} alt="who's it gonna be..."></img>
            <p>{props.user.name}</p>
            <p>{props.user.username}</p>
        </div>
    )
}

export default UserDisplayer;