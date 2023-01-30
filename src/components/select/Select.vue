<template>
    <select 
        v-if="storeDevices.availableDevicesData.some(device => device.deviceName !== props.item.deviceName)"
        :class="storeDevices.availableDevicesData.some(device => device.deviceName !== props.item.deviceName) ? 'showSelect' : 'hideSelect'"
        @click="$emit('handleSelectAvailableDevice', $event)">
        <option value="">{{ tableLabels.devices }}</option>
        <option
            v-for="device in storeDevices.availableDevicesData
            .filter(device =>  device.deviceName !== props.item.deviceName)
            .sort((a, b) => a.id - b.id)"
            :key="device.id" 
            :value='device.id'
        >
            {{ `${device.deviceName} - ${device.portName}` }}
        </option>
    </select>
    <span v-else class="noAvailableDevicesText">{{ tableLabels.noAvailableDevices }}</span>
</template>
  
<script setup>
import { defineProps } from 'vue';
import { devicesStore } from '../../store/devices';
import { tableLabels } from '../../locales/labels';

const props = defineProps({
  item: Object,
})

const storeDevices = devicesStore();

</script>
  
<style lang="scss">
@import '@/components/select/Select.module.scss';
</style>
