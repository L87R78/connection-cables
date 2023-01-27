<template>
  <div class="wrapperDevices">
    <div class="wrapperFirstSection">
      <DeviceABC1 />
      <DeviceMNL5 />
    </div>
    <div class="wrapperSecondSection">
      <DeviceXYZ9 />
    </div>
  </div>
  <div class="horizontalLine" />
  <div class="wrapperJobsAndCables">
    <Jobs />
    <ConnectedCables />
  </div>
</template>
  
<script setup>
import DeviceABC1 from '../devices/DeviceABC1.vue'
import DeviceMNL5 from '../devices/DeviceMNL5.vue'
import DeviceXYZ9 from '../devices/DeviceXYZ9.vue'
import Jobs from '../jobs/Jobs.vue'
import ConnectedCables from '../connectedCables/ConnectedCables.vue'
</script>

<style lang="scss">
@import './Home.module.scss';
</style>
  