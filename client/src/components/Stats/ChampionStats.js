import React, { useEffect, useState } from 'react'
import { displayWinrates } from './Helpers/displayWinrates'

const ChampionStats = (props) => {

    const [champArr, setChampArr] = useState([])
    useEffect(() => {
        const stats = displayWinrates(props.matches, props.summonerName)
        setChampArr(stats.championArr)
    }, [props])
    
    return (
        <div>
            {champArr.slice(0,5).map((champ) => {
                return (
                <div>{champ[0]}</div>
                )
            })}
            
        </div>
    )
}

export default ChampionStats;