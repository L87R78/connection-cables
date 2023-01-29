<template>
  <div class="deviceMNL5">
    <DeviceTable 
    :deviceName="`${tableLabels.device} ${device.deviceName}`"
    :deviceData="storeDevices.devicesData.filter(device => device.deviceName === deviceNames.MNL5)"
    />
  </div>
</template>
 
<script setup>
import { devices } from '../../store/devices';
import DeviceTable from '../../components/deviceTable/DeviceTable.vue';
import { tableLabels, deviceNames } from '../../locales/labels';

const storeDevices = devices();

const device = storeDevices.devicesData.find(device => device.deviceName === deviceNames.MNL5);

</script>

<style lang="scss">
@import './Device.module.scss';
</style>
 