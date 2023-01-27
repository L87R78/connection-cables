<template>
    <div class="jobs">
      <table class="tableBody">
        <caption class="tableTitle">{{ 'JOBS' }}</caption>
        <thead>
          <tr>
            <th class="headerText" v-for="item in headars" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="device in storeDevices.jobs" :key="device.id">
            <td class="bodyText">{{ device.type }}</td>
            <td class="bodyText">{{ device.from }}</td>
            <td class="bodyText">{{ device.to }}</td>
            <td class="bodyText" 
              :class="(device.status === 'Pending') ? 'statusPending' : 'statusCompleted'" >{{ device.status }}
            </td>
            <div v-if="device.status === 'Pending'">
              <Button 
                :item=device
                @click="handleBtn(device)"
               />
            </div>
            <!-- <td v-if="device.action === 'Reserved'">{{ device.action }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
</template>
   
<script setup>
  import { devices } from '../../store/devices'
  import Button from '../../components/button/Button.vue'

  const storeDevices = devices()

  const headars = ['Type', 'From', 'To', 'Status', 'Action']

  const handleBtn = (device) => {
    storeDevices.completeDevice(device)
  }
</script>

<style lang="scss">
@import '@/views/jobs/Jobs.module.scss';
</style>
