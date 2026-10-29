<script setup lang="ts">
import ContentLayout from '../components/ContentLayout'

defineProps({
  image: String,
  backgroundSize: { type: String, default: 'cover' },
  titleBand: { type: Boolean, default: true },
})
</script>

<template>
  <ContentLayout
    image-side="right"
    :image="image"
    :background-size="backgroundSize"
    :title-band="titleBand"
  ><slot /></ContentLayout>
</template>
