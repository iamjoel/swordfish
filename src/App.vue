<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <a-avatar :style="{ backgroundColor: '#14a9f8' }">Arco</a-avatar>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <a-page-header
    :style="{ background: 'var(--color-bg-2)' }"
    title="ArcoDesign"
    subtitle="ArcoDesign Vue 2.0"
  >
    <template #extra>
      <a-radio-group type="button" default-value="large">
        <a-radio value="mini">Mini</a-radio>
        <a-radio value="small">Small</a-radio>
        <a-radio value="large">Large</a-radio>
      </a-radio-group>
    </template>
  </a-page-header>

  <RouterView />
</template>

<style scoped>
</style>
