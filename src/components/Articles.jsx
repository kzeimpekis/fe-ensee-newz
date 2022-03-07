import { useEffect, useState } from 'react';
import { getArticles } from '../api';
import ArticleItem from './ArticleItem';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        getArticles().then((articlesFromApi) => {
          setArticles(articlesFromApi);
        });
      }, []);

    return (
        <section>
            {articles.map((article) => {
                console.log(article)
                return <ArticleItem key={article.article_id} article={article}/>
                }
            )}
        </section>
    )

}

export default Articles;