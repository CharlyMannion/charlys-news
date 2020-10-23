import React from 'react';
import VoteAdder from '../components/VoteAdder';
import styled from 'styled-components';

const StyledPara = styled.p`
background: rgba(255, 55, 166, 1);
width: 15vh;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid rgba(99, 112, 129, 1);
border-radius: 3px;
text-align: center;
`

const TextBox = styled.p`
width: 90%;
`

const VoteBox = styled.p`
width: 50%;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
text-align: center;
color: rgba(253, 247, 250, 1);
border-color: rgba(241, 80, 37, 1);
background: rgba(99, 112, 129, 1);
`

const CommentCard = (props) => {
    return (
         <section className="commentCard">
             <StyledPara>{props.author}</StyledPara>
             <TextBox>{props.body}</TextBox>
             <VoteBox>
                <VoteAdder votes={props.votes} comment_id={props.comment_id} /> 
             </VoteBox>
             </section>
    )
}

export default CommentCard;