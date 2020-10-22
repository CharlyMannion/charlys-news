import React from 'react';
import {Link} from '@reach/router';
import {loggedInUserName} from '../utils/constants'

const Header = () => {
    return (
    <header className="header">
        <Link to='/'><h1>Northcoders News</h1></Link>
        <h3>Welcome {loggedInUserName}</h3>
    </header>
    )
}

export default Header;