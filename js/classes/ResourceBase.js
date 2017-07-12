class ResourceBase {
    /**
     * @param item
     * @param displayQuantitySpanId
     */
    constructor(item, displayQuantitySpanId) {
        this.item = item;
        this.displayQuantitySpanId = displayQuantitySpanId;
    }

    getQuantity () {
        return im.resources[this.item].quantity;
    }

    has() {
        return im.resources[this.item].quantity > 0;
    }

    setQuantity(quantity) {
        im.resources[this.item].quantity = quantity;
        return this;
    }

    getDisplayName() {
        return im.resources[this.item].displayName;
    }

    getMachineName() {
        return im.resources[this.item].machineName;
    }

    isTradeable() {
        return im.resources[this.item].trade.canBeTraded;
    }

    getTradeBaseValue() {
        return im.resources[this.item].trade.baseValue;
    }

    getStorageBaseAmount() {
        return im.resources[this.item].warehouse.baseAmount;
    }

    setDisplayAmount(quantity) {
        $('#' + this.displayQuantitySpanId).html(quantity);
        return this;
    }

    getGatherMinAmount() {
        return im.resources[this.item].harvest.minAmount;
    }

    getGatherMaxAmount() {
        return im.resources[this.item].harvest.maxAmount;
    }
}