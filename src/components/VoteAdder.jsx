import React, { Component } from 'react';
import Button from '../components/Button';
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
            <div className="voter">
                <Button 
                disabled={userVoteCount === 1}
                onClick={() => this.handleVote(1)} value={1}>
                    Vote Up
                </Button>
                <p>{votes + userVoteCount} votes</p>
                <Button 
                disabled={userVoteCount === -1}
                onClick={() => this.handleVote(-1)} value={-1}>
                    Vote Down 
                </Button>
            </div>
        )
    }
}

export default VoteAdder;