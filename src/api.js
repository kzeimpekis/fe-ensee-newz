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