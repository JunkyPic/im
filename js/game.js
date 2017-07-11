//////////////////////
// MAIN GAME OBJECT //
//////////////////////
im = {};

///////////////
// BUILDINGS //
///////////////
im.buildings = {};
im.buildings.undergroundMine = {
  tooltip: {
      wood: 5000,
      stone: 5000,
      stonePickaxe: 20,
      stoneHammer: 5,
      stoneAxe: 20,
      tooltip_text: 'A mine that will generate coal, iron ore, copper ore, etc. The underground mine has 3 tiers.__info_data__'
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
        tooltip_text: 'Increases the speed at which tools are built.__info_data__'
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
        coalCoke: 500,
        tooltip_text: 'Unlocks building new tools and greatly increases the rate at which tools are built.__info_data__'
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
im.resources =  {};

im.resources.wood = {
    quantity: 10,
    canBuy: true,
    canSell: true,
    baseCost: 1,
    displayName: 'Wood',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.stone = {
    quantity: 10,
    baseCost: 1,
    canBuy: true,
    canSell: true,
    displayName: 'Stone',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.sand = {
    quantity: 0,
    displayName: 'Stone',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.gravel = {
    quantity: 0,
    displayName: 'Gravel',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.limestone = {
    quantity: 0,
    displayName: 'Limestone',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.clay = {
    quantity: 0,
    displayName: 'Clay',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.meat = {
    quantity: 0,
    displayName: 'Meat',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.wheat = {
    quantity: 0,
    displayName: 'Wheat',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.animalSkins = {
    quantity: 0,
    displayName: 'Animal skins',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.hide = {
    quantity: 0,
    displayName: 'Hide',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.coal = {
    quantity: 0,
    displayName: 'Coal',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.coalCoke = {
    quantity: 0,
    displayName: 'Coal Coke',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.copper = {
    quantity: 0,
    displayName: 'Copper',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.tin = {
    quantity: 0,
    displayName: 'Tin',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.bronze = {
    quantity: 0,
    displayName: 'Bronze',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.ironOre = {
    quantity: 0,
    displayName: 'Iron Ore',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.iron = {
    quantity: 0,
    displayName: 'Iron',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.steel = {
    quantity: 0,
    displayName: 'Steel',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.bauxite = {
    quantity: 0,
    displayName: 'Bauxite',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.aluminium = {
    quantity: 0,
    displayName: 'Aluminium',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.nickle = {
    quantity: 0,
    displayName: 'Nickle',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.magnesium = {
    quantity: 0,
    displayName: 'Magnesium',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.silica = {
    quantity: 0,
    displayName: 'Silica',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.silicone = {
    quantity: 0,
    displayName: 'Silicone',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.titaniumOre = {
    quantity: 0,
    displayName: 'Titanium ore',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.titanium = {
    quantity: 0,
    displayName: 'Titanium',
    tooltip: {
        tooltip_text: null,
    },
};

im.resources.silver = {
    quantity: 0,
    displayName: 'Silver',

    tooltip: {
        tooltip_text: 'Silver can be traded for various other materials. Careful tho, you may use it later on. Don\'t spend it all.',
    },
};

im.resources.gold = {
    quantity: 0,
    displayName: 'Gold',
    tooltip: {
        tooltip_text: 'Gold can be traded for various other materials. Careful tho, you may use it later on. Don\'t spend it all.',
    },
};