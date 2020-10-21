import React, { Component } from 'react';
import Loader from '../components/Loader';
// import ArticlePoster from '../pages/ArticlePoster';
import {Link} from '@reach/router';
import ErrorDisplay from '../components/ErrorDisplay';
import {getArticleByTopicSlug} from '../api';
import ArticleCard from '../pages/ArticleCard';

class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    fetchArticles = () => {
        getArticleByTopicSlug('articles', this.props.slug)
        .then(({data: {articles}}) => {
            this.setState({articles, isLoading: false, error: null})
        })
        .catch(({response}) => {
            this.setState({
                error: {
                    status: response.status,
                    message: response.data.msg,
                }
            })
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
        const {articles, isLoading, error} = this.state
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            <main className="main">
            {/* <ArticlePoster /> */}
            <Link to="/add-article" key={'add-article'}><button>Add an Article</button></Link>
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