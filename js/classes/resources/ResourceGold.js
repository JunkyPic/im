class ResourceGold extends ResourceBase {
    constructor(){
        super('gold', 'im_resources_gold_quantity');
    }

    getTooltipText() {
        return im.resources.gold.tooltip.tooltip_text;
    }
}