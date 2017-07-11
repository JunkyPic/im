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
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Clear the last log message every 4 seconds
let big_log = "#im_page";
setInterval(function () {
    let count = $(big_log).find("p").length;
    if(count > 20) {
        $(big_log +" p:last").fadeOut(1000, function () {
            $(this).remove();
        });
    }
}, 4000);
