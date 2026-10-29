<script setup lang="ts">
import ScrollableContent from '../components/ScrollableContent'
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    // Use a local color by default so covers work offline.
    default: '#25382c',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div
    class="slidev-layout cover text-center"
    :style="style"
  >
    <ScrollableContent class="my-auto w-full">
      <slot />
    </ScrollableContent>
  </div>
</template>
