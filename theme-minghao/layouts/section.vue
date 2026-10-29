<script setup lang="ts">
import ScrollableContent from '../components/ScrollableContent'
</script>

<template>
  <div class="slidev-layout section w-full h-full grid">
    <ScrollableContent class="my-auto text-center">
      <slot />
    </ScrollableContent>
  </div>
</template>
