$(document).ready(function () {

    $('#im_trade').click(function () {
        let trade = new Trade(im.resources);

        let html = trade.buildTradeArea();

        $('#im_trade_modal_body').html(html);
    })
});

