const CommentCard = ({comment}) => {

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
        </section>
    )
}

export default CommentCard;