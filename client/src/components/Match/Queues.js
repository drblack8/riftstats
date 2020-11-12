
export const Queues = (id) => {
    const arr = {
        0: {
            "queueId": 0,
            "map": "Custom games",
            "description": '',
            "notes": 'Custom Game'
        },
        83: {
            "queueId": 83,
            "map": "Summoner's Rift",
            "description": "Co-op vs AI Ultra Rapid Fire games",
            "notes": 'URF VS AI'
        },
        100: {
            "queueId": 100,
            "map": "Butcher's Bridge",
            "description": "5v5 ARAM games",
            "notes": 'ARAM'
        },
        400: {
            "queueId": 400,
            "map": "Summoner's Rift",
            "description": "5v5 Draft Pick games",
            "notes": 'Normal Draft'
        },
        420: {
            "queueId": 420,
            "map": "Summoner's Rift",
            "description": "5v5 Ranked Solo games",
            "notes": 'SoloQ'
        },
        430: {
            "queueId": 430,
            "map": "Summoner's Rift",
            "description": "5v5 Blind Pick games",
            "notes": 'Normal Blind'
        },
        440: {
            "queueId": 440,
            "map": "Summoner's Rift",
            "description": "5v5 Ranked Flex games",
            "notes": 'FlexQ'
        },
        450: {
            "queueId": 450,
            "map": "Howling Abyss",
            "description": "5v5 ARAM games",
            "notes": 'ARAM'
        },
        700: {
            "queueId": 700,
            "map": "Summoner's Rift",
            "description": "Clash games",
            "notes": 'Clash'
        },
        830: {
            "queueId": 830,
            "map": "Summoner's Rift",
            "description": "Co-op vs. AI Intro Bot games",
            "notes": 'Intro Bot 5v5'
        },
        840: {
            "queueId": 840,
            "map": "Summoner's Rift",
            "description": "Co-op vs. AI Beginner Bot games",
            "notes": 'Intro Bot 5v5'
        },
        850: {
            "queueId": 850,
            "map": "Summoner's Rift",
            "description": "Co-op vs. AI Intermediate Bot games",
            "notes": 'Intro Bot 5v5'
        },
        900: {
            "queueId": 900,
            "map": "Summoner's Rift",
            "description": "URF games",
            "notes": 'URF'
        }
    }
    if (arr[id]) {
        return arr[id]['notes']
    }
    return 'Party Mode'
}
