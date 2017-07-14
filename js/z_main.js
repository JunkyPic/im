$(document).ready(function () {
    $('#im_buildings').hide();
    $('#im_generation_info').hide();
    $('#im_research').hide();

    $('#im_btn_resources').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').show();
        $('#im_generation_info').hide();
        $('#im_research').hide();
    });
    $('#im_btn_buildings').click(function () {
        $('#im_buildings').show();
        $('#im_resources').hide();
        $('#im_generation_info').hide();
        $('#im_research').hide();
    });
    $('#im_btn_generation').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').hide();
        $('#im_generation_info').show();
        $('#im_research').hide();
    });
    $('#im_btn_research').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').hide();
        $('#im_generation_info').hide();
        $('#im_research').show();
    });

    /**
     * Used to open the trade interface
     * All the trade logic is handled by the Trade Class
     */
    $('#im_trade').click(function () {
        $('#im_trade_modal_body').html(new Trade(im.resources).buildTradeArea());
    });
    // Clear log messages every x seconds
    Page.paragraphClear();

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
});

// Build various tools
function onClickCreate(itemName, itemClassName, e) {
    // Load the items object and get the current item being built
    // So a class can be created to take care of the rest
    e.preventDefault();
    let objKeys = Object.keys(im.items);

    if(!itemName in objKeys) {
        Page.paragraphWrite('I do not know what that item is');
        return false;
    }

    let itemClass = ItemFactory.asNew(itemClassName, itemName);

    if(itemClass.canBuild()) {
        itemClass.build();
        Page.paragraphWrite('You have created one ' + itemClass.getDisplayName() + '. And now have: ' + itemClass.getQuantity() + ' ' + itemClass.getDisplayName());
        // Place item in inventory if no other item is there
        let inventoryClass = InventoryFactory.asNew();
        inventoryClass.put(itemClass.getMachineName());
    } else {
        Page.paragraphWrite('You cannot build that item yet.');
    }
}