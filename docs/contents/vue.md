# Vue 3
## Template
```html
<script setup lang="ts">
</script>

<template>
  <div class="container">
  </div>
</template>

<style scoped src="./style.css" />
```

## Props
```
defineProps<{
  msg: string
}>()
```

## getCurrentInstance

```js
import { getCurrentInstance } from "vue";
const { ctx } = getCurrentInstance();
```