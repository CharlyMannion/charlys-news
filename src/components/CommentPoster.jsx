import React, { Component } from 'react';
import {postComment} from '../utils/api';
import ErrorDisplay from '../components/ErrorDisplay';

class CommentPoster extends Component {
    state = {
        body: '',
        votes: 0,
    }

    handleChange = (ev) => {
        const {value} = ev.target;
        this.setState({body: value, error: null});
    }

    handleSubmit = (ev) => {
        const {article_id, addComment, author} = this.props;
        const {body, votes} = this.state;
        ev.preventDefault();
        postComment(article_id, body, author).then((res) => {
            const comment_id = res.data.comment.comment_id
            const newComment = {comment_id, body, author, votes}
            addComment(newComment);
            this.setState({body: ''});
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
        const {body, error} = this.state;
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>
                    <textarea onChange={this.handleChange} name="body" type="text" value={body} required />
                </label>
                <input type="submit" value="Add comment" />
            </form>
        )
    }
}

export default CommentPoster;