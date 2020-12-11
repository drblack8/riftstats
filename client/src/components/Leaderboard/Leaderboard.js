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
        <div>
            Hi
        </div>
    )
}

export default Leaderboard;
