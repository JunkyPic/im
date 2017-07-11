$(document).ready(function () {
    // Add various tooltip for buildings

    // Underground mine
    $('#im_buildings_underground_mine_tooltip').attr('title', buildTooltipText(im.buildings.undergroundMine.tooltip));
    $('[data-toggle="im_buildings_underground_mine_tooltip"]').tooltip();

    // Surface mine
    $('#im_buildings_surface_mine_tooltip').attr('title', buildTooltipText(im.buildings.surfacedMine.tooltip));
    $('[data-toggle="im_buildings_surface_mine_tooltip"]').tooltip();

    // Lumber mill
    $('#im_buildings_lumber_mill_tooltip').attr('title', buildTooltipText(im.buildings.lumberMill.tooltip));
    $('[data-toggle="im_buildings_lumber_mill_tooltip"]').tooltip();

    // Hunter Shack
    $('#im_buildings_hunter_shack_tooltip').attr('title', buildTooltipText(im.buildings.hunterShack.tooltip));
    $('[data-toggle="im_buildings_hunter_shack_tooltip"]').tooltip();

    // Tannery
    $('#im_buildings_tannery_tooltip').attr('title', buildTooltipText(im.buildings.tannery.tooltip));
    $('[data-toggle="im_buildings_tannery_tooltip"]').tooltip();

    // Workshop
    $('#im_buildings_workshop_tooltip').attr('title', buildTooltipText(im.buildings.workshop.tooltip));
    $('[data-toggle="im_buildings_workshop_tooltip"]').tooltip();

    // Warehouse
    $('#im_buildings_warehouse_tooltip').attr('title', buildTooltipText(im.buildings.warehouse.tooltip));
    $('[data-toggle="im_buildings_warehouse_tooltip"]').tooltip();

    // Wheat Farm
    $('#im_buildings_wheat_farm_tooltip').attr('title', buildTooltipText(im.buildings.wheatFarm.tooltip));
    $('[data-toggle="im_buildings_wheat_farm_tooltip"]').tooltip();

    // Blast Furnace
    $('#im_buildings_blast_furnace_tooltip').attr('title', buildTooltipText(im.buildings.blastFurnace.tooltip));
    $('[data-toggle="im_buildings_blast_furnace_tooltip"]').tooltip();

    // Forge
    $('#im_buildings_forge_tooltip').attr('title', buildTooltipText(im.buildings.forge.tooltip));
    $('[data-toggle="im_buildings_forge_tooltip"]').tooltip();

    // Coke Oven
    $('#im_buildings_coke_oven_tooltip').attr('title', buildTooltipText(im.buildings.cokeOven.tooltip));
    $('[data-toggle="im_buildings_coke_oven_tooltip"]').tooltip();

    // Silver
    $('#im_resources_silver_tooltip').attr('title', (im.resources.silver.tooltip.tooltip_text));
    $('[data-toggle="im_resources_silver_tooltip"]').tooltip();

    // Gold
    $('#im_resources_gold_tooltip').attr('title', (im.resources.gold.tooltip.tooltip_text));
    $('[data-toggle="im_resources_gold_tooltip"]').tooltip();
});

function buildTooltipText(obj) {
    let html = '';
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            if(value === 'tooltip_text') {
                continue;
            }
            html += unCamelCase/*regex is expensive, but eh, it's only executed once on load*/(value) + ' - ' + obj[value] + '<br>';
        }
    }
    if(obj.hasOwnProperty('tooltip_text')) {
        return obj['tooltip_text'].replace('__info_data__', '<div class="text-center"> Cost:<br>' + html + '</div>');
    }
    return 'Missing information.';
}

function unCamelCase(str) {
    return str
    // insert a space between lower & upper
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // space before last upper in a sequence followed by lower
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        // uppercase the first character
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })
}

