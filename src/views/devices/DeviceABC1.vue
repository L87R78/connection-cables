<template>
  <div class="deviceABC1">
    <DeviceTable 
    :deviceName="`${tableLabels.device} ${device.deviceName}`"
    :deviceData="devicesData.storeData().filter(device => device.deviceName === deviceNames.ABC1)"
    :headerLabels="devicesData.headerLabels()"
    />
  </div>
</template>
 
<script setup>
import DeviceTable from '../../components/deviceTable/DeviceTable.vue';
import { tableLabels, deviceNames } from '../../locales/labels';
import Devices from '../../modules/Devices';

const devicesData = new Devices(tableLabels.device);

const device = devicesData.storeData().find(device => device.deviceName === deviceNames.ABC1);

</script>

<style lang="scss">
@import './Device.module.scss';
</style>
 