import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fe-nc-news-api.herokuapp.com/api'
})

export const getArticleByID = (article_id) => {
    return instance
        .get(`/articles/${article_id}`)
}