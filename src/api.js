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

export const postCommentByArticleId = (article_id, commentBody) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`, commentBody).then(({data}) => {
    // console.log(data.comment)
    return data.comment;
  })
}

export const deleteCommentById = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`).then(({data}) => {
    // console.log(data.comment)
    return data.comment;
  })
}

export const patchVotes = (target, target_id, increment) => {
  let patchObject = { inc_votes: increment };
  let targetPath = "";
  if (target === "comment") {
    targetPath = `${baseURL}/comments/${target_id}`;
  } else if (target === "article") {
    targetPath = `${baseURL}/articles/${target_id}`;
  }
  return axios.patch(targetPath, patchObject).then(({data}) => {
    // console.log(data[target].votes)
    return data[target].votes;
  })
}

export const getUsers = () => {
  return axios.get(`${baseURL}/users`).then(({data}) => {
    // console.log(data.users)
    return data.users
  })
}