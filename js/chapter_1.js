$(document).ready(function () {
    $('#chapter_1_intro_skip').click(function () {
        $('#chapter_1_intro').fadeOut(1000, function () {
            $(this).remove();
            $('#chapter_2').fadeIn(2000).show();
        });
    });

});