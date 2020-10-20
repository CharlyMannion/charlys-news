import React, { Component } from 'react';
import {Link} from '@reach/router';
import {getRoute} from '../api';

class NavBar extends Component {
    state = {
        topics: []
    }

    componentDidMount() {
        getRoute('topics')
        .then(({data: {topics}}) => {
            this.setState({topics})
        })
    };

    render() {
        const {topics} = this.state
        return (
            <div className="nav">
            <nav>
                {topics.map(topic => {
                    return <Link to ={`/topics/${topic.slug}`} key={topic.slug}><button>{topic.slug}</button></Link>
                })}
            </nav>
            </div>
        );
    }
}

export default NavBar;