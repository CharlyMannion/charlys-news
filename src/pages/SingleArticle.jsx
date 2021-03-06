import React, { Component } from 'react';
import Button from '../styledComponents/Button';
import ErrorDisplay from '../components/ErrorDisplay';
import Loader from '../components/Loader';
import {getArticleByID} from '../../src/utils/api';
import CommentList from '../components/CommentList';
import VoteAdder from '../components/VoteAdder';
import StyledArticlePara from '../styledComponents/StyledArticlePara'
import StyledTag from '../styledComponents/StyledTag';
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
            <StyledTag>{article_info.topic}</StyledTag>
            <h2>{article_info.title}</h2>
            <h3>Author: {article_info.author}</h3>
            <h3>Published: {trimDate(article_info.created_at)}</h3>
            <StyledArticlePara>{article_info.body}</StyledArticlePara>
            <div className="commentVoteHolder">
            <VoteAdder votes={article_info.votes} article_id={article_info.article_id} /> 
            <p>Comment Count: {article_info.comment_count}</p>
            <Button onClick={this.toggleComments}>show/hide comments</Button>
            <br></br>
            <CommentList showComments={this.state.showComments} article_id={article_info.article_id} loggedInUser={this.props.loggedInUser} />
            </div>
            </main>
        )
    }

}

export default SingleArticle;