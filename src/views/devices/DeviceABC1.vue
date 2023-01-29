<template>
  <div class="deviceABC1">
    <DeviceTable 
    :deviceName="`${tableLabels.device} ${device.deviceName}`"
    :deviceData="storeDevices.devicesData.filter(device => device.deviceName === deviceNames.ABC1)"
    />
  </div>
</template>
 
<script setup>
import { devices } from '../../store/devices';
import DeviceTable from '../../components/deviceTable/DeviceTable.vue';
import { tableLabels, deviceNames } from '../../locales/labels';

const storeDevices = devices();

const device = storeDevices.devicesData.find(device => device.deviceName === deviceNames.ABC1);

</script>

<style lang="scss">
@import './Device.module.scss';
</style>
 