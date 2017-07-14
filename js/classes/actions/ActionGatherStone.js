class ActionGatherStone {
    constructor() {
        this.eventButtonId = '#im_gather_stone_btn';
        this.eventProgressBarDivId = '#im_gather_stone_progress';
        this.eventProgressBarId = '#im_gather_stone_progress_bar';
        this.delay = im.misc.gather.stone.delay;
    }

    propagateAction() {
        let classScope = this;

        $(classScope.eventButtonId).click(function () {
            $(classScope.eventButtonId).hide();
            $(classScope.eventProgressBarDivId).show();

            let itemStoneClass = ResourceFactory.asNew('Stone');

            let stoneAmountGathered = Misc.randomIntFromInterval(itemStoneClass.getGatherMinAmount(), itemStoneClass.getGatherMaxAmount());

            $(classScope.eventProgressBarId).animate({
                width: "100%"
            }, {
                duration: classScope.delay,
                complete: function () {
                    $(classScope.eventButtonId).show();
                    $(classScope.eventProgressBarId).css('width', '0%');
                    $(classScope.eventProgressBarDivId).hide();

                    // TODO Setup logic for axes and such
                    itemStoneClass.setQuantity(itemStoneClass.getQuantity() + stoneAmountGathered).setDisplayAmount(itemStoneClass.getQuantity());

                    Page.paragraphWrite('Gathered ' + stoneAmountGathered + ' stone.');
                }
            });
        });
    }
}