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

            if (!undergroundMineClass.canBuild()) {
                Page.paragraphWrite('You require more resources.');
            } else {
                $(classScope.buildingImageDiv).show();
                // So we don't create a new resource class every time
                // Create one of each here and use them later on
                let classNames = {};
                $.each(im.resources, function (key, value) {
                    classNames[key] = ResourceFactory.asNew(key.toLowerCase().strToUpperFirst());
                });

                // Create generation class to update info
                let generationClass = new Generation();

                if (!undergroundMineClass.has()) {
                    undergroundMineClass.build();
                    undergroundMineClass.setQuantity(undergroundMineClass.getQuantity() + 1).setDisplayAmount(undergroundMineClass.getQuantity());

                    setInterval(function () {
                        let products = undergroundMineClass.calculateMinedProduce();
                        let html = 'Your ' + undergroundMineClass.getDisplayName() + ' produced: ';
                        let write = false;

                        $.each(products, function (key, value) {
                            classNames[key].setQuantity(classNames[key].getQuantity() + value).setDisplayAmount(classNames[key].getQuantity());
                            if (value > 0) {
                                write = true;
                                html += value + ' ' + key + ', ';
                            }
                        });

                        html = html.slice(0, -2) + '.';

                        if (write) {
                            Page.paragraphWrite(html);
                        }

                        let mineTier = undergroundMineClass.getTier();


                        html = 'Your ' + undergroundMineClass.getDisplayName() + ' is currently Tier ' + undergroundMineClass.getTierDisplayName();

                        // Update information about mine on each pass
                        generationClass.displayInformation(html, undergroundMineClass.getMachineName());

                    }, undergroundMineClass.getDelay());
                } else {
                    undergroundMineClass.build();
                    undergroundMineClass.setQuantity(undergroundMineClass.getQuantity() + 1).setDisplayAmount(undergroundMineClass.getQuantity());
                }
            }
        });
    }
}