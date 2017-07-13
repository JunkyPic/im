//////////////////////
// MAIN GAME OBJECT //
//////////////////////
im = {};

//////////
// MISC //
//////////
im.misc = {};

im.misc.gather = {
    wood: {
        delay: 5000, // milliseconds
    },
    stone: {
        delay: 5000,
    }
};

///////////////
// BUILDINGS //
///////////////
im.buildings = {};

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

im.buildings.surfacedMine = {
    tooltip: {
        wood: 1000,
        stone: 1000,
        stonePickaxe: 20,
        stoneHammer: 5,
        stoneAxe: 10,
        tooltip_text: 'A mine that will generate limestone, clay, sand, stone and gravel.__info_data__'
    },
};

im.buildings.lumberMill = {
    tooltip: {
        wood: 1000,
        stone: 500,
        stoneHammer: 5,
        stoneAxe: 30,
        tooltip_text: 'The lumber mill will generate wood.__info_data__'
    },
};

im.buildings.hunterShack = {
    tooltip: {
        wood: 1000,
        stone: 500,
        stoneHammer: 5,
        stoneKnife: 5,
        tooltip_text: 'The hunter shack will generate meat and animal skins. NOTE: Meat is consumed by your character passively at a slow-ish rate.__info_data__'
    },
};

im.buildings.tannery = {
    tooltip: {
        wood: 1000,
        stone: 500,
        stonePickaxe: 5,
        stoneHammer: 5,
        stoneAxe: 30,
        stoneKnife: 5,
        tooltip_text: 'The tannery will produce hide from animal skins.__info_data__'
    },
};

im.buildings.workshop = {
    tooltip: {
        wood: 5000,
        stone: 5000,
        gravel: 100,
        clay: 100,
        hide: 100,
        stonePickaxe: 50,
        stoneHammer: 50,
        stoneAxe: 50,
        stoneKnife: 50,
        tooltip_text: 'Allows you to build better tools.__info_data__'
    },
};

im.buildings.warehouse = {
    tooltip: {
        wood: 100,
        stone: 100,
        stonePickaxe: 5,
        stoneHammer: 5,
        stoneAxe: 5,
        tooltip_text: 'Increases the amount of materials you can store. Each warehouse increases the amount by 100%. It stacks. Ex. If you can now store 100 of a material type, with 1 warehouse you will store 200, with 2 you will store 400, with 3 you will store 800 and so on.__info_data__'
    },
    storageMultiplier: 100,
};

im.buildings.wheatFarm = {
    tooltip: {
        wood: 2000,
        stone: 2000,
        stonePickaxe: 30,
        stoneAxe: 30,
        stoneHoe: 30,
        tooltip_text: 'The wheat farm will generate wheat. If you have both meat and wheat you will lose hunger much slower.__info_data__'
    },
};

im.buildings.blastFurnace = {
    tooltip: {
        wood: 10000,
        stone: 10000,
        copperPickaxe: 50,
        copperHammer: 50,
        clay: 200,
        limestone: 200,
        coal: 200,
        sand: 200,
        gravel: 200,
        tooltip_text: 'The blast furnace allows you to purify various metals.__info_data__'
    },
};

im.buildings.forge = {
    tooltip: {
        iron: 100,
        stone: 10000,
        wood: 10000,
        ironPickaxe: 50,
        ironHammer: 50,
        copperPickaxe: 50,
        copperHammer: 50,
        hide: 300,
        coalCoke: 100,
        tooltip_text: 'Unlocks building new tools.__info_data__'
    },
};

im.buildings.cokeOven = {
    tooltip: {
        stone: 500,
        wood: 500,
        stonePickaxe: 5,
        stoneHammer: 5,
        tooltip_text: 'Transforms coal into coal coke.__info_data__'
    },
};

///////////////
// RESOURCES //
///////////////
im.resources = {};

im.resources.wood = {
    machineName: 'wood',
    quantity: 1000000,
    displayName: 'Wood',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 10,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 20000,
    },
    harvest: {
        minAmount: 3,
        maxAmount: 6,
    }
};

im.resources.stone = {
    machineName: 'stone',
    quantity: 10000000,

    displayName: 'Stone',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 10,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 20000,
    },
    harvest: {
        minAmount: 3,
        maxAmount: 6,
    }
};

