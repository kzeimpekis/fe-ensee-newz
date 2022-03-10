import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../api";

const CommentAdder = ({comments, setComments, commentCounter, setCommentCounter}) => {
    const [commentBody, setCommentBody] = useState([""])
    const {article_id} = useParams();

    useEffect(() => {
        setCommentBody(commentBody)
    }, [commentBody])

    const handleSubmit = (event) => {
        event.preventDefault();
        setCommentBody("");
        setCommentCounter(commentCounter += 1);
        postCommentByArticleId(article_id, {
            username: "jessjelly",
            body: commentBody})
        .then((comment) => {
            setComments([comment, ...comments])
            setCommentBody("")
            
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset className="comment-submit">
                <legend>Add a new comment</legend>
                <label htmlFor="commentBody"></label>
                <textarea 
                    type="text" 
                    id="commentBody" 
                    placeholder="Type your comment..." 
                    onChange={(event) => setCommentBody(event.target.value)}
                    value={commentBody}
                    required
                    />
                <button type="submit">Add</button>
                </fieldset>
            </form>
        </section>
    )

}

export default CommentAdder;