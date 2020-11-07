
export const Queues = (id) => {
    const arr = [
        {
            "queueId": 0,
            "map": "Custom games",
            "description": '',
            "notes": 'Custom Game'
        },
        {
            "queueId": 83,
            "map": "Summoner's Rift",
            "description": "Co-op vs AI Ultra Rapid Fire games",
            "notes": 'URF VS AI'
        },
        {
            "queueId": 100,
            "map": "Butcher's Bridge",
            "description": "5v5 ARAM games",
            "notes": 'ARAM'
        },
        {
            "queueId": 400,
            "map": "Summoner's Rift",
            "description": "5v5 Draft Pick games",
            "notes": 'Normal Draft'
        },
        {
            "queueId": 420,
            "map": "Summoner's Rift",
            "description": "5v5 Ranked Solo games",
            "notes": 'SoloQ'
        },
        {
            "queueId": 430,
            "map": "Summoner's Rift",
            "description": "5v5 Blind Pick games",
            "notes": 'Normal Blind'
        },
        {
            "queueId": 440,
            "map": "Summoner's Rift",
            "description": "5v5 Ranked Flex games",
            "notes": 'FlexQ'
        },
        {
            "queueId": 450,
            "map": "Howling Abyss",
            "description": "5v5 ARAM games",
            "notes": 'ARAM'
        },
        {
            "queueId": 700,
            "map": "Summoner's Rift",
            "description": "Clash games",
            "notes": 'Clash'
        },
        {
            "queueId": 830,
            "map": "Summoner's Rift",
            "description": "Co-op vs. AI Intro Bot games",
            "notes": 'Intro Bot 5v5'
        },
        {
            "queueId": 840,
            "map": "Summoner's Rift",
            "description": "Co-op vs. AI Beginner Bot games",
            "notes": 'Intro Bot 5v5'
        },
        {
            "queueId": 850,
            "map": "Summoner's Rift",
            "description": "Co-op vs. AI Intermediate Bot games",
            "notes": 'Intro Bot 5v5'
        },
        {
            "queueId": 900,
            "map": "Summoner's Rift",
            "description": "URF games",
            "notes": 'URF'
        },
    ]
    for (let i = 0; i < arr.length; i++) {
        if (id === arr[i]['queueId']) {
            return arr[i]['notes']
        }
    }
    return 'Party Mode'
}
