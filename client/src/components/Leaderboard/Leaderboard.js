import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

const Leaderboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [ranks, setRanks] = useState([])
    const history = useHistory()

	useEffect(() => {
		setIsLoaded(false);
		fetch(`/api/leaderboard/current`)
			.then((res) => res.json())
			.then(
				(result) => {
                    console.log(result);
					setRanks(result)
				},
				(error) => {
					setError({ first: error });
					setIsLoaded(true);
				}
			);
	}, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/summoner/${e.target.id}`)
    }

    return (
        <div className="leaderboard">
            <div className="rank-list">
                {ranks.map((el, idx) => (
                    <div className="single-rank" key={idx}>
                        <div className="chal-rank">
                            {idx + 1}
                        </div>
                        <div className="chal-icon">
                            {el['losses']}
                        </div>
                        <div className="challenger">
                            {el['name']}
                        </div>
                        <div className="chal-lp">
                            {el['leaguePoints']}
                        </div>
                        <div className="chal-wins">
                            {el['wins']}
                        </div>
                        <div className="chal-losses">
                            {el['losses']}
                        </div>
                        <div className="chal-losses">
                            {el['losses']}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard;
