export default function ArticleItem({article}) {
  return (
    <section className="article-item">
      <p className='articleCard__info'>
          <strong>{article.topic}</strong> posted by{' '}
          <strong>{article.author}</strong> on{' '}
          <strong>{article.created_at.slice(0, 10)}</strong>
      </p>
          <h2 className='articleCard__title'>{article.title}</h2>
    </section>
  );
}