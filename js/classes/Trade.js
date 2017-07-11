class Trade {
    constructor(resourcesObject) {
        this.areaId = '#im_trade_modal_body';
        this.resourcesObject = resourcesObject;
    }

    buildTradeArea() {
        let html = '';
        let buttonObj = {
            class: 'btn btn-xs btn-default',
            href: '#',
            linkReadableText: 'Trade',
        };

        for (let resource in this.resourcesObject) {
            if (this.resourcesObject.hasOwnProperty(resource)) {
                let currentObj = this.resourcesObject[resource];
                let flag = true;

                for (let value in currentObj) {
                    if (!currentObj.hasOwnProperty('canBeTraded') || currentObj['canBeTraded'] === false) {
                        break;
                    }

                    if(flag) {
                        flag = false;

                        buttonObj.id = 'im_trade_' + resource;

                        console.log(HtmlBuilder.buildButton(buttonObj));

                        html += HtmlBuilder.buildButton(buttonObj);
                    }

                    if (currentObj.hasOwnProperty(value)) {
                        if (currentObj[value] instanceof Object) {
                            continue;
                        }

                        html += value + ' - ' + currentObj[value] + '<br>';
                    }
                }

            }

            // if (this.resourcesObject.hasOwnProperty(value)) {
            //     if(value === 'linkReadableText') {
            //         html += '</a>';
            //         return html;
            //     }
            //     html += ' ' + value + '="' + this.resourcesObject[value] + '" ';
            // }
        }

        return html;
    }

}