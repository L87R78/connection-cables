<template>
  <button
    :class="handleStatusButton(item.action)"
    >
    {{ item.action }}
  </button>
</template>
  
<script setup>
import { defineProps } from 'vue'

defineProps({
  item: {
    action: String
  }
})

const handleStatusButton = (actionItem) => {
  if(actionItem === 'Complete') {
    return 'showCompleteButton';
  } else if (actionItem === 'Disconnect') {
    return 'showDisconnetButton';
  }

  return 'hideButton';
}

</script>
  
<style lang="scss">
@import '@/components/button/Button.module.scss';
</style>
  