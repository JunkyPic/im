class Page {
    /**
     * Clear the last log message every 4 seconds
     * @return void
     */
    static paragraphClear() {
        let imPage = '#im_page';

        setInterval(function () {
            let count = $(imPage).find("p").length;
            if(count > 20) {
                $(imPage +" p:last").fadeOut(1000, function () {
                    $(this).remove();
                });
            }
        }, 500);
    }

    /**
     * Write a message to the main log on the page
     *
     * @param message
     */
    static paragraphWrite(message) {
        if(undefined === message) {
            throw new Error('Message is undefined');
        }

        $('#im_paragraph').prepend('<p class="text-center text-white">' + message + '</p>');
    }
}