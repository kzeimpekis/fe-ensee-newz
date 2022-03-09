import axios from "axios";

const baseURL = "https://kostas-nc-news.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({data}) => {
    //   console.log(data.articles)
    return data.articles
  });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({data}) => {
    // console.log(data.topics)
    return data.topics
  });
}

export const getArticleById = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({data}) => {
    // console.log(data.article)
     return data.article
  });
}

export const getArticleCommentsById = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`).then(({data}) => {
    // console.log(data.comments)
     return data.comments
  });
};