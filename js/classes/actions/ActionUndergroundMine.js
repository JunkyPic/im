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

                        html = 'Your ' + undergroundMineClass.getDisplayName() + ' is currently Tier ' + undergroundMineClass.getTierDisplayName() + '<br>';
                        html += 'It will mine resources every 5 seconds.<br>';
                        html+= '<table><tr><th>Resource</th><th>Chance</th><th>Min amount</th><th>Max amount</th></tr>';
                        $.each(undergroundMineClass.getProduceObj(), function (key, value) {
                            html += '<tr><td>' + key.strToUpperFirst() + '<td>' + value['chance'] + '%</td><td>' + value['minAmount'] + '</td><td>' + value['maxAmount'] + '</td></tr>';
                        });

                        html += '</table>';

                        let id = 'im_buildings_underground_min_display_info';
                        $('#' + id).attr('title',  html);
                        $('#' + id).attr('data-toggle',  id);
                        $('#' + id).attr('data-placement',  'left');
                        $('#' + id).attr('data-html',  'true');
                        $('[data-toggle="' + id +'"]').tooltip();

                    }, undergroundMineClass.getDelay());
                } else {
                    undergroundMineClass.build();
                    undergroundMineClass.setQuantity(undergroundMineClass.getQuantity() + 1).setDisplayAmount(undergroundMineClass.getQuantity());
                }
            }
        });
    }
}