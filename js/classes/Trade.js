class Trade {
    /**
     * @param resourcesObject
     */
    constructor(resourcesObject) {
        this.areaId = '#im_trade_modal_body';
        this.resourcesObject = resourcesObject;
    }

    /**
     * Listen, I'm not proud of this, but it works
     * @returns {string}
     */
    buildTradeArea() {

        let silver = ResourceFactory.asNew('Silver');
        let gold = ResourceFactory.asNew('Gold');
        let html = '';
        $.each(this.resourcesObject, function (key, value,) {

            let itemClass = ResourceFactory.asNew(value.machineName.toLowerCase().strToUpperFirst()); // black magic fuckery
            if (key === silver.getMachineName() || key === gold.getMachineName() || !itemClass.isTradeable()) {
                return true;
            }

            html += '<div class="row top-buffer-5">';

            if (itemClass.getTradeBaseValue() <= silver.getTradeBaseValue()) {
                let tradeCalcSilver = 'Trade.updateValues(' + 1 + ',' + silver.getTradeBaseValue() / itemClass.getTradeBaseValue() + ',\'' + silver.getMachineName() + '\',\''  + itemClass.getMachineName() + '\');';
                let tradeCalcGold = 'Trade.updateValues(' + 1 + ',' + gold.getTradeBaseValue() / itemClass.getTradeBaseValue() +  ',\'' + gold.getMachineName() + '\',\''  + itemClass.getMachineName() + '\');';
                let displayTextForSilver = 'Buy ' + silver.getTradeBaseValue() / itemClass.getTradeBaseValue() + ' ' + itemClass.getDisplayName() + ' for <span class="text-warning">1 ' + silver.getDisplayName() + '</span>';
                let displayTextForGold= 'Buy ' + gold.getTradeBaseValue() / itemClass.getTradeBaseValue()+ ' ' + itemClass.getDisplayName() + ' for <span class="text-warning">1 ' + gold.getDisplayName() + '</span>';

                // Silver
                html += Trade.buildTradeButton(tradeCalcSilver, displayTextForSilver);
                // Gold
                html += Trade.buildTradeButton(tradeCalcGold, displayTextForGold);

            } else {
                let tradeCalcSilver = 'Trade.updateValues(' + itemClass.getTradeBaseValue() / silver.getTradeBaseValue() + ',' + 1 + ',\'' + silver.getMachineName() + '\',\''  + itemClass.getMachineName() + '\');';
                let tradeCalcGold = 'Trade.updateValues(' + itemClass.getTradeBaseValue() / gold.getTradeBaseValue() + ',' + 1 + ',\'' + gold.getMachineName() + '\',\''  + itemClass.getMachineName() + '\');';
                let displayTextForSilver = 'Buy 1 ' + itemClass.getDisplayName() + ' for <span class="text-warning">' + itemClass.getTradeBaseValue() / silver.getTradeBaseValue() + ' ' + silver.getDisplayName() + '</span>';
                let displayTextForGold= 'Buy 1 ' + itemClass.getDisplayName() + ' for <span class="text-warning">' + itemClass.getTradeBaseValue() / gold.getTradeBaseValue() + ' ' + gold.getDisplayName() + '</span>';

                // Silver
                html += Trade.buildTradeButton(tradeCalcSilver, displayTextForSilver);
                // Gold
                html += Trade.buildTradeButton(tradeCalcGold, displayTextForGold);
            }

            html += '</div>';

        });
        return html;
    }

    /**
     *
     * @param tradeCalc
     * @param displayText
     * @returns {string}
     */
    static buildTradeButton(tradeCalc, displayText) {
        return '<div class="col-lg-6">' +
            '<a class="btn btn-xs btn-default" ' +
            'href="#" ' +
            'onclick="' + tradeCalc + '">' +
            '<span class="text-primary">' + displayText +
            '</span></a></div>';
    }

    /**
     * @param sold
     * @param bought
     * @param soldMachineName
     * @param boughtMachineName
     */
    static updateValues(sold, bought, soldMachineName, boughtMachineName) {
        let soldItemClass = ResourceFactory.asNew(soldMachineName.toLowerCase().strToUpperFirst());
        let boughtItemClass = ResourceFactory.asNew(boughtMachineName.toLowerCase().strToUpperFirst());

        if (soldItemClass.getQuantity() - sold < 0) {
            alert('You cannot buy ' + boughtItemClass.getDisplayName() + ', not enough ' + soldItemClass.getDisplayName());
            return;
        }

        // Set the correct quantity in the global object
        // And update the front-end display
        soldItemClass.setQuantity(soldItemClass.getQuantity() - sold).setDisplayAmount(soldItemClass.getQuantity());
        boughtItemClass.setQuantity(boughtItemClass.getQuantity() + bought).setDisplayAmount(boughtItemClass.getQuantity());
    }
}