import React, { Component } from 'react';
import Loader from '../components/Loader';
import {getArticleComments, deleteCommentById} from '../../src/utils/api';
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
        console.log(newComment, "NEW COMMENT")
        console.log(this.state.comments)
        this.setState((currentState) => ({
            comments: [newComment, ...currentState.comments]
            })
        )
    };

    deleteComment = (comment_id) => {
        deleteCommentById(comment_id)
        .then(() => {
            this.setState((prevState) => {
                console.log(prevState)
                return {comments: [...prevState.comments].filter(elem => elem.comment_id !== comment_id)}
            })
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

    render () {
        const {comments, isLoading, error} =  this.state;
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            this.props.showComments &&
            <div className="commentList">
            <CommentPoster article_id={this.props.article_id} addComment={this.addComment} author={this.props.loggedInUser}/>
                <h2>Comments:</h2>
                <ul>
                    {comments.map(comment => {
                      return (
                          <div>
                            <CommentCard {...comment} key={comment.comment_id} loggedInUser={this.props.loggedInUser}/>
                            <button
                            disabled={comment.author !== this.props.loggedInUser}
                            onClick={() => this.deleteComment(comment.comment_id)}
                            >
                                Delete Comment
                            </button>
                          </div>
                      )
                    })}
                </ul>
            </div>
        )
    };

}

export default CommentList;