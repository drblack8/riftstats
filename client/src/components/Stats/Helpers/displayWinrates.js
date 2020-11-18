import { ChampData } from "../../Match/ChampData";


export const displayWinrates = (matches, summoner) => {
    let win_loss = [0,0]
    let champion_winrates = {}
    
   matches.forEach((match) => {
        let champion = ''
       let participantId = 0
       match.participantIdentities.forEach((player) => {
        if (player['player']['summonerName'].toLowerCase() === summoner.toLowerCase()) {
            participantId = player.participantId
            champion += ChampData(match['participants'][participantId -1]['championId']).name
        }  
       })
       let team = null
       if (participantId <= 5) {
            team = 0 
        } else {
            team = 1
        }
     if (match['teams'][team]['win'] === 'Win') {
        win_loss[0] += 1
        if (champion in champion_winrates) {
         champion_winrates[champion][0] += 1
        }else {
            champion_winrates[champion] = [1,0,0]
        }
     } else {
        win_loss[1] += 1
        if (champion in champion_winrates) {
            champion_winrates[champion][1] += 1
        } else {
         champion_winrates[champion] = [0,1,0]
        }
    }
    champion_winrates[champion][2] += 1
    })

    const championArr = Object.entries(champion_winrates).sort((a,b) => b[1][2]-a[1][2])

    return {
        'championArr': championArr,
        'winrateArr': win_loss
    }

} 
