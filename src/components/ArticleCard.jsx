import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledParagraph = styled.p`
background: rgba(241, 80, 37, 1);
width: 7vh;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid rgba(99, 112, 129, 1);
border-radius: 3px;
text-align: center;
`

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