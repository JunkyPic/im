$(document).ready(function () {
    $('#im_buildings').hide();
    $('#im_generation').hide();
    $('#im_research').hide();

    $('#im_btn_resources').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').show();
        $('#im_generation').hide();
        $('#im_research').hide();
    });
    $('#im_btn_buildings').click(function () {
        $('#im_buildings').show();
        $('#im_resources').hide();
        $('#im_generation').hide();
        $('#im_research').hide();
    });
    $('#im_btn_generation').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').hide();
        $('#im_generation').show();
        $('#im_research').hide();
    });
    $('#im_btn_research').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').hide();
        $('#im_generation').hide();
        $('#im_research').show();
    });

    /**
     * Used to open the trade interface
     * All the trade logic is handled buy the Trade Class
     */
    $('#im_trade').click(function () {
        $('#im_trade_modal_body').html(new Trade(im.resources).buildTradeArea());
    })
});

// Clear log messages every x seconds
Misc.clearPageMessage();

// Populate initial values for resources
$.each(im.resources, function (key, value) {
    let itemClass = ResourceFactory.asNew(value.machineName.toLowerCase().strToUpperFirst()); // black magic fuckery
    itemClass.setDisplayAmount(value.quantity);
});

// Gather wood
ActionFactory.asNew('GatherWood').propagateAction();
// Gather stone
ActionFactory.asNew('GatherStone').propagateAction();
//Build Buildings
ActionFactory.asNew('UndergroundMine').propagateAction();
