import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ArticleList from './pages/ArticleList';
import SingleArticle from './pages/SingleArticle'
import ErrorDisplay from './components/ErrorDisplay';
import LoginSetter from './components/LoginSetter';
import UserDisplayer from './components/UserDisplayer';

class App extends Component {
    state = {
        user: {},
    }

    setFullUser = (inpUser) => {
        this.setState({user: inpUser})
    }

    render() {
        return (
            <div className="App">
               <Header loggedInUser={this.state.user.username} usersName={this.state.user.name} />
               <NavBar />
               <LoginSetter setFullUser={this.setFullUser}/>
               <UserDisplayer user={this.state.user}/>
               <Router>
                   <ArticleList path="/" />
                   <ArticleList path="/topics/:slug" />
                   <SingleArticle path="/article/:article_id" loggedInUser={this.state.user.username}/>
                   <ErrorDisplay default status={404} message="This page does not exist"/>
               </Router>
               <Footer />
            </div>
        );
    }
};

export default App;