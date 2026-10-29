<script setup lang="ts">
import ScrollableContent from '../components/ScrollableContent'
</script>

<template>
  <div class="slidev-layout fact">
    <ScrollableContent class="my-auto">
      <slot />
    </ScrollableContent>
  </div>
</template>
