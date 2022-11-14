<script setup lang="ts">
import { ref } from "vue";
import routeConfig from "@/router/config";

const menuList = routeConfig.filter((menu) => {
  return !menu.meta || !menu.meta.hideInMenu;
});
const collapsed = ref(false);
const setCollapsed = (value) => (collapsed.value = value);
</script>

<template>
  <a-layout-sider
    breakpoint="xl"
    class="sider"
    :collapsed="collapsed"
    :collapsible="true"
    @collapse="setCollapsed"
  >
    <a-menu
      :style="{ width: '200px', borderRadius: '4px' }"
      :collapsed="collapsed"
      :default-open-keys="[menuList[0].name]"
    >
      <a-sub-menu v-for="menu in menuList" :key="menu.name">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>{{ menu.meta?.title || menu.name }}</template>
        <div v-if="menu.children">
          <a-menu-item v-for="subMenu in menu.children" :key="subMenu.name">{{
            subMenu.meta?.title || subMenu.name
          }}</a-menu-item>
        </div>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped src="./style.css" />
