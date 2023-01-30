<template>
  <div class="deviceTable">
    <table class="tableBody">
      <caption class="tableTitle">{{ deviceName }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in headerLabels" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in deviceData" :key="device.id">
          <td class="bodyText">{{ device.portName }}</td>
          <td class="bodyText">{{ device.connectedTo || "" }}</td>
          <td class="bodyText">{{ device.connectedTo ? device.cable : "" }}</td>
          <div v-if="device.action !== tableLabels.reserved" class="wrapperButton">
            <Button 
              :item=device
              @click="handleDisconnetDevice(device)"
              />
            <Select 
              :item=device
              @handleSelectAvailableDevice="handleSelectAvailableDevice"
              @click="handleConnectDevice(device)"
              :class="device.connectedTo && 'hideSelect'"
            />
          </div>
          <td v-if="device.action === tableLabels.reserved">{{ device.action }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
   
<script setup>
import { ref } from 'vue';
import { devicesStore } from '../../store/devices';
import Button from '../../components/button/Button.vue';
import Select from '../../components/select/Select.vue';
import { tableLabels } from '../../locales/labels';

const props = defineProps({
    deviceName: String,
    deviceData: Object,
    headerLabels: Object
})

const { deviceName, deviceData } = props;

const selectedDeviceState = ref("");
const storeDevices = devicesStore();

const handleDisconnetDevice = (deviceRow) => {
  storeDevices.disconnectDevice(deviceRow);
}

const handleConnectDevice = (deviceRow) => {
  storeDevices.connectDevice(Number(selectedDeviceState.value), deviceRow);
}

const handleSelectAvailableDevice = (event) => {
  selectedDeviceState.value = event.target.value;
}

</script>

<style lang="scss">
@import '../../components/deviceTable/DeviceTable.module.scss';
</style>
   