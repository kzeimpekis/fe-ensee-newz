import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticleById } from "../api";
import Comments from "./Comments";
import IndividualArticleCard from "./IndividualArticleCard";

const IndividualArticle = () => {
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [individualArticle, setIndividualArticle] = useState([])
    const [commentCounter, setCommentCounter] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((individualArticleFromApi) => {
            setIndividualArticle(individualArticleFromApi)
            setIsLoading(false);
            setCommentCounter(parseInt(individualArticleFromApi.comment_count))
        })
    }, [article_id])

    return (
        <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
        <IndividualArticleCard 
                    individualArticle={individualArticle} 
                    commentCounter={commentCounter}
                    setCommentCounter={setCommentCounter}/>
        <Comments comment_count={individualArticle.comment_count}
                  commentCounter={commentCounter}
                  setCommentCounter={setCommentCounter}/>
        </div>
      )}
      </div>
    )
}

export default IndividualArticle