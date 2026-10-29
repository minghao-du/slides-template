<script setup lang="ts">
import ScrollableContent from '../components/ScrollableContent'
</script>

<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <ScrollableContent class="my-auto">
      <slot />
    </ScrollableContent>
  </div>
</template>
