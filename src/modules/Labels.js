import { tableLabels } from '../locales/labels';

class Labels {
    constructor(value) {
        this.value = value;
    }

    headerlabels() {

        switch(this.value) {
            case tableLabels.connectedCables:
                return [ tableLabels.name, tableLabels.from, tableLabels.to ];
            case tableLabels.jobs:
                return [ tableLabels.type, tableLabels.from, tableLabels.to, tableLabels.status, tableLabels.action ];
            case tableLabels.device:
                return [ tableLabels.portName, tableLabels.connectedTo, tableLabels.cable, tableLabels.action ];
            default: return [];
        }
    }
}

export default Labels;
