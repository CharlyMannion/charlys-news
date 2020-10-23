import React, { Component } from 'react';
import Button from '../components/Button';
import {Link} from '@reach/router';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import {getRoute} from '../utils/api';
import styled from 'styled-components';

class NavBar extends Component {
    state = {
        topics: [],
        isLoading: true,
    }

    componentDidMount() {
        getRoute('topics')
        .then(({data: {topics}}) => {
            this.setState({topics, isLoading: false, error: null})
        })
        .catch(({response}) => {
            this.setState({
                error: {
                    status: response.status,
                    message: response.data.msg,
                }
            })
        })
    };

    render() {
        const {topics, isLoading, error} = this.state
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            <div className="nav">
            <nav>
                {topics.map(topic => {
                    return <Link to ={`/topics/${topic.slug}`} key={topic.slug}><Button>{topic.slug}</Button></Link>
                })}
            </nav>
            </div>
        );
    }
}

export default NavBar;