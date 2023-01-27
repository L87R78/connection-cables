<template>
    <select 
        v-if="storeDevices.availableDevicesData.some(device => device.deviceName !== props.item.deviceName)" 
        class="select" 
        @click="$emit('handleSelectAvailableDevice', $event)">
        <option value="">Devices</option>
        <option 
            v-for="device in storeDevices.availableDevicesData.filter(device => device.deviceName !== props.item.deviceName)"
            :key="device.id" 
            :value='device.id'
        >
            {{ `${device.deviceName} - ${device.portName}` }}
        </option>
    </select>
    <span v-else class="noAvailableDevicesText">No available devices</span>
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
