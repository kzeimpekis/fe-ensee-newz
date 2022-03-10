import { useState } from "react"
import { patchVotes } from "../api"

const VotingButtons = ({target, target_id, votes}) => {
    const [currentVotes, setCurrentVotes] = useState(votes)
    
    const handleClick = (increment) => {
        setCurrentVotes(currentVotes + increment)
        patchVotes(target, target_id, increment)
    }
    return (
        <section>
          <button name="vote up" disabled={currentVotes-votes > 0} onClick={() => { handleClick(1); }}>👍</button>
          <span>
            <strong> Votes: {currentVotes}</strong>
          </span>
          <button name="vote down" disabled={currentVotes-votes < 0} onClick={() => { handleClick(-1); }}>👎</button>
        </section>
    )

}

export default VotingButtons