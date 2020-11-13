const data = {
        1: {
          name: 'Cleanse',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerBoost.png'
        },
        3: {
          name: 'Exhaust',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerExhaust.png'
        },
        4: {
          name: 'Flash',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerFlash.png'
        },
        6: {
          name: 'Ghost',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerHaste.png'
        },
        7: {
          name: 'Heal',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerHeal.png'
        },
        11: {
          name: 'Smite',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerSmite.png'
        },
        12: {
          name: 'Teleport',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerTeleport.png'
        },
        13: {
          name: 'Clarity',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerMana.png'
        },
        14: {
          name: 'Ignite',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerDot.png'
        },
        21: {
          name: 'Barrier',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerBarrier.png'
        },
        30: {
          name: 'To the King!',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerPoroRecall.png'
        },
        31: {
          name: 'Poro Toss',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerPoroThrow.png'
        },
        32: {
          name: 'Mark',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerSnowball.png'
        },
        39: {
          name: 'Mark',
          imageUrl: 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/SummonerSnowURFSnowball_Mark.png'
        }
}

export const Spells = (key) => {
    return data[key].imageUrl
}
