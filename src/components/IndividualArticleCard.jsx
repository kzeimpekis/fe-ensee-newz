const IndividualArticleCard = ({individualArticle}) => {

    const topic = individualArticle.topic
    const author = individualArticle.author
    const date = individualArticle.created_at.slice(0, 10)
    const body = individualArticle.body
    const votes = individualArticle.votes
    const comments = individualArticle.comment_count

    return (
        <section className="article-card">
          <p className='articleCard__info'>
              <strong>{topic}</strong> posted by{' '}
              <strong>{author}</strong> on{' '}
              <strong>{date}</strong>
          </p>
              {/* <h2 className='articleCard__title'>{individualArticle.title}</h2> */}
              <h2 className='articleCard__title'>{body}</h2>
              <button className='articleCard__votesButton'>Votes: {votes}</button>
              <button className='articleCard__commentsButton'>Comments: {comments}</button>
        </section>
      );

}

export default IndividualArticleCard;