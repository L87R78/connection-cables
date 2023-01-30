<template>
  <div v-if="connectedCablesData.storeData().length > 0" class="connectedCables">
    <table class="tableBody">
      <caption class="tableTitle">{{ tableLabels.connectedCables }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in connectedCablesData.headerLabels()" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in connectedCablesData.storeData()" :key="device.id">
          <td class="bodyText">{{ device.name }}</td>
          <td class="bodyText">{{ device.from }}</td>
          <td class="bodyText">{{ device.to }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
   
<script setup>
import Devices from '../../modules/Devices';
import { tableLabels } from '../../locales/labels';

const connectedCablesData = new Devices(tableLabels.connectedCables);

</script>

<style lang="scss">
@import './ConnectedCables.module.scss';
</style>
