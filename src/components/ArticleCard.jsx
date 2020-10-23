import React from 'react';
import { Link } from '@reach/router';


const ArticleCard = (props) => {
    return (
        <section className="articleCard">
            <Link to={`/article/${props.article_id}`}>
                <h3>{props.title}</h3>
            </Link>
            <p>Topic: {props.topic}</p>
            <p>Votes: {props.votes}</p>
            <p>Comments: {props.comment_count}</p>
        </section>
    )
}

export default ArticleCard;