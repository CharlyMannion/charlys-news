import React, { Component } from 'react';
import ErrorDisplay from '../components/ErrorDisplay';
import Loader from '../components/Loader';
import {getArticleByID} from '../../src/utils/api';
import CommentList from '../components/CommentList';
import VoteAdder from '../components/VoteAdder';
const {trimDate} = require('../../src/utils/utils');

class SingleArticle extends Component {
    state = {
        article_info: {},
        isLoading: true,
        showComments: false,
        commentAdded: false,
    }

    toggleComments = () => {
        this.setState((previousState) => {
            return {
                showComments: !previousState.showComments
            }
        })
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
            <VoteAdder votes={article_info.votes} article_id={article_info.article_id} /> 
            <p>Comment Count: {article_info.comment_count}</p>
            <button onClick={this.toggleComments}>show/hide comments</button>
            <CommentList showComments={this.state.showComments} article_id={article_info.article_id} loggedInUser={this.props.loggedInUser} />
            </main>
        )
    }

}

export default SingleArticle;