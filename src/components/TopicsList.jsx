import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from '../api';
import Error404 from "./Error404";
import Error500 from "./Error500";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        }).catch(({ response }) => {
            setIsError(true);
            if (response.status === 404) {return <Error404 />}
            else {return <Error500 />}
          });
    }, [])

    if (isError) {return <Error404/>}

    return (
        <nav>
            <ul className="topics-list" >
                <li className="topic" >
                    <Link className="topic__link" to={"/"}>
                        All 
                    </Link>
                    {topics.map((topic) => {
                    const topic_slug = topic.slug
                    return (
                        <Link className="topic__link" key={topic_slug} to={`/topics/${topic_slug}`}>
                            {topic_slug}
                        </Link>
                    )
                })}
                </li>
            </ul>
        </nav>
    )
}

export default TopicsList;