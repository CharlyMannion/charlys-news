import React, { Component } from 'react';

class ArticlePoster extends Component {
    state = {
        title: "",
        topic: "",
        body: "",
        articlePosted: false,
    }

    render () {
        return (
            <main className="article-poster">
                <p>form to add an article will go here</p>
            </main>
        )
    }
}

export default ArticlePoster;