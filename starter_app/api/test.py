import json
thg = json.dumps([
        {
            "teamId": 100,
            "win": "Win",
            "firstBlood": False,
            "firstTower": True,
            "firstInhibitor": True,
            "firstBaron": True,
            "firstDragon": False,
            "firstRiftHerald": True,
            "towerKills": 9,
            "inhibitorKills": 2,
            "baronKills": 2,
            "dragonKills": 2,
            "vilemawKills": 0,
            "riftHeraldKills": 1,
            "dominionVictoryScore": 0,
            "bans": [
                {
                    "championId": 51,
                    "pickTurn": 1
                },
                {
                    "championId": 69,
                    "pickTurn": 2
                },
                {
                    "championId": 53,
                    "pickTurn": 3
                },
                {
                    "championId": 9,
                    "pickTurn": 4
                },
                {
                    "championId": 350,
                    "pickTurn": 5
                }
            ]
        },
        {
            "teamId": 200,
            "win": "Fail",
            "firstBlood": True,
            "firstTower": False,
            "firstInhibitor": False,
            "firstBaron": False,
            "firstDragon": True,
            "firstRiftHerald": False,
            "towerKills": 6,
            "inhibitorKills": 0,
            "baronKills": 0,
            "dragonKills": 4,
            "vilemawKills": 0,
            "riftHeraldKills": 0,
            "dominionVictoryScore": 0,
            "bans": [
                {
                    "championId": 55,
                    "pickTurn": 6
                },
                {
                    "championId": 114,
                    "pickTurn": 7
                },
                {
                    "championId": 517,
                    "pickTurn": 8
                },
                {
                    "championId": 147,
                    "pickTurn": 9
                },
                {
                    "championId": 360,
                    "pickTurn": 10
                }
            ]
        }
    ])

print(thg)
