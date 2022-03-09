import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleCommentsById } from "../api";
import CommentCard from "./CommentCard";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        setIsLoading(true)
        getArticleCommentsById(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false);
        })
    }, [article_id])

    return (
        <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="comments-list">
            {comments.map((comment) => {
                return (<CommentCard comment={comment}/>)}
            )}
        </section>
      )}
        </div>
    )

}

export default Comments;