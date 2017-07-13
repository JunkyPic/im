class Generation {
    constructor() {
        this.divId = '#im_generation_info_append';
    }

    displayInformation(information, machineName) {
        let spanInfoId = 'im_generation_info_append_' + machineName;

        if($('#im_generation_default_info').length > 0) {
            $('#im_generation_default_info').remove();
        }

        let formattedInformation = '<p id="' + spanInfoId + '" class="text-info text-center">' + information + '</p>';

        if($("#" + spanInfoId).length < 1) {
            $(this.divId).append(formattedInformation);
        } else {
            // Remove with outdated info
            $('#' + spanInfoId).remove();
            // Place new div with correct info
            $(this.divId).append(formattedInformation);
        }
    }
}