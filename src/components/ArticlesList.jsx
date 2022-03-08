import ArticleCard from "./ArticleCard"

const ArticlesList = ({articles}) => {
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