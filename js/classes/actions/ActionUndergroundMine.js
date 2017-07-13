class ActionUndergroundMine {
    constructor() {
        this.eventButtonId = '#im_buildings_underground_mine_build_button';
        this.delay = im.buildings.undergroundMine.delay;
        this.buildingImageDiv = '#im_buildings_mine';
    }

    propagateAction() {
        let classScope = this;

        $(classScope.eventButtonId).click(function () {
            let undergroundMineClass = BuildingFactory.asNew('UndergroundMine');

            if(!undergroundMineClass.canBuild()) {
                alert('You need more resources');
            } else {
                $(classScope.buildingImageDiv).show();
                // So we don't create a new resource class every time
                // Create one of each here and use them later on
                let classNames = {};
                $.each(im.resources, function (key, value) {
                    classNames[key] = ResourceFactory.asNew(key.toUpperCase().strToUpperFirst());
                });


                if(!undergroundMineClass.has()) {
                    undergroundMineClass.build();
                    undergroundMineClass.setQuantity(undergroundMineClass.getQuantity() + 1);
                    undergroundMineClass.setDisplayAmount(undergroundMineClass.getQuantity());

                    // It could be cleared at one point, who knows
                    let ugMineTimer = setInterval(function(){
                        let products = undergroundMineClass.calculateMinedProduce();
                        $.each(products, function (key, value) {
                            classNames[key].setQuantity(classNames[key].getQuantity() + value).setDisplayAmount(classNames[key].getQuantity());
                        });
                        console.log(products);
                    }, undergroundMineClass.getDelay());
                }else{
                    undergroundMineClass.build();
                    undergroundMineClass.setQuantity(undergroundMineClass.getQuantity() + 1);
                    undergroundMineClass.setDisplayAmount(undergroundMineClass.getQuantity());
                }

            }
        });
    }
}