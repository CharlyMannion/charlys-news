import React from 'react';
// import { Link } from '@reach/router';


const CommentCard = (props) => {
    return (
         <section className="commentCard">{props.body}</section>
    )
}

export default CommentCard;