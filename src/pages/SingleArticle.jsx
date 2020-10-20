import React, { Component } from 'react';
import Loader from '../components/Loader';
import axios from 'axios';

class SingleArticle extends Component {
    state = {
        article_info: {},
        isLoading: true,
    }

    render() {
        return (
            <p>Single Article!</p>
        )
    }

}

export default SingleArticle;