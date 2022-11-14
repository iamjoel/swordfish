<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/layout/header/HeaderComp.vue";
import Menu from "@/components/layout/menu/MenuComp.vue";
</script>

<template>
  <Header />
  <a-layout>
    <Menu />
    <a-layout-content>
      <RouterView class="container" />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.main {
  display: flex;
}

.container {
  box-sizing: border-box;
  height: calc(100vh - 65px);
  overflow-y: auto;
  padding: 20px;
}
</style>
