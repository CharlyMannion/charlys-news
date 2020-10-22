import React from 'react';
import VoteAdder from '../components/VoteAdder';

const CommentCard = (props) => {
    return (
         <section className="commentCard">
             <p>{props.author}:</p>
             <p>{props.body}</p>
             <p>
                <VoteAdder votes={props.votes} comment_id={props.comment_id} /> 
             </p>
             </section>
    )
}

export default CommentCard;