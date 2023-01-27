<template>
  <div class="deviceABC1">
    <table class="tableBody">
      <caption class="tableTitle">{{ `Device ABC1` }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in headars" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in storeDevices.devicesData.filter(device => device.deviceName === 'ABC1')" :key="device.id">
          <td class="bodyText">{{ device.portName }}</td>
          <td class="bodyText">{{ device.connectedTo || "" }}</td>
          <td class="bodyText">{{ device.connectedTo ? device.cable : "" }}</td>
          <div v-if="device.action !== 'Reserved'" class="wrapperButton">
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
          <td v-if="device.action === 'Reserved'">{{ device.action }}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>
 
<script setup>
  import { ref } from 'vue';
  import { devices } from '../../store/devices'
  import Button from '../../components/button/Button.vue'
  import Select from '../../components/select/Select.vue'

  const selectedDeviceState = ref("");

  const storeDevices = devices();

  const headars = ['Port Name', 'Connected to', 'Cable', 'Action'];

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
@import '@/views/deviceABC1/DeviceABC1.module.scss';
</style>
 