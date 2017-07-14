class ResourceSilver extends ResourceBase {
    constructor(){
        super('silver', 'im_resources_silver_quantity');
    }

    /**
     * @returns {string}
     */
    getTooltipText() {
        return im.resources.silver.tooltip.tooltip_text;
    }
}