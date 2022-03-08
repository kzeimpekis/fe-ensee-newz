import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticleById } from "../api";

const IndividialArticle = () => {
    const {article_id} = useParams();
    const [individualArticle, setIndividualArticle] = useState([])

    useEffect(() => {
        getArticleById(article_id).then((result) => {
            console.log(result);
        })
    })

    return (
        <h2>Hello from Individual Article with article_id {article_id}</h2>
    )
}

export default IndividialArticle