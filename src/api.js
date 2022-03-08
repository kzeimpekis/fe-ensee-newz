import axios from "axios";

const baseURL = "https://kostas-nc-news.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({data}) => {
    //   console.log(data.articles)
    return data.articles
  });
};