<template>
    <select class="select" @click="$emit('handleSelectAvailableDevice', $event)">
        <option value="">Devices</option>
        <option 
            v-for="device in storeDevices.availableDevicesData.filter(item => item.deviceName !== props.item.deviceName )"
            :key="device.id" 
            :value='device.id'
        >
            {{ `${device.deviceName} - ${device.portName}` }}
        </option>
    </select>
    <!-- <p v-if="storeDevices.availableDevicesData.length === 0">No device available</p> -->
</template>
  
<script setup>
import { defineProps } from 'vue';
import { devices } from '../../store/devices';

const props = defineProps({
  item: {},
})

const storeDevices = devices();

</script>
  
<style lang="scss">
@import '@/components/select/Select.module.scss';
</style>
