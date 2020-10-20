import React, { Component } from 'react';
import Loader from '../components/Loader';
import {getRoute} from '../api';
import ArticleCard from '../pages/ArticleCard';

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    fetchArticles = () => {
        getRoute('articles')        
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
        const {slug} = this.props;
        const listTitle = slug || "All";

        const {articles, isLoading} = this.state
        if (isLoading) return <Loader/>

        return (
            <main className="main">
              <h3>{listTitle}</h3>
              <ul>
                  {articles.map(article => {
                      return <ArticleCard {...article} key={article.article_id}/>
                  })}
              </ul>
            </main>
      )
    }
}

export default ArticleList;