import React from 'react';
import {Link} from '@reach/router';

const Header = (props) => {
    console.log(props.usersName);

    return (
    <header className="header">
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}><h1>Charly's News</h1></Link>
        <h3>Welcome {props.loggedInUser}</h3>
    </header>
    )
}

export default Header;