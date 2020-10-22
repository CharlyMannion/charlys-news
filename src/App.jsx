import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ArticleList from './pages/ArticleList';
import SingleArticle from './pages/SingleArticle'
import ErrorDisplay from './components/ErrorDisplay';
import ArticlePoster from './pages/ArticlePoster';
import LoginSetter from './components/LoginSetter';

class App extends Component {
    state = {
        loggedInUser: '',
    }

    loginUser = (author) => {
        this.setState({loggedInUser: author})
    }

    render() {
        return (
            <div className="App">
               <Header loggedInUser={this.state.loggedInUser}/>
               <NavBar />
               <LoginSetter loginUser={this.loginUser}/>
               <Router>
                   <ArticleList path="/" />
                   <ArticleList path="/topics/:slug" />
                   <SingleArticle path="/article/:article_id" loggedInUser={this.state.loggedInUser}/>
                   <ArticlePoster path="/add-article" />
                   <ErrorDisplay default status={404} message="This page does not exist"/>
               </Router>
               <Footer />
            </div>
        );
    }
};

export default App;