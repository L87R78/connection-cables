import { tableLabels } from '../locales/labels';
import { devicesStore } from '../store/devices';

class Devices {
    constructor(value) {
        this.value = value;
    }

    storeData() {

        const storeData = devicesStore();

        switch(this.value) {
            case tableLabels.connectedCables:
                return storeData.connectedCables;
            case tableLabels.jobs:
                return storeData.jobs;
            case tableLabels.device:
                return storeData.devices;
            default: return [];
        }
    }

    headerLabels() {

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

export default Devices;
