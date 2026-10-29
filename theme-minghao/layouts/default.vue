<script setup lang="ts">
import ContentLayout from '../components/ContentLayout'

defineProps({ titleBand: { type: Boolean, default: true } })
</script>

<template>
  <ContentLayout :title-band="titleBand"><slot /></ContentLayout>
</template>
