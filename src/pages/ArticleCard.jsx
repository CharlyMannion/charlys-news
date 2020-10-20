import React from 'react';

const ArticleCard = (props) => {
    return (
        <div className="articleCard">
         <section>{props.title}</section>
        </div>
    )
}

export default ArticleCard;