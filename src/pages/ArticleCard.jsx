import React from 'react';
import { Link } from '@reach/router';


const ArticleCard = (props) => {
    return (
        <Link to={`/article/${props.article_id}`}>
         <section className="articleCard">
             <h3>{props.title}</h3>
             <p>Votes: {props.votes}</p>
             <p>Comments: {props.comment_count}</p>
         </section>
        </Link>
    )
}

export default ArticleCard;