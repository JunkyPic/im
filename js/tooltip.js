$(document).ready(function () {
    // Add various tooltip for buildings

    // Underground mine
    $('#im_buildings_underground_mine_build_button').attr('title', buildTooltipText(im.buildings.undergroundMine.tooltip));
    $('[data-toggle="im_buildings_underground_mine_tooltip"]').tooltip();

    // Surface mine
    $('#im_buildings_surface_mine_build_button').attr('title', buildTooltipText(im.buildings.surfacedMine.tooltip));
    $('[data-toggle="im_buildings_surface_mine_tooltip"]').tooltip();

    // Lumber mill
    $('#im_buildings_lumber_mill_build_button').attr('title', buildTooltipText(im.buildings.lumberMill.tooltip));
    $('[data-toggle="im_buildings_lumber_mill_tooltip"]').tooltip();

    // Hunter Shack
    $('#im_buildings_hunter_shack_build_button').attr('title', buildTooltipText(im.buildings.hunterShack.tooltip));
    $('[data-toggle="im_buildings_hunter_shack_tooltip"]').tooltip();

    // Tannery
    $('#im_buildings_tanner_build_button').attr('title', buildTooltipText(im.buildings.tannery.tooltip));
    $('[data-toggle="im_buildings_tannery_tooltip"]').tooltip();

    // Workshop
    $('#im_buildings_workshop_build_button').attr('title', buildTooltipText(im.buildings.workshop.tooltip));
    $('[data-toggle="im_buildings_workshop_tooltip"]').tooltip();

    // Warehouse
    $('#im_buildings_warehouse_build_button').attr('title', buildTooltipText(im.buildings.warehouse.tooltip));
    $('[data-toggle="im_buildings_warehouse_tooltip"]').tooltip();

    // Wheat Farm
    $('#im_buildings_wheat_farm_build_button').attr('title', buildTooltipText(im.buildings.wheatFarm.tooltip));
    $('[data-toggle="im_buildings_wheat_farm_tooltip"]').tooltip();

    // Blast Furnace
    $('#im_buildings_blast_furnace_build_button').attr('title', buildTooltipText(im.buildings.blastFurnace.tooltip));
    $('[data-toggle="im_buildings_blast_furnace_tooltip"]').tooltip();

    // Forge
    $('#im_buildings_uforge_build_button').attr('title', buildTooltipText(im.buildings.forge.tooltip));
    $('[data-toggle="im_buildings_forge_tooltip"]').tooltip();

    // Coke Oven
    $('#im_buildings_coke_oven_build_button').attr('title', buildTooltipText(im.buildings.cokeOven.tooltip));
    $('[data-toggle="im_buildings_coke_oven_tooltip"]').tooltip();

    // Silver
    $('#im_resources_silver_tooltip').attr('title', ResourceFactory.asNew('Silver').getTooltipText());
    $('[data-toggle="im_resources_silver_tooltip"]').tooltip();

    // Gold
    $('#im_resources_gold_tooltip').attr('title', (ResourceFactory.asNew('Gold').getTooltipText()));
    $('[data-toggle="im_resources_gold_tooltip"]').tooltip();
});

function buildTooltipText(obj) {
    let html = '';
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            if(value === 'tooltip_text') {
                continue;
            }
            html += Misc.unCamelCase(value) + ' - ' + obj[value] + '<br>';
        }
    }
    if(obj.hasOwnProperty('tooltip_text')) {
        return obj['tooltip_text'].replace('__info_data__', '<div class="text-center"> Cost:<br>' + html + '</div>');
    }
    return 'Missing information.';
}


