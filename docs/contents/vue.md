# Vue 3
## Template
```html
<template>
  <div class="container">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped src="./style.css" />
```

## TS with Composition API
### Props
```
defineProps<{
  msg: string
}>()
```

### Emits
```
const emit = defineEmits(['change', 'update'])

// type-based
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

[Here](https://vuejs.org/guide/typescript/composition-api.html#typing-component-props)

## getCurrentInstance

```js
import { getCurrentInstance } from "vue";
const { ctx } = getCurrentInstance();
```