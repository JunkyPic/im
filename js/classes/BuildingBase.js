class BuildingBase {
    constructor(item, displayQuantitySpanId) {
        this.item = item;
        this.displayQuantitySpanId = displayQuantitySpanId;
    }

    getMachineName() {
        return im.buildings[this.item].machineName;
    }

    getQuantity () {
        return im.buildings[this.item].quantity;
    }

    has() {
        return im.buildings[this.item].quantity > 0;
    }

    setQuantity(quantity) {
        im.buildings[this.item].quantity = quantity;
        return this;
    }

    getDelay() {
        return im.buildings[this.item].delay;
    }
    
    getDisplayName() {
        return im.buildings[this.item].displayName;
    }

    getCostObject() {
        return im.buildings[this.item].cost;
    }

    getCostOf(buildingMaterial) {
        let currentBuildingMaterials = this.getCostObject();

        if(buildingMaterial in currentBuildingMaterials) {
            return im.buildings[this.item].cost[buildingMaterial];
        }

        return null;
    }

    setDisplayAmount(quantity) {
        $(this.displayQuantitySpanId).html(quantity);
        return this;
    }
}
