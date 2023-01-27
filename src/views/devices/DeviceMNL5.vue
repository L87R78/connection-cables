<template>
  <div class="deviceMNL5">
    <DeviceTable 
    :deviceName="`Device ${device.deviceName}`"
    :deviceData="storeDevices.devicesData.filter(device => device.deviceName === 'MNL5')"
    />
  </div>
</template>
 
<script setup>
import { devices } from '../../store/devices';
import DeviceTable from '../../components/deviceTable/DeviceTable.vue';

const storeDevices = devices();

const device = storeDevices.devicesData.find(device => device.deviceName === 'MNL5');

</script>

<style lang="scss">
@import './Device.module.scss';
</style>
 