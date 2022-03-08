import { useEffect, useState } from 'react';
import { getArticles } from '../api';
import ArticlesList from './ArticlesList';

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
        <ArticlesList articles={articles}/>
      )}
      </div>
    )

}

export default Articles;