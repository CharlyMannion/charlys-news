import React from 'react';
import { Link } from '@reach/router';
import StyledParagraph from '../styledComponents/StyledParagraph'

const ArticleCard = (props) => {
    return (
        <section className="articleCard">
            <StyledParagraph>{props.topic}</StyledParagraph>
            <Link to={`/article/${props.article_id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <h3>{props.title}</h3>
            </Link>
            <p>{props.votes} votes</p>
            <p>{props.comment_count} comments</p>
        </section>
    )
}

export default ArticleCard;