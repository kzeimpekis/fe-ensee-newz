import ArticleCard from "./ArticleCard"

const ArticlesList = ({articles, topic_slug}) => {
    if (articles.length !== 0 && topic_slug !== undefined) {
        articles = articles.filter((article) => {
            return article.topic === topic_slug
        })
    }
    return (
        <section className="articles-list">
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article}/>
                }
            )}
        </section>
    )
}

export default ArticlesList;