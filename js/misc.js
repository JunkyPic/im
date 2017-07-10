$(document).ready(function () {

    $('#im_btn_resources').click(function () {
        $('#im_buildings').hide();
        $('#im_resources').show();
    });
    $('#im_btn_buildings').click(function () {
        $('#im_buildings').show();
        $('#im_resources').hide();
    });

});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Clear the last log message every 10 seconds

setInterval(function () {
    let big_log = "#im_big_log";
    let count = $(big_log).find("p").length;
    if(count > 20) {
        $(big_log +" p:last").fadeOut(1000, function () {
            $(this).remove();
        });
    }

}, 2000);