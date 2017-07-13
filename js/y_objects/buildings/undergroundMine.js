
im.buildings.undergroundMine = {
    machineName: 'undergroundMine',
    displayName: 'Underground Mine',
    quantity: 0,
    delay: 5000,
    tier: {
        tierOne: {
            machineName: 'tierOne',
            exists: true,
            produceChanceMultiplier: 1,
            produce: ['stone', 'coal', 'gold', 'silver', 'copper', 'tin'],
        },
        tierTwo: {
            machineName: 'tierTwo',
            exists: false,
            produceChanceMultiplier: 2.5,
            produce: ['stone', 'coal', 'gold', 'silver', 'copper', 'tin', 'ironOre', 'bauxite'],
        },
        tierThree: {
            machineName: 'tierThree',
            exists: false,
            produceChanceMultiplier: 5,
            produce: ['stone', 'coal', 'gold', 'silver', 'copper', 'tin', 'ironOre', 'bauxite', 'nickle', 'magnesium', 'titaniumOre'],
        },
    },
    produce: {
        stone: {
            chance: 5,
            minAmount: 5,
            maxAmount: 10,
        },
        coal: {
            chance: 2,
            minAmount: 1,
            maxAmount: 2,
        },
        gold: {
            chance: 0.3,
            minAmount: 1,
            maxAmount: 1,
        },
        silver: {
            chance: 0.6,
            minAmount: 1,
            maxAmount: 1,
        },
        copper: {
            chance: 1,
            minAmount: 2,
            maxAmount: 3,
        },
        tin: {
            chance: 1,
            minAmount: 2,
            maxAmount: 3,
        },
        ironOre: {
            chance: 0.5,
            minAmount: 2,
            maxAmount: 3,
        },
        bauxite: {
            chance: 0.5,
            minAmount: 1,
            maxAmount: 2,
        },
        nickle: {
            chance: 0.2,
            minAmount: 1,
            maxAmount: 2,
        },
        magnesium: {
            chance: 0.2,
            minAmount: 1,
            maxAmount: 2,
        },
        titaniumOre: {
            chance: 0.1,
            minAmount: 1,
            maxAmount: 1,
        }
    },
    cost: {
        wood: 2000,
        stone: 2000,
        // stonePickaxe: 20,
        // stoneHammer: 20,
        // stoneAxe: 20,
    },
    tooltip: {
        wood: 5000,
        stone: 5000,
        stonePickaxe: 20,
        stoneHammer: 5,
        stoneAxe: 20,
        tooltip_text: 'A mine that will generate coal, stone, iron ore, copper ore, etc. The underground mine has 3 tiers.__info_data__'
    },
};
