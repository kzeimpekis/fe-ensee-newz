import { useContext } from "react";
import { deleteCommentById } from "../api";
import { UserContext } from "../contexts/UserContext";
import VotingButtons from "./VotingButtons";

const CommentCard = ({comment, setComments, commentCounter, setCommentCounter}) => {

    const comment_id = comment.comment_id
    const author = comment.author;
    const date = comment.created_at.slice(0, 10)
    const body = comment.body
    const votes = comment.votes
    const {username} = useContext(UserContext);

    return (
        <section className="comment-card">
            <p className='commentCard__info'>
                <strong>{author}</strong> on{' '}
                <strong>{date}</strong>
            </p>
            <p className='commentCard__body'>{body}</p>
            {/* <button className='commentCard__votesButton'>Votes: {votes}</button> */}
            <VotingButtons {...{ target: "comment", target_id: comment_id, votes }} />
            <button className='commentCard__deleteButton' 
                    onClick={() => {
                        if (author === username) {
                            deleteCommentById(comment_id)
                            setComments((currentComments) => {
                                return currentComments.filter((comment) => comment.comment_id !== comment_id)
                            })
                            setCommentCounter(commentCounter -= 1);
                        }
                        else {alert("No authorisation to delete this comment!")}
                    }}>Delete</button>
        </section>
    )
}

export default CommentCard;