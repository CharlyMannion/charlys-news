import React from 'react';
import { Link } from '@reach/router';


const ArticleCard = (props) => {
    return (
        <Link to={`/article/${props.article_id}`}>
         <section className="articleCard">{props.title}</section>
        </Link>
    )
}

export default ArticleCard;