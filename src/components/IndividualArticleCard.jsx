const IndividualArticleCard = ({individualArticle, commentCounter, setCommentCounter}) => {
    
    const topic = individualArticle.topic
    const author = individualArticle.author
    const date = individualArticle.created_at.slice(0, 10)
    const body = individualArticle.body
    const votes = individualArticle.votes
    const comments = commentCounter
    
    return (
        <section className="individualArticle-card">
          <p className='articleCard__info'>
              <strong>{topic}</strong> posted by{' '}
              <strong>{author}</strong> on{' '}
              <strong>{date}</strong>
          </p>
              <h2 className='articleCard__title'>{individualArticle.title}</h2>
              <h3 className='articleCard__title'>{body}</h3>
              <button className='articleCard__votesButton'>Votes: {votes}</button>
              <button className='articleCard__commentsButton'>Comments: {comments}</button>
        </section>
      );

}

export default IndividualArticleCard;