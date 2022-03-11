import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleCommentsById } from "../api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";
import Error404 from "./Error404";
import Error500 from "./Error500";

const Comments = ({comment_count, commentCounter, setCommentCounter}) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getArticleCommentsById(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false);
        })
        .catch(({ response }) => {
          setIsError(true);
          if (response.status === 404) {return <Error404 />}
          else {return <Error500 />}
        });
    }, [article_id])

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