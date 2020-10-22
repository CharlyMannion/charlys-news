import React from 'react';

const UserDisplayer = (props) => {
    return (
        <div className="user-displayer">
        <p>{props.user.name}</p>
        <p>{props.user.username}</p>
        <img src={props.user.avatar_url} alt="who's it gonna be..."></img>
        </div>
    )
}

export default UserDisplayer;