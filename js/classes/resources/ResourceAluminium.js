class ResourceAluminium extends ResourceBase {
    constructor(){
        super('aluminium', 'im_resources_aluminium_quantity');
    }

    static getTooltipText() {
        return im.resources.aluminium.tooltip.tooltip_text;
    }
}