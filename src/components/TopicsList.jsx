import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from '../api';

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
 
    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

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