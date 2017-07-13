class Inventory {
    constructor() {
        this.imObject = im.inventory;
        this.slot_0 = 'slot_0';
        this.slot_1 = 'slot_1';
        this.slot_2 = 'slot_2';
        this.slot_3 = 'slot_3';
        this.slot_4 = 'slot_4';
        this.slot_5 = 'slot_5';
        this.slot_6 = 'slot_6';
        this.slot_7 = 'slot_7';
        this.slot_8 = 'slot_8';

        this.slot_0_html_id = im.inventory.slot_0.htmlId;
        this.slot_1_html_id = im.inventory.slot_1.htmlId;
        this.slot_2_html_id = im.inventory.slot_2.htmlId;
        this.slot_3_html_id = im.inventory.slot_3.htmlId;
        this.slot_4_html_id = im.inventory.slot_4.htmlId;
        this.slot_5_html_id = im.inventory.slot_5.htmlId;
        this.slot_6_html_id = im.inventory.slot_6.htmlId;
        this.slot_7_html_id = im.inventory.slot_7.htmlId;
        this.slot_8_html_id = im.inventory.slot_8.htmlId;
    }

    _setItemInSlot(slotId, itemMachineName) {
        if (this.imObject.hasOwnProperty(slotId)) {
            this.imObject[slotId].itemMachineName = itemMachineName;
            return true;
        }

        throw new Error('Invalid slot id');
    }

    _setHasItem(slotId) {
        if (this.imObject.hasOwnProperty(slotId)) {
            this.imObject[slotId].hasItem = true;
            return true;
        }
        throw new Error('Invalid slot id');
    }

    _setRemoveItem(slotId,) {
        if (this.imObject.hasOwnProperty(slotId)) {
            this.imObject[slotId].hasItem = false;
            this.imObject[slotId].itemMachineName = null;
            return true;
        }
        throw new Error('Invalid slot id');
    }

    _hasItem(slotId) {
        return this.imObject[slotId].hasItem;
    }

    put(itemMachineName) {
        switch (true) {
            case itemMachineName.indexOf('Pickaxe') !== -1:
                    this._setRemoveItem(this.slot_0);
                    this._setHasItem(this.slot_0);
                    this._setItemInSlot(this.slot_0, itemMachineName);
                    this._setDisplay(this.slot_0_html_id, itemMachineName);
                return this.slot_0_html_id;
            case itemMachineName.indexOf('Axe') !== -1:
                    this._setRemoveItem(this.slot_1);
                    this._setHasItem(this.slot_1);
                    this._setItemInSlot(this.slot_1, itemMachineName);
                    this._setDisplay(this.slot_1_html_id, itemMachineName);
                break;
            case itemMachineName.indexOf('Hammer') !== -1:
                    this._setRemoveItem(this.slot_2);
                    this._setHasItem(this.slot_2);
                    this._setItemInSlot(this.slot_2, itemMachineName);
                    this._setDisplay(this.slot_2_html_id, itemMachineName);
                return this.slot_2_html_id;

            case itemMachineName.indexOf('Hoe') !== -1:
                    this._setRemoveItem(this.slot_3);
                    this._setHasItem(this.slot_3);
                    this._setItemInSlot(this.slot_3, itemMachineName);
                    this._setDisplay(this.slot_3_html_id, itemMachineName);
                return this.slot_3_html_id;
            case itemMachineName.indexOf('Knife') !== -1:
                    this._setRemoveItem(this.slot_4);
                    this._setHasItem(this.slot_4);
                    this._setItemInSlot(this.slot_4, itemMachineName);
                    this._setDisplay(this.slot_4_html_id, itemMachineName);
                return this.slot_4_html_id;
            case itemMachineName.indexOf('Spear') !== -1:
                    this._setRemoveItem(this.slot_5);
                    this._setHasItem(this.slot_5);
                    this._setItemInSlot(this.slot_5, itemMachineName);
                    this._setDisplay(this.slot_5_html_id, itemMachineName);
                return this.slot_5_html_id;
            case itemMachineName.indexOf('Sword') !== -1:
                    this._setRemoveItem(this.slot_6);
                    this._setHasItem(this.slot_6);
                    this._setItemInSlot(this.slot_6, itemMachineName);
                    this._setDisplay(this.slot_6_html_id, itemMachineName);
                return this.slot_6_html_id;
            case itemMachineName.indexOf('Shield') !== -1:
                    this._setRemoveItem(this.slot_7);
                    this._setHasItem(this.slot_7);
                    this._setItemInSlot(this.slot_7, itemMachineName);
                    this._setDisplay(this.slot_7_html_id, itemMachineName);
                return this.slot_7_html_id;
            case itemMachineName.indexOf('Armor') !== -1:
                    this._setRemoveItem(this.slot_8);
                    this._setHasItem(this.slot_8);
                    this._setDisplay(this.slot_8_html_id, itemMachineName);
                    this._setItemInSlot(this.slot_8, itemMachineName);
                return this.slot_8_html_id;
        }
    }

    _setDisplay(slotHtmlId, itemMachineName) {
        $(slotHtmlId).html(im.items[itemMachineName].displayName);
    }
}
