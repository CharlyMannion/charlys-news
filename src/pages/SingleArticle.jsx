import React, { Component } from 'react';
import Loader from '../components/Loader';
import axios from 'axios';

const trimDate = (dateStr) => {
    const trimmedDate = dateStr.substring(0, 10);
    return trimmedDate;
}

class SingleArticle extends Component {
    state = {
        article_info: {},
        isLoading: true,
    }

    componentDidMount() {
        axios.get(`https://fe-nc-news-api.herokuapp.com/api/articles/${this.props.article_id}`)
        .then(({data}) => {
            this.setState({article_info: data.article, isLoading: false});
        })
    }

    render() {
        const {article_info, isLoading} = this.state
        console.log(article_info, "ARTICLE INFO")
        if (isLoading) return <Loader/>
        return (
            <main className="single-page-article">
            <h3>{article_info.topic}</h3>
            <h2>{article_info.title}</h2>
            <h3>Author: {article_info.author}</h3>
            <h3>Published: {trimDate(article_info.created_at)}</h3>
            <p>{article_info.body}</p>
            <p>Votes: {article_info.votes}</p>
            <p>Comment Count: {article_info.comment_count}</p>
            </main>
        )
    }

}

export default SingleArticle;