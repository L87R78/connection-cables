<template>
  <div v-if="jobsData.storeData().length > 0" class="jobs">
    <table class="tableBody">
      <caption class="tableTitle">{{ tableLabels.jobs }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in jobsData.headerLabels()" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in jobsData.storeData()" :key="device.id">
          <td class="bodyText">{{ device.type }}</td>
          <td class="bodyText">{{ device.from }}</td>
          <td class="bodyText">{{ device.to }}</td>
          <td class="bodyText" 
            :class="(device.status === tableLabels.pending) ? 'statusPending' : 'statusCompleted'" >{{ device.status }}
          </td>
          <div v-if="device.status === tableLabels.pending">
            <Button 
              :item=device
              @click="handleBtn(device)"
              />
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>
   
<script setup>
import { devicesStore } from '../../store/devices';
import Button from '../../components/button/Button.vue';
import Devices from '../../modules/Devices';
import { tableLabels } from '../../locales/labels';

const storeDevices = devicesStore();
const jobsData = new Devices(tableLabels.jobs);

const handleBtn = (device) => {
  storeDevices.completeDevice(device);
}

</script>

<style lang="scss">
@import './Jobs.module.scss';
</style>
