import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../api';
import ArticlesList from './ArticlesList';
import Sorting from './Sorting';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic_slug} = useParams();
    const [sortingAttribute, setSortingAttribute] = useState('created_at');
    const [sortingOrder, setSortingOrder] = useState('desc');
    
    useEffect(() => {
        setIsLoading(true)
        getArticles({
          topic: topic_slug,
          sortingAttribute: sortingAttribute,
          sortingOrder: sortingOrder
        }).then((articlesFromApi) => {
          setArticles(articlesFromApi);
          setIsLoading(false);
        });
      }, [topic_slug, sortingAttribute, sortingOrder]);

    return (
        <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <div className="articles__header">
        <Sorting
            sortingAttribute={sortingAttribute}
            setSortingAttribute={setSortingAttribute}
            sortingOrder={sortingOrder}
            setSortingOrder={setSortingOrder}
        />
        </div>
        <ArticlesList articles={articles} topic_slug={topic_slug}/>
        
        </>
      )}
      </div>
    )
}

export default Articles;