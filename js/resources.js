im = {};

im.resources = {
    wood: {
        q: 0,
        id: 'im_wood_quantity'
    },
    stone: {
        q: 0,
        id: 'im_stone_quantity'
    },
    meat: 0,
    wheat: 0,
    hide: 0,
    bones: 0
};

function gatherWoodManual() {
    $("#im_gather_wood_progress_bar").animate({
        width: "100%"
    }, {
        duration: 5000,
        complete: function () {
            $('#im_gather_wood_btn').show();
            $('#im_gather_wood_progress_bar').css('width', '0%');
            $("#im_gather_wood_progress").hide();
            let wood = randomIntFromInterval(2, 8);
            im.resources.wood.q += wood;
            $('#' + im.resources.wood.id).html(im.resources.wood.q);
            $('#im_log').prepend('<p>You\'ve gathered ' + wood + ' wood, and now have ' + im.resources.wood.q + ' wood.</p>')
        }
    });
}

function gatherStoneManual() {
    $("#im_gather_stone_progress_bar").animate({
        width: "100%"
    }, {
        duration: 5000,
        complete: function () {
            $('#im_gather_stone_btn').show();
            $('#im_gather_stone_progress_bar').css('width', '0%');
            $("#im_gather_stone_progress").hide();
            let stone = randomIntFromInterval(2, 8);
            im.resources.stone.q += stone;
            $('#' + im.resources.stone.id).html(im.resources.stone.q);
            $('#im_log').prepend('<p>You\'ve gathered ' + stone + ' stone, and now have ' + im.resources.stone.q + ' stone.</p>')
        }
    });
}