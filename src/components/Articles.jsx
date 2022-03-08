import { useEffect, useState } from 'react';
import { getArticles } from '../api';
import ArticleItem from './ArticleItem';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getArticles().then((articlesFromApi) => {
          setArticles(articlesFromApi);
          setIsLoading(false);
        });
      }, []);

    return (
        <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="articles">
            {articles.map((article) => {
                console.log(article)
                return <ArticleItem key={article.article_id} article={article}/>
                }
            )}
        </section>
      )}
      </div>
    )

}

export default Articles;