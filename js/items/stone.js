
im.items.stonePickaxe = {
    machineName: 'stonePickaxe',
    quantity: 0,
    displayName: 'Stone Pickaxe',
    durability: 100,
    harvestPercentage: 10,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'A basic Pickaxe. Allows you to mine stone faster. NOTE: Has to be in inventory for manual gathering to work. It will also lose durability when used and eventually break. Stacks with Stone Hammer',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 0,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: null,
        maxDamage: null,
        canBlock: false,
        canDamage: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 10,
        wood: 20,
    },
    preRequirements: false,
};

im.items.stoneAxe = {
    machineName: 'stoneAxe',
    quantity: 0,
    displayName: 'Stone Axe',
    harvestPercentage: 10,
    durability: 100,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'A basic Stone Axe. Allows you to chop trees faster. NOTE: Has to be in inventory for manual gathering to work faster. It will also lose durability when used and eventually break',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 1,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: null,
        maxDamage: null,
        canBlock: false,
        canDamage: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 10,
        wood: 20,
    },
    preRequirements: false,
};

im.items.stoneHammer = {
    machineName: 'stoneHammer',
    quantity: 0,
    harvestPercentage: 10,
    displayName: 'Stone Hammer',
    durability: 100,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'A basic Stone Hammer. Allows you to mine faster. NOTE: Has to be in inventory for manual gathering to work faster. It will also lose durability when used and eventually break. Stacks with hammer.',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 2,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: null,
        maxDamage: null,
        canBlock: false,
        canDamage: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 20,
        wood: 30,
    },
    preRequirements: false,
};

im.items.stoneHoe = {
    machineName: 'stoneHoe',
    quantity: 0,
    harvestPercentage: 10,
    displayName: 'Stone Hoe',
    durability: 100,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'Wheat will grow a little bit faster when this item is in the inventory. NOTE: It takes a small amount of damage over time and will eventually break.',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 3,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: null,
        maxDamage: null,
        canBlock: false,
        canDamage: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 5,
        wood: 10,
    },
    preRequirements: false,
};

im.items.stoneKnife = {
    machineName: 'stoneKnife',
    quantity: 0,
    harvestPercentage: null,
    displayName: 'Stone Knife',
    durability: 100,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'A basic Stone Knife. Allows you to stab nasty things, but not very effectively. Each stab will cause it to lose durability. It will eventually break.',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 4,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: 0.3,
        maxDamage: 0.5,
        canDamage: false,
        canBlock: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 5,
        wood: 10,
    },
    preRequirements: false,
};

im.items.stoneSpear = {
    machineName: 'stoneSpear',
    quantity: 0,
    harvestPercentage: null,
    displayName: 'Stone Spear',
    durability: 100,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'A basic Stone Spear. Allows you to stab nasty things. Each stab will cause it to lose durability. It will eventually break.',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 5,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: 2,
        maxDamage: 5,
        canDamage: true,
        canBlock: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 50,
        wood: 100,
    },
    preRequirements: false,
};

im.items.stoneSword = {
    machineName: 'stoneSword',
    quantity: 0,
    harvestPercentage: null,
    displayName: 'Stone Sword',
    durability: 100,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'A basic Stone Spear. Allows you to stab nasty things, but not very effectively. Each stab will cause it to lose durability. It will eventually break.',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 6,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: 3,
        maxDamage: 6,
        canDamage: true,
        canBlock: false,
        blockAmountMin: null,
        blockAmountMax: null,
    },
    cost: {
        stone: 100,
        wood: 150,
    },
    preRequirements: false,
};

im.items.stoneShield = {
    machineName: 'stoneShield',
    quantity: 0,
    displayName: 'Stone Shield',
    durability: 100,
    harvestPercentage: null,
    durabilityLossMin: 1,
    durabilityLossMax: 5,
    inInventory: false,
    tooltip: {
        tooltip_text: 'For some reason a Stone Shield is a practical way of blocking. Who knew...? It does work tho...kinda. It will block some damage.',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 7,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: null,
        maxDamage: null,
        canDamage: false,
        canBlock: true,
        blockAmountMin: 1,
        blockAmountMax: 3,
    },
    cost: {
        stone: 100,
        wood: 150,
    },
    preRequirements: false,
};

im.items.stoneArmor = {
    machineName: 'stoneArmor',
    quantity: 0,
    displayName: 'Stone Armor',
    durability: 100,
    harvestPercentage: null,
    durabilityLossMin: 5,
    durabilityLossMax: 10,
    inInventory: false,
    tooltip: {
        tooltip_text: 'I...what? How do you even wear that?',
    },
    trade: {
        canBeTraded: false,
        baseValue: null,
    },
    stash: {
        quantity: 0,
    },
    inventory: {
        slot: 8,
        stackable: false,
        maxStack: null,
    },
    combat: {
        minDamage: null,
        maxDamage: null,
        canDamage: false,
        canBlock: true,
        blockAmountMin: 3,
        blockAmountMax: 6,
    },
    cost: {
        stone: 400,
        wood: 250,
    },
    preRequirements: false,
};
