import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../api';
import ArticlesList from './ArticlesList';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic_slug} = useParams();
    
    useEffect(() => {
        setIsLoading(true)
        getArticles(topic_slug).then((articlesFromApi) => {
          setArticles(articlesFromApi);
          setIsLoading(false);
        });
      }, [topic_slug]);

    return (
        <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ArticlesList articles={articles} topic_slug={topic_slug}/>
      )}
      </div>
    )
}

export default Articles;