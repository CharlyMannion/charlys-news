import React, { Component } from 'react';
import Loader from '../components/Loader';
import axios from 'axios';

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    fetchArticles = () => {
        axios.get(`https://fe-nc-news-api.herokuapp.com/api/articles?topic=${this.props.slug}`)
        .then(({data: {articles}}) => {
            this.setState({articles, isLoading: false})
        })
    }

    componentDidMount() {
        this.fetchArticles();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.slug !== this.props.slug) {
            this.fetchArticles();
        }
    }

    render() {
        console.log(this.props, "article props")
        const {articles, isLoading} = this.state
        if (isLoading) return <Loader/>
        return (
            <main>
                {articles.map(article => {
                    return <section key={article.article_id}>{article.title}</section>
                })}
            </main>
        )
    }
}

export default ArticleList;