im.resources.sand = {
    machineName: 'sand',
    quantity: 0,
    displayName: 'Sand',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 10,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 10000,
    },
};

im.resources.gravel = {
    machineName: 'gravel',
    quantity: 0,
    displayName: 'Gravel',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 10,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 10000,
    },
};

im.resources.limestone = {
    machineName: 'limestone',
    canBeTraded: false,
    quantity: 0,
    displayName: 'Limestone',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 50,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 5000,
    },
};

im.resources.clay = {
    machineName: 'clay',
    quantity: 0,
    displayName: 'Clay',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 50,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 5000,
    },
};

im.resources.meat = {
    machineName: 'meat',
    quantity: 20,
    displayName: 'Meat',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 50,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 10000,
    },
};

im.resources.wheat = {
    machineName: 'wheat',
    quantity: 5,
    displayName: 'Wheat',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 100,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 10000,
    },
};

im.resources.animalSkins = {
    machineName: 'animalSkins',
    quantity: 0,
    displayName: 'Animal skins',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 200,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 10000,
    },
};

im.resources.hide = {
    machineName: 'hide',
    quantity: 0,
    displayName: 'Hide',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 500,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 2000,
    },
};

im.resources.coal = {
    machineName: 'coal',
    quantity: 0,
    displayName: 'Coal',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 200,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 2000,
    },
};

im.resources.coalCoke = {
    machineName: 'coalCoke',
    quantity: 0,
    displayName: 'Coal Coke',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 2000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 2000,
    },
};

im.resources.copper = {
    machineName: 'copper',
    quantity: 0,
    displayName: 'Copper',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 2000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};

im.resources.tin = {
    machineName: 'tin',
    quantity: 0,
    displayName: 'Tin',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 2000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};

im.resources.bronze = {
    machineName: 'bronze',
    quantity: 0,
    displayName: 'Bronze',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 4000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};

im.resources.ironOre = {
    machineName: 'ironOre',
    quantity: 0,
    displayName: 'Iron Ore',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 2000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};

im.resources.iron = {
    machineName: 'iron',
    quantity: 0,
    displayName: 'Iron',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 4000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};

im.resources.steel = {
    machineName: 'steel',
    quantity: 0,
    displayName: 'Steel',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 10000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 400,
    },
};

im.resources.bauxite = {
    machineName: 'bauxite',
    quantity: 0,
    displayName: 'Bauxite',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 20000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 400,
    },
};

im.resources.aluminium = {
    machineName: 'aluminium',
    quantity: 0,
    displayName: 'Aluminium',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 40000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 300,
    },
};

im.resources.nickle = {
    machineName: 'nickle',
    quantity: 0,
    displayName: 'Nickle',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 60000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 300,
    },
};

im.resources.magnesium = {
    machineName: 'magnesium',
    quantity: 0,
    displayName: 'Magnesium',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 100000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 300,
    },
};

im.resources.silica = {
    machineName: 'silica',
    quantity: 0,
    displayName: 'Silica',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 50000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 300,
    },
};

im.resources.silicone = {
    machineName: 'silicone',
    quantity: 0,
    displayName: 'Silicone',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 150000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 300,
    },
};

im.resources.titaniumOre = {
    machineName: 'titaniumOre',
    quantity: 0,
    displayName: 'Titanium ore',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 200000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 100,
    },
};

im.resources.titanium = {
    machineName: 'titanium',
    quantity: 0,
    displayName: 'Titanium',
    tooltip: {
        tooltip_text: null,
    },
    trade: {
        canBeTraded: true,
        baseValue: 500000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 100,
    },
};

im.resources.silver = {
    machineName: 'silver',
    quantity: 1000,
    displayName: 'Silver',
    tooltip: {
        tooltip_text: 'Silver can be traded for various other materials. Careful tho, you may use it later on. Don\'t spend it all.',
    },
    trade: {
        canBeTraded: true,
        baseValue: 1000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};

im.resources.gold = {
    machineName: 'gold',
    quantity: 1000,
    displayName: 'Gold',
    tooltip: {
        tooltip_text: 'Gold can be traded for various other materials. Careful tho, you may use it later on. Don\'t spend it all.',
    },
    trade: {
        canBeTraded: true,
        baseValue: 2000,
    },
    warehouse: {
        quantity: 0,
        maxAmount: null,
        baseAmount: 500,
    },
};
///////////
// ITEMS //
///////////
im.items = {};
