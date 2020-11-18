import { ChampData } from "../../Match/ChampData";


export const displayWinrates = (matches, summoner) => {
    let win_loss = [0,0]
    let champion_winrates = {}
    let champion;
    
    for (match in matches) {
       let participantId = 0
       for (player in match['particpantIdentities']) {
        if (player['player']['summonerName'].toLowercase() === summoner.toLowercase()) {
            participantId = player['participantId']
            champion = ChampData(match['participants'][participantId].championId)
        }  
       }
       if (participantId <= 5) {
            participantId = 0 
        } else {
            participantId = 1
        }
     if (match['teams'][participantId]['win'] == 'Win') {
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
    }

    championArr = Object.entries(champion_winrates).sort((a,b) => b[1][2]-a[1][2])

    return {
        'championArr': championArr,
        'winrateArr': win_loss
    }

} 

// const obj = { '0': [1,2,3], '16hh': [1,2,55], 'ad':[1,2,456], 'd':[1,2,3], 'a':[1,2,234523], 's':[1,2,2345], 'a44':[1,2,23452], 'a55':[1,2,23452], 'a544sd':[1,2,33] }

// const sorter = (obj) => {

//     return Object.entries(obj).sort((a,b) => b[1][2]-a[1][2])
// }

// console.log(sorter(obj))