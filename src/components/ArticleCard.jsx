export default function ArticleCard({article}) {

  const topic = article.topic
  const author = article.author
  const date = article.created_at.slice(0, 10)
  const votes = article.votes
  const comments = article.comment_count

  return (
    <section className="article-card">
      <p className='articleCard__info'>
          <strong>{topic}</strong> posted by{' '}
          <strong>{author}</strong> on{' '}
          <strong>{date}</strong>
      </p>
          <h2 className='articleCard__title'>{article.title}</h2>
          <button className='articleCard__votesButton'>Votes: {votes}</button>
          <button className='articleCard__commentsButton'>Comments: {comments}</button>
    </section>
  );
}