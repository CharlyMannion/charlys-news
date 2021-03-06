import React, { Component } from 'react';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import {getArticleByTopicSlug} from '../../src/utils/api';
import ArticleCard from '../components/ArticleCard';
import Sorter from '../components/Sorter';


class ArticleList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    fetchArticles = () => {
        const {sort_by} = this.state;
        const {slug} = this.props;
        getArticleByTopicSlug('articles', slug, sort_by)
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
        const {sort_by} = this.state;
        const {slug} = this.props;
        if(prevProps.slug !== slug || prevState.sort_by !== sort_by) {
            this.fetchArticles();
        }
    }

    addSort = (val) => {
        this.setState({sort_by: val});
    }

    render() {
        const {articles, isLoading, error} = this.state
        if (error) return (
            <ErrorDisplay {...error}/>
        )
        if (isLoading) return <Loader/>

        return (
            <main >
                <div className= "sorter">
                <Sorter addSort={this.addSort} />
                </div>
              <ul>
                  {articles.map(article => {
                      return (
                      <ArticleCard {...article} key={article.article_id}/>
                      )
                  })}
              </ul>
            </main>
      )
    }
}

export default ArticleList;