<template>
  <div class="deviceABC1">
    <DeviceTable 
    :deviceName="`Device ${device.deviceName}`"
    :deviceData="storeDevices.devicesData.filter(device => device.deviceName === 'ABC1')"
    />
  </div>
</template>
 
<script setup>
import { devices } from '../../store/devices';
import DeviceTable from '../../components/deviceTable/DeviceTable.vue';

const storeDevices = devices();

const device = storeDevices.devicesData.find(device => device.deviceName === 'ABC1');

</script>

<style lang="scss">
@import './Device.module.scss';
</style>
 