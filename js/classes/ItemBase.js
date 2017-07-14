class ItemBase {
    /**
     *
     * @param item
     * @param itemType
     */
    constructor(item, itemType) {
        this.item = item + '' + itemType;
    }

    getMachineName() {
        return im.items[this.item].machineName;
    }

    getQuantity () {
        return im.items[this.item].quantity;
    }

    has() {
        return im.items[this.item].quantity > 0;
    }

    setQuantity(quantity) {
        im.items[this.item].quantity = quantity;
        return this;
    }

    getDisplayName() {
        return im.items[this.item].displayName;
    }

    getDurability() {
        return im.items[this.item].durability;
    }

    setDurability(durability) {
        im.items[this.item].durability = durability;
        return this;
    }

    getHarvestPercentIncrease() {
        return im.items[this.item].harvestPercentage;
    }

    getDurabilityLossMin() {
        return im.items[this.item].durabilityLossMin;
    }

    getDurabilityLossMax() {
        return im.items[this.item].durabilityLossMax;
    }

    inInventory() {
        return im.items[this.item].inInventory;
    }

    getTooltipText() {
        return im.items[this.item].tooltip.tooltip_text;
    }

    isTradeable() {
        return im.items[this.item].trade.canBeTraded;
    }

    getTradeBaseValue() {
        return im.items[this.item].trade.baseValue;
    }

    getInventorySlot() {
        return im.items[this.item].inventory.slot;
    }

    isStackable() {
        return im.items[this.item].inventory.stackable;
    }

    getMaxStack() {
        return im.items[this.item].inventory.maxStack;
    }

    getMinDamage() {
        return im.items[this.item].combat.minDamage;
    }

    getMaxDamage() {
        return im.items[this.item].combat.maxDamage;
    }

    canBlock() {
        return im.items[this.item].combat.canBlock;
    }

    canDamage() {
        return im.items[this.item].combat.canDamage;
    }

    getBlockAmountMin() {
        return im.items[this.item].combat.blockAmountMin;
    }

    getBlockAmountMax() {
        return im.items[this.item].combat.blockAmountMax;
    }

    getCost() {
        return im.items[this.item].cost;
    }

    hasPreRequirements() {
        // No it really can't be simplified since it can return
        // Either a boolean or an object
        // Lets not type juggle(too much) now shall we
        if(im.items[this.item].preRequirements === false) {
            return true;
        }

        return false;
    }

    getPreRequirements() {
        return im.items[this.item].preRequirements;
    }

    hasResources() {
        let materials = this.getCost();
        let hasResources = true;

        $.each(materials, function (key, value) {
           if(im.resources[key].quantity < value) {
               hasResources = false;
               return false;
           }
        });

        return hasResources;
    }

    canBuild() {
        return this.hasResources() && this.hasPreRequirements;
    }


    errorMessages() {
        return {
            notEnoughMaterials: 'You don\'t have the necessary materials to build that.',
            preRequirementsNotMet: 'Pre-requirements for this have not yet been met.',
        };
    }

    build() {
        if(!this.hasResources()) {
            Page.paragraphWrite(this.errorMessages().notEnoughMaterials);
        }
        if(!this.hasPreRequirements()) {
            Page.paragraphWrite(this.errorMessages().preRequirementsNotMet);
        }

        let materials = this.getCost();

        $.each(materials, function (key, value) {
            let currentMaterialClass = ResourceFactory.asNew(key.strToUpperFirst());
            // Deduct materials
            // And set the correct amount to the object and to frontend
            currentMaterialClass.setQuantity(currentMaterialClass.getQuantity() - value).setDisplayAmount(currentMaterialClass.getQuantity());
        });

        this.setQuantity(this.getQuantity() + 1);
    }
}

