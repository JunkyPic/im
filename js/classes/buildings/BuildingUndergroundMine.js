class BuildingUndergroundMine extends BuildingBase {
    constructor() {
        super(im.buildings.undergroundMine.machineName, '#im_buildings_underground_mines_quantity_display');
    }

    getTier() {
        let tierObject = im.buildings[this.item].tier;

        if (tierObject.tierOne.exists) {
            return tierObject.tierOne.machineName;
        }

        if (tierObject.tierTwo.exists) {
            return tierObject.tierTwo.machineName;
        }

        return tierObject.tierThree.machineName;
    }

    getTierDisplayName() {
        let tierObject = im.buildings[this.item].tier;

        let currentTier = '';

        $.each(tierObject, function (key, value) {
            if(value['exists']) {
                currentTier = value['displayName'];
                return false;
            }
        });
        return currentTier;
    };

    setTier(tierMachineName) {
        let tierObject = im.buildings[this.item].tier;

        if (tierMachineName in [
                tierObject.tierOne.machineName,
                tierObject.tierTwo.machineName,
                tierObject.tierThree.machineName,
            ])
        {
            if (tierObject.tierOne.machineName === tierMachineName) {
                tierObject.tierOne.exists = true;
                tierObject.tierTwo.exists = false;
                tierObject.tierThree.exists = false;
                return;
            }

            if (tierObject.tierTwo.machineName === tierMachineName) {
                tierObject.tierOne.exists = false;
                tierObject.tierTwo.exists = true;
                tierObject.tierThree.exists = false;
                return;
            }

            tierObject.tierOne.exists = false;
            tierObject.tierTwo.exists = false;
            tierObject.tierThree.exists = true;
            return;
        }

        throw new Error('Unable to set tier ' + tierMachineName + '.It does not exist.');
    }

    getProduceObj() {
        return im.buildings[this.item].produce;
    }

    canBuild() {
        let requirements = im.buildings[this.item].cost;
        let canBuild = true;

        $.each(requirements, function (key, value) {
            if(im.resources.hasOwnProperty(key)) {
                if(im.resources[key].quantity < value){
                    canBuild = false;
                    return false;
                }
            }

            if(im.items.hasOwnProperty(key)) {
                if(im.resources[key].quantity < value){
                    canBuild = false;
                    return false;
                }
            }
        });

        return canBuild;
    }

    calculateMinedProduce() {
        let tier = this.getTier();
        let tierObject = im.buildings[this.item].tier;
        let produceResults = {};
        let produceArray = [];
        let produceObject = {};
        let classScope = this;
        let numberOfMines = im.buildings[this.item].quantity;

        if(tier === tierObject.tierOne.machineName) {
            produceArray = tierObject.tierOne.produce;
            produceObject = this.getProduceObj();
        }

        if(tier === tierObject.tierTwo.machineName) {
            produceArray = tierObject.tierTwo.produce;
            produceObject = this.getProduceObj();
        }

        if(tier === tierObject.tierThree.machineName) {
            produceArray = tierObject.tierTwo.produce;
            produceObject = this.getProduceObj();
        }

        $.each(produceArray, function (key, value) {
            if(classScope._getRandomChance(produceObject[value].chance * numberOfMines)) {
                produceResults[value] =
                    Misc.randomIntFromInterval(produceObject[value].minAmount, produceObject[value].maxAmount);
            } else {
                produceResults[value] = 0;
            }
        });

        return produceResults;
    }

    _getRandomChance(chance){
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1 < chance;
    }

    build() {
        let requirements = im.buildings[this.item].cost;
        $.each(requirements, function (key, value) {
            if(im.resources.hasOwnProperty(key)) {
                im.resources[key].quantity = im.resources[key].quantity - value;
                let a = ResourceFactory.asNew(key.toUpperCase().strToUpperFirst());
                a.setQuantity(a.getQuantity() - value).setDisplayAmount(a.getQuantity());
            }

            if(im.items.hasOwnProperty(key)) {
                im.resources[key].quantity = im.resources[key].quantity - value;
                // TODO update this too
            }
        });
    }

}

