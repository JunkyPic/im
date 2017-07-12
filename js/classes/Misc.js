class Misc {
    /**
     * camelCase text will be returned as Camelcase
     *
     * @param str
     * @returns {string|XML}
     */
    static unCamelCase(str) {
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

    /**
     * Returns a random integer between an interval
     *
     * @param min
     * @param max
     * @returns {number}
     */
    static randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Clear the last log message every 4 seconds
     * @return void
     */
    static clearPageMessage() {
        let page = "#im_page";
        setInterval(function () {
            let count = $(page).find("p").length;
            if(count > 20) {
                $(page +" p:last").fadeOut(1000, function () {
                    $(this).remove();
                });
            }
        }, 4000);
    }

}

String.prototype.strToUpperFirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};