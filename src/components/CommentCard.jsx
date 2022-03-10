import { deleteCommentById } from "../api";

const CommentCard = ({comment, setComments, commentCounter, setCommentCounter}) => {

    const comment_id = comment.comment_id
    const author = comment.author;
    const date = comment.created_at.slice(0, 10)
    const body = comment.body
    const votes = comment.votes

    return (
        <section className="comment-card">
            <p className='commentCard__info'>
                <strong>{author}</strong> on{' '}
                <strong>{date}</strong>
            </p>
            <p className='commentCard__body'>{body}</p>
            <button className='commentCard__votesButton'>Votes: {votes}</button>
            <button className='commentCard__deleteButton' 
                    onClick={() => {
                        deleteCommentById(comment_id)
                        setComments((currentComments) => {
                            return currentComments.filter((comment) => comment.comment_id !== comment_id)
                        })
                        setCommentCounter(commentCounter -= 1);
                    }}>Delete</button>
        </section>
    )
}

export default CommentCard;