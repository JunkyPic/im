class ActionGatherWood {
    constructor() {
        this.eventButtonId = '#im_gather_wood_btn';
        this.eventProgressBarDivId = '#im_gather_wood_progress';
        this.eventProgressBarId = '#im_gather_wood_progress_bar';
        this.delay = im.misc.gather.wood.delay;
    }

    propagateAction() {
        let classScope = this;

        $(classScope.eventButtonId).click(function () {
            $(classScope.eventButtonId).hide();
            $(classScope.eventProgressBarDivId).show();

            let itemWoodClass = ResourceFactory.asNew('Wood');

            let woodAmountGathered = Misc.randomIntFromInterval(itemWoodClass.getGatherMinAmount(), itemWoodClass.getGatherMaxAmount());

            $(classScope.eventProgressBarId).animate({
                width: "100%"
            }, {
                duration: classScope.delay,
                complete: function () {
                    $(classScope.eventButtonId).show();
                    $(classScope.eventProgressBarId).css('width', '0%');
                    $(classScope.eventProgressBarDivId).hide();

                    // TODO Setup logic for axes and such
                    itemWoodClass.setQuantity(itemWoodClass.getQuantity() + woodAmountGathered).setDisplayAmount(itemWoodClass.getQuantity());
                }
            });
        });
    }
}