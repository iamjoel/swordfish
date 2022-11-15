<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleSelect = (action: any) => {
  switch (action as string) {
    case "logout":
      router.push({ name: "login" });
      break;

    default:
      break;
  }
};
</script>

<template>
  <a-page-header
    class="header"
    title="Swordfish Admin"
    subtitle="Vue3 template"
    :showBack="false"
  >
    <template #extra>
      <div class="right-part">
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
