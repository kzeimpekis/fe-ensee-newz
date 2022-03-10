import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleCommentsById } from "../api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

const Comments = ({comment_count, commentCounter, setCommentCounter}) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        getArticleCommentsById(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false);
        })
        .catch(({ response }) => {
          if (response.status === 404) {
            navigate("/Error404");
          } else {
            navigate("/Error500");
          }
        });
    }, [article_id, navigate])

    return (
        <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="comments-list">
            <CommentAdder comments={comments} 
                          setComments={setComments} 
                          commentCounter={commentCounter}
                          setCommentCounter={setCommentCounter}/>
            {comments.map((comment) => {
                return (<CommentCard comment={comment} 
                                     setComments={setComments}
                                     commentCounter={commentCounter}
                                     setCommentCounter={setCommentCounter} 
                                     key={comment.comment_id} />)}
            )}
        </section>
      )}
        </div>
    )

}

export default Comments;