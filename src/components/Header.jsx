import React from 'react';
import {Link} from '@reach/router';

const Header = (props) => {
    return (
    <header className="header">
        <Link to='/'><h1>Northcoders News</h1></Link>
        <h3>Welcome {props.loggedInUser}</h3>
    </header>
    )
}

export default Header;