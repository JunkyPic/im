im = {};
im.functions = {};
im.functions.global = {};
im.functions.inventory = {};

im.functions.global.gatherWoodDelay = 1;

im.functions.global.gatherWoodLowest = 1;
im.functions.global.gatherWoodHighest = 3;
im.functions.global.gatherWoodLowestWithAxe = 10;
im.functions.global.gatherWoodHighestWithAxe = 20;

im.functions.global.gatherStoneDelay = 1;
im.functions.global.gatherStoneLowest = 1;
im.functions.global.gatherStoneHighest = 2;

im.resources = {
    wood: {
        q: 0,
        display_span_id: '#im_wood_quantity'
    },
    stone: {
        q: 0,
        display_span_id: '#im_stone_quantity'
    },
    meat: 0,
    wheat: 0,
    hide: 0,
    bones: 0,
/////////////////////////

    items: {
        axe: {
            cost: {
                wood: 100,
                stone: 100,
            },
            hasAxe: false,
            durability: 0,
            buildAxeButtonId: '#im_build_axe',
            inv_slot_id: 0,
            durability_lost_lowest: 1,
            durability_lost_highest: 5,
        },
    }
};

im.inventory = {
    0: {
        display_span_id: '#im_inv_axe_slot',
    }
};

$(document).ready(function () {
    $('#im_gather_wood_btn').click(function () {
        $(this).hide();
        $("#im_gather_wood_progress").show();
        im.functions.gatherWoodManual();
    });

    $('#im_gather_stone_btn').click(function () {
        $(this).hide();
        $("#im_gather_stone_progress").show();
        im.functions.gatherStoneManual();
    });

    let canBuildAxeCheckInterval = setInterval( function () {
        if(im.functions.global.canBuildAxe()) {
            clearInterval(canBuildAxeCheckInterval);
            $('#im_build_axe').html('Build axe');
        }
    }, 5000);

    $(im.resources.items.axe.buildAxeButtonId).click(function () {
        im.functions.buildAxe();
    })
});


im.functions.gatherWoodManual = function (){
    $("#im_gather_wood_progress_bar").animate({
        width: "100%"
    }, {
        duration: im.functions.global.gatherWoodDelay,
        complete: function () {
            $('#im_gather_wood_btn').show();
            $('#im_gather_wood_progress_bar').css('width', '0%');
            $("#im_gather_wood_progress").hide();

            if(im.resources.items.axe.hasAxe) {
                let wood = randomIntFromInterval(im.functions.global.gatherStoneLowest, im.functions.global.gatherStoneHighest) * 1.5;
                im.resources.wood.q += wood;
                $(im.resources.wood.display_span_id).html(im.resources.wood.q);
                im.functions.global.writeToLog('You\'ve gathered ' + wood + ' wood, and now have ' + im.resources.wood.q + ' wood.');
                im.functions.axeSetDurability();
            } else {
                let wood = randomIntFromInterval(im.functions.global.gatherStoneLowest, im.functions.global.gatherStoneHighest);
                im.resources.wood.q += wood;
                $(im.resources.wood.display_span_id).html(im.resources.wood.q);
                im.functions.global.writeToLog('You\'ve gathered ' + wood + ' wood, and now have ' + im.resources.wood.q + ' wood.');
            }
        }
    });
};

im.functions.gatherStoneManual = function () {
    $("#im_gather_stone_progress_bar").animate({
        width: "100%"
    }, {
        duration: im.functions.global.gatherStoneDelay,
        complete: function () {
            $('#im_gather_stone_btn').show();
            $('#im_gather_stone_progress_bar').css('width', '0%');
            $("#im_gather_stone_progress").hide();
            let stone = randomIntFromInterval(im.functions.global.gatherWoodLowest, im.functions.global.gatherWoodHighest);
            im.resources.stone.q += stone;
            $(im.resources.stone.display_span_id).html(im.resources.stone.q);
            im.functions.global.writeToLog('You\'ve gathered ' + stone + ' stone, and now have ' + im.resources.stone.q + ' stone.');
        }
    });
};

class Item {
    durability;
    cost;
}

class Axe extends Item {
    setCost(cost) {
        this.cost = cost;
    }
}

im.functions.buildAxe = function () {
    if(im.functions.global.canBuildAxe()) {
        if(!im.resources.items.axe.hasAxe) {
            im.resources.items.axe.hasAxe = true;
            im.resources.items.axe.durability = 100;
            im.functions.global.writeToLog('You\'ve crafted yourself a crude axe, it\'s not great, but it will work.');
            let axe_inv_id = im.resources.items.axe.inv_slot_id;
            $(im.inventory[axe_inv_id].display_span_id).html('Axe | ' + im.resources.items.axe.durability);
        } else {
            im.functions.global.writeToLog('You already have a fine looking axe, it even has ' + im.resources.items.axe.durability + ' durability left.');
        }
    } else {
        im.functions.global.writeToLog('You need more resources to build an axe.');
    }

};

im.functions.global.canBuildAxe = function () {
    return im.resources.wood.q >= im.resources.items.axe.cost.wood && im.resources.stone.q >= im.resources.items.axe.cost.stone;
};

im.functions.axeSetDurability = function () {
    let axe_durability_loss = randomIntFromInterval(im.resources.items.axe.durability_lost_lowest, im.resources.items.axe.durability_lost_highest);
    let axe_durability_current = im.resources.items.axe.durability - axe_durability_loss;
    im.resources.items.axe.durability = im.resources.items.axe.durability - axe_durability_loss;
    if(axe_durability_current <= 0) {
        im.functions.setAxeBroken();
    } else {
        let axe_inv_id = im.resources.items.axe.inv_slot_id;
        $(im.inventory[axe_inv_id].display_span_id).html('Axe | ' + im.resources.items.axe.durability);
    }
};

im.functions.setAxeBroken = function () {
    im.functions.global.writeToLog('Looks like your axe broke, you may want to craft another one.');
    im.resources.items.axe.hasAxe = false;
    im.resources.items.axe.durability = 0;
    let axe_inv_id = im.resources.items.axe.inv_slot_id;
    $(im.inventory[axe_inv_id].display_span_id).html('Empty');
};