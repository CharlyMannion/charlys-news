import React, { Component } from 'react';
import Loader from '../components/Loader';
import axios from 'axios';
import ArticleCard from '../pages/ArticleCard';

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    fetchArticles = () => {
        axios.get('https://fe-nc-news-api.herokuapp.com/api/articles', {params: {topic: this.props.slug}})
        .then(({data: {articles}}) => {
            console.log(articles, "ARTICLES")
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
        const {articles, isLoading} = this.state
        if (isLoading) return <Loader/>
        return (
            <main className="main">
                {articles.map(article => {
                return <ArticleCard {...article} key={article.article_id}/>
                    // return <section key={article.article_id}>{article.title}</section>
                })}
            </main>
        )
    }
}

export default ArticleList;