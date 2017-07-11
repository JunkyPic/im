class HtmlBuilder {
    static buildHiperlink(...obj) {
        let html = '<a ';
        for (let value in obj) {
            if (obj.hasOwnProperty(value)) {
                html += value + '="' + obj[value] + '"';
            }
        }
        return html;
    }
}