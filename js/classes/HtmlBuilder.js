class HtmlBuilder {
    static buildHiperlink(...obj) {
        let html = '<a';
        for (let value in obj) {
            if (obj.hasOwnProperty(value)) {
                if(value === 'linkReadableText') {
                    html += '</a>';
                    return html;
                }
                html += ' ' + value + '="' + obj[value] + '" ';
            }
        }
    }

    static buildButton(...obj) {
        let html = '<a';
        for (let key in obj) {
            let currentObj = obj[key];
            for (let currObjKey in currentObj) {

                if (currentObj.hasOwnProperty(currObjKey)) {
                    if(currObjKey === 'linkReadableText') {
                       continue;
                    }
                    html += ' ' + currObjKey + '="' + currentObj[currObjKey] + '" ';
                }
            }
            html += '>' + currentObj['linkReadableText'] + '</a>';
        }
        
        return html;
    }
}