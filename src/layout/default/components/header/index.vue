<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { LocationQueryRaw } from "vue-router";
import { APP_NAME, APP_DESCRIPTION } from '@/config'
import { useUserStore } from "@/stores";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const handleSelect = (action: any) => {
  switch (action as string) {
    case "logout":
      userStore.logout();
      router.push({
        name: "login",
        query: {
          redirect: route.name,
        } as LocationQueryRaw,
      });
      break;
    default:
      break;
  }
};
</script>

<template>
  <a-page-header
    class="header"
    :title="APP_NAME"
    :subtitle="APP_DESCRIPTION"
    :showBack="false"
  >
    <template #extra>
      <div class="right-part">
        <div class="welcome">Welcome: {{ userStore.name }}~</div>
        <icon-notification class="notice-icon" />
        <a-dropdown @select="handleSelect">
          <a-avatar class="avatar">
            <icon-user />
          </a-avatar>
          <template #content>
            <a-doption value="logout">Logout</a-doption>
          </template>
        </a-dropdown>
      </div>
    </template>
  </a-page-header>
</template>

<style scoped src="./style.css" />
