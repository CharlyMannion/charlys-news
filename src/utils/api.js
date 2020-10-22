import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fe-nc-news-api.herokuapp.com/api'
})

export const getArticleComments = (article_id) => {
    return instance
        .get(`/articles/${article_id}/comments`)
}

export const getArticleByID = (article_id) => {
    return instance
        .get(`/articles/${article_id}`)
}

export const getRoute = (inp) => {
    return instance
        .get(`/${inp}`)
}

export const getArticleByTopicSlug = (inp, slug, sort_by) => {
    return instance
        .get(`${inp}`, { params: { topic: slug, sort_by } })
}

export const increaseArticleVotesByValue = (article_id, val) => {
    return instance
        .patch(`/articles/${article_id}`, { inc_votes: val })
}

export const increaseCommentVotesByValue = (comment_id, val) => {
    return instance
        .patch(`/comments/${comment_id}`, { inc_votes: val })
}

export const postComment = (article_id, body, username) => {
    return instance
        .post(`articles/${article_id}/comments`, {
            body,
            username,
        })
}

export const deleteCommentById = (comment_id) => {
    return instance
        .delete(`/comments/${comment_id}`)
}

export const getUserByUsername = (username) => {
    return instance
        .get(`/users/${username}`)
}