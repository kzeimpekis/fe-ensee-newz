import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../api';
import ArticlesList from './ArticlesList';
import Error404 from './Error404';
import Error500 from './Error500';
import Sorting from './Sorting';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic_slug} = useParams();
    const [sortingAttribute, setSortingAttribute] = useState('created_at');
    const [sortingOrder, setSortingOrder] = useState('desc');
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true)
        getArticles({
          topic: topic_slug,
          sortingAttribute: sortingAttribute,
          sortingOrder: sortingOrder
        }).then((articlesFromApi) => {
          setArticles(articlesFromApi);
          setIsLoading(false);
        }).catch(({ response }) => {
          setIsError(true)
          if (response.status === 404) {return <Error404 />} 
          else if (response.status === 404) {return <Error404 />}
          else {return <Error500 />}
        });
      }, [topic_slug, sortingAttribute, sortingOrder]);

      if (isError) {return <Error404 />}

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