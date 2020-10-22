import React, { Component } from 'react';
import {postComment} from '../api';

class CommentPoster extends Component {
    state = {
        body: '',
        responsible: 'cooljmessy',
    }

    handleChange = (ev) => {
        const {value} = ev.target;
        this.setState({body: value});
    }

    handleSubmit = (ev) => {
        const {article_id} = this.props;
        const {body, responsible} = this.state;
        ev.preventDefault();
        postComment(article_id, body, responsible).then(() => {
            // addComment();
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
        const {body} = this.state;
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