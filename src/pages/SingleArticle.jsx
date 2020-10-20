import React, { Component } from 'react';
import ErrorDisplay from '../components/ErrorDisplay';
import Loader from '../components/Loader';
import {getArticleByID} from '../api';
const {trimDate} = require('../utils');

class SingleArticle extends Component {
    state = {
        article_info: {},
        isLoading: true,
    }

    componentDidMount() {
        getArticleByID(this.props.article_id)
        .then(({data}) => {
            this.setState({article_info: data.article, isLoading: false, error: null});
        })
        .catch(({response}) => {
            this.setState({
                error: {
                    status: response.status,
                    message: response.data.msg,
                }
            })
        })
    }

    render() {
        const {article_info, isLoading, error} = this.state;
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            <main className="single-page-article">
            <h3>Topic: {article_info.topic}</h3>
            <h2>{article_info.title}</h2>
            <h3>Author: {article_info.author}</h3>
            <h3>Published: {trimDate(article_info.created_at)}</h3>
            <p>{article_info.body}</p>
            <p>Votes: {article_info.votes}</p>
            <p>Comment Count: {article_info.comment_count}</p>
            </main>
        )
    }

}

export default SingleArticle;