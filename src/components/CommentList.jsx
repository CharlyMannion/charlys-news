import React, { Component } from 'react';
import Loader from '../components/Loader';
import {getArticleComments} from '../api';
import CommentCard from '../components/CommentCard'
import CommentPoster from '../components/CommentPoster';
// import ArticlePoster from '../pages/ArticlePoster';
import ErrorDisplay from '../components/ErrorDisplay';

class CommentList extends Component {
    state = {
        comments: [],
        isLoading: true,
    }

    componentDidMount() {
        getArticleComments(this.props.article_id)
        .then(({data: {comments}}) => {
            this.setState({comments, isLoading: false, error: null})
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

    addComment = (newComment) => {
        this.setState((currentState) => ({
            comments: [newComment, ...currentState.comments]
            })
        )
    }

    render () {
        const {comments, isLoading, error} =  this.state;
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            this.props.showComments &&
            <div className="commentList">
            <CommentPoster article_id={this.props.article_id} addComment={this.addComment}/>
                <h2>Comments:</h2>
                <ul>
                    {comments.map(comment => {
                      return (
                        <CommentCard {...comment} key={comment.comment_id}/>
                      )
                    })}
                </ul>
            </div>
        )
    };

}

export default CommentList;