import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticleById } from "../api";
import Comments from "./Comments";
import Error404 from "./Error404";
import Error500 from "./Error500";
import IndividualArticleCard from "./IndividualArticleCard";

const IndividualArticle = () => {
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [individualArticle, setIndividualArticle] = useState([])
    const [commentCounter, setCommentCounter] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((individualArticleFromApi) => {
            setIndividualArticle(individualArticleFromApi)
            setIsLoading(false);
            setCommentCounter(parseInt(individualArticleFromApi.comment_count))
        }).catch(({ response }) => {
          setIsError(true);
          if (response.status === 404) {return <Error404 />}
          else {return <Error500 />}
        });
    }, [article_id])

    if (isError) {return <Error404/>}

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