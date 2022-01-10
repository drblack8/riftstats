const data = {
    8100: {
        img: 'https://raw.communitydragon.org/10.23/game/assets/perks/styles/7200_domination.png'
    },
    8000: {
        img: 'https://raw.communitydragon.org/10.23/game/assets/perks/styles/7201_precision.png'
    },
    8200: {
        img: 'https://raw.communitydragon.org/10.23/game/assets/perks/styles/7202_sorcery.png'
    },
    8300: {
        img: 'https://raw.communitydragon.org/10.23/game/assets/perks/styles/7203_whimsy.png'
    },
    8400: {
        img: 'https://raw.communitydragon.org/10.23/game/assets/perks/styles/7204_resolve.png'
    },
    8005: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/presstheattack/presstheattack.png'
    },
    8008: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/lethaltempo/lethaltempotemp.png'
    },
    8021: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/fleetfootwork/fleetfootwork.png'
    },
    8010: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/conqueror/conqueror.png'
    },
    8112: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/electrocute/electrocute.png'
    },
    8124: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/predator/predator.png'
    },
    8128: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/darkharvest/darkharvest.png'
    },
    9923: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/domination/hailofblades/hailofblades.png'
    },
    8214: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/summonaery/summonaery.png'
    },
    8229: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/arcanecomet/arcanecomet.png'
    },
    8230: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/sorcery/phaserush/phaserush.png'
    },
    8437: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/graspoftheundying/graspoftheundying.png'
    },
    8439: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/veteranaftershock/veteranaftershock.png'
    },
    8465: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/resolve/guardian/guardian.png'
    },
    8360: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/unsealedspellbook/unsealedspellbook.png'
    },
    8351: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/glacialaugment/glacialaugment.png'
    },
    8358: {
        img: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/masterkey/masterkey.png'
    }
}

export const Keystones = (key) => {
    if (data[key] === undefined) {
        return 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/inspiration/masterkey/masterkey.png'
      }
    return data[key].img
}
