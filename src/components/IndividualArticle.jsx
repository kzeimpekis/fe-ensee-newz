import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticleById } from "../api";
import IndividualArticleCard from "./IndividualArticleCard";

const IndividialArticle = () => {
    const {article_id} = useParams();
    const [individualArticle, setIndividualArticle] = useState([])

    useEffect(() => {
        getArticleById(article_id).then((result) => {
            // console.log(result)
            setIndividualArticle(result)
        })
    })

    return (
        <IndividualArticleCard individualArticle={individualArticle}/>
    )
}

export default IndividialArticle