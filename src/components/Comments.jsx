import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleCommentsById } from "../api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

const Comments = ({comment_count}) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const [commentCounter, setCommentCounter] = useState(parseInt(comment_count));

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
            <CommentAdder comments={comments} setComments={setComments} setCommentCounter={setCommentCounter}/>
            {comments.map((comment) => {
                return (<CommentCard comment={comment} key={comment.comment_id}/>)}
            )}
        </section>
      )}
        </div>
    )

}

export default Comments;