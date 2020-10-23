import React from 'react';
import VoteAdder from '../components/VoteAdder';
import StyledCommentInfo from '../styledComponents/StyledCommentInfo'
import StyledTextBox from '../styledComponents/StyledTextBox'
import StyledVoteBox from '../styledComponents/StyledVoteBox'

const CommentCard = (props) => {
    return (
         <section className="commentCard">
             <StyledCommentInfo>{props.author}</StyledCommentInfo>
             <StyledTextBox>{props.body}</StyledTextBox>
             <StyledVoteBox>
                <VoteAdder votes={props.votes} comment_id={props.comment_id} /> 
             </StyledVoteBox>
             </section>
    )
}

export default CommentCard;