
$(document).ready(function () {
    $('#im_gather_wood_btn').click(function () {
        $(this).hide();
        $("#im_gather_wood_progress").show();
        gatherWoodManual();
    });

    $('#im_gather_stone_btn').click(function () {
        $(this).hide();
        $("#im_gather_stone_progress").show();
        gatherStoneManual();
    });
});
