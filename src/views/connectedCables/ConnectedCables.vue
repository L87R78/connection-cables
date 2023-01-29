<template>
  <div v-if="storeDevices.connectedCables.length > 0" class="connectedCables">
    <table class="tableBody">
      <caption class="tableTitle">{{ tableLabels.connectedCables }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in labels.headerlabels()" :key="item">{{ item }}</th>
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
import { devices } from '../../store/devices';
import Labels from '../../modules/Labels';
import { tableLabels } from '../../locales/labels';

const storeDevices = devices();

const labels = new Labels(tableLabels.connectedCables);

</script>

<style lang="scss">
@import './ConnectedCables.module.scss';
</style>
