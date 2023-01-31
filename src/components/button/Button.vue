<template>
  <button :class="handleStatusButton(item.action)">{{ item.action }}</button>
</template>
  
<script setup>
import { defineProps } from 'vue';
import { buttons } from '../../locales/labels';

defineProps({
  item: {
    action: String
  }
})

const handleStatusButton = (actionItem) => {
  if(actionItem === buttons.complete) {
    return 'showCompleteButton';
  } else if (actionItem === buttons.disconnect) {
    return 'showDisconnectButton';
  }

  return 'hideButton';
}

</script>
  
<style lang="scss">
@import './Button.module.scss';
</style>
  