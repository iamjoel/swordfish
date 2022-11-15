<script setup lang="ts">
import { ref, computed } from "vue";
import routeConfig from "@/router/config";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
// /fish/list =>  fish-list
const selectedKey = computed(() => {
  return [route.path.substr(1).replace(/\//g, "-") || 'home'];
});

const menuList = routeConfig[0].children.filter((menu) => {
  return !menu.meta || !menu.meta.hideInMenu;
});

const collapsed = ref(false);
const setCollapsed = (value) => (collapsed.value = value);

const pageTo = (name) => {
  router.push({
    name,
  });
};
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
      auto-open
      :default-selected-keys="selectedKey"
      :level-indent="30"
    >
      <div v-for="menu in menuList" :key="menu.name">
        <a-sub-menu
          v-if="menu.children && menu.children.length > 0"
          :key="menu.name"
        >
          <template #icon><icon-apps></icon-apps></template>
          <template #title>{{ menu.meta?.title || menu.name }}</template>
          <div v-if="menu.children">
            <a-menu-item
              v-for="subMenu in menu.children"
              :key="subMenu.name"
              @click="pageTo(subMenu.name)"
            >
              {{ subMenu.meta.title || subMenu.name }}</a-menu-item
            >
          </div>
        </a-sub-menu>
        <a-menu-item v-else :key="menu.name" @click="pageTo(menu.name)">
          <component :is="menu.meta.icon ? `icon-${menu.meta.icon}` : 'icon-apps'" />{{ menu.meta.title || menu.name }}
        </a-menu-item>
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped src="./style.css" />
