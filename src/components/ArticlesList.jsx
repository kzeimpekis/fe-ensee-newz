import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom";

const ArticlesList = ({articles, topic_slug}) => {
    if (articles.length !== 0 && topic_slug !== undefined) {
        articles = articles.filter((article) => {
            return article.topic === topic_slug
        })
    }
    return (
        <section className="articles-list">
            {articles.map((article) => {
                return (
                <Link to={`/articles/${article.article_id}`} className='link articleCard__link' key={article.article_id} >
                <ArticleCard article={article}/>
                </Link>
                )}
            )}
        </section>
    )
}

export default ArticlesList;