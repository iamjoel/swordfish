<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: string,
  [key: string]: any,
}>(), {
  type: 'primary'
})
</script>

<template>
  <a-button v-bind="props as any">
    <template #icon><slot name="icon" /></template>
    <slot />
  </a-button>
</template>
