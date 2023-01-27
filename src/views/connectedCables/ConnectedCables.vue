<template>
  <div class="connectedCables">
    <table class="tableBody">
      <caption class="tableTitle">{{ 'Connected Cables' }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in headars" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in storeDevices.connectedCables" :key="device.id">
          <td class="bodyText">{{ device.name }}</td>
          <td class="bodyText">{{ device.from }}</td>
          <td class="bodyText">{{ device.to }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
   
<script setup>
import { devices } from '../../store/devices'

const storeDevices = devices()

const headars = ['Name', 'From', 'To']
  
</script>

<style lang="scss">
@import '@/views/connectedCables/ConnectedCables.module.scss';
</style>
