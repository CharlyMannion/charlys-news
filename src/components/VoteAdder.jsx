import React, { Component } from 'react';
import {increaseArticleVotesByValue, increaseCommentVotesByValue} from '../utils/api';

class VoteAdder extends Component {
    state = {
        userVoteCount: 0,
    };

    handleVote = (voteValue) => {
        this.setState((currentState) => {
            return { userVoteCount: currentState.userVoteCount + voteValue};
        });

        const {article_id, comment_id} = this.props;
        if(article_id) {
            increaseArticleVotesByValue(article_id, voteValue)
            .catch(() => {
                this.setState((currentState) => {
                    return { userVoteCount: currentState.userVoteCount - voteValue}
                })
            })
        }
        if(comment_id) {
            increaseCommentVotesByValue(comment_id, voteValue)
            .catch(() => {
                this.setState((currentState) => {
                    return { userVoteCount: currentState.userVoteCount - voteValue}
                })
            })
        }
    }

    render () {
        const {votes} = this.props;
        const {userVoteCount} = this.state;
        return (
            <div>
                <button onClick={() => this.handleVote(1)} value={1}>
                    Vote Up
                </button>
                <p>Votes: {votes + userVoteCount}</p>
                <button onClick={() => this.handleVote(-1)} value={-1}>
                    Vote Down 
                </button>
            </div>
        )
    }
}

export default VoteAdder;