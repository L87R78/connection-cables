<template>
  <div v-if="storeDevices.jobs.length > 0" class="jobs">
    <table class="tableBody">
      <caption class="tableTitle">{{ tableLabels.jobs }}</caption>
      <thead>
        <tr>
          <th class="headerText" v-for="item in labels.headerlabels()" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in storeDevices.jobs" :key="device.id">
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
import { devices } from '../../store/devices'
import Button from '../../components/button/Button.vue'
import Labels from '../../modules/Labels';
import { tableLabels } from '../../locales/labels';

const storeDevices = devices()

const labels = new Labels(tableLabels.jobs);

const handleBtn = (device) => {
  storeDevices.completeDevice(device)
}
</script>

<style lang="scss">
@import './Jobs.module.scss';
</style>
