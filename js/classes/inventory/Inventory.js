class Inventory {
    constructor() {
        this.slot_0_html_id = '#0';
        this.slot_1_html_id = '#1';
        this.slot_2_html_id = '#2';
        this.slot_3_html_id = '#3';
        this.slot_4_html_id = '#4';
        this.slot_5_html_id = '#5';
        this.slot_6_html_id = '#6';
        this.slot_7_html_id = '#7';
        this.slot_8_html_id = '#8';

        // Items in slot use machine names
        this.slot_0 = null;
        this.slot_1 = null;
        this.slot_2 = null;
        this.slot_3 = null;
        this.slot_4 = null;
        this.slot_5 = null;
        this.slot_6 = null;
        this.slot_7 = null;
        this.slot_8 = null;
    }

    put(itemMachineName) {
        switch(itemMachineName) {
            case 'stonePickaxe':
            case 'bronzePickaxe':
            case 'copperPickaxe':
            case 'ironPickaxe':
            case 'steelPickaxe':
            case 'titaniumPickaxe':
                this.slot_0 = itemMachineName;
                break;
            case 'bronzeAxe':
            case 'titaniumAxe':
            case 'copperAxe':
            case 'ironAxe':
            case 'steelAxe':
            case 'stoneAxe':
                this.slot_1 = itemMachineName;
                break;
            case 'bronzeHammer':
            case 'titaniumHammer':
            case 'copperHammer':
            case 'ironHammer':
            case 'steelHammer':
            case 'stoneHammer':
                this.slot_2 = itemMachineName;
                break;
            case 'bronzeHoe':
            case 'titaniumHoe':
            case 'copperHoe':
            case 'ironHoe':
            case 'steelHoe':
            case 'stoneHoe':
                this.slot_3 = itemMachineName;
                break;
            case 'bronzeKnife':
            case 'titaniumKnife':
            case 'copperKnife':
            case 'ironKnife':
            case 'steelKnife':
            case 'stoneKnife':
                this.slot_4 = itemMachineName;
                break;
            case 'bronzeSpear':
            case 'titaniumSpear':
            case 'copperSpear':
            case 'ironSpear':
            case 'steelSpear':
            case 'stoneSpear':
                this.slot_5 = itemMachineName;
                break;
            case 'bronzeSword':
            case 'titaniumSword':
            case 'copperSword':
            case 'ironSword':
            case 'steelSword':
            case 'stoneSword':
                this.slot_6 = itemMachineName;
                break;
            case 'bronzeShield':
            case 'titaniumShield':
            case 'copperShield':
            case 'ironShield':
            case 'steelShield':
            case 'stoneShield':
                this.slot_7 = itemMachineName;
                break;

            case 'bronzeArmor':
            case 'titaniumArmor':
            case 'copperArmor':
            case 'ironArmor':
            case 'steelArmor':
            case 'stoneArmor':
                this.slot_8 = itemMachineName;
                break;

        }
    }
}
