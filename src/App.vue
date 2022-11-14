<script setup lang="ts">
import { useRouter, RouterView } from "vue-router";

const router = useRouter();

const handleSelect = (action: any) => {
  switch (action as string) {
    case "login":
      router.push({ name: "login" });
      break;

    default:
      break;
  }
};
</script>

<template>
  <a-page-header
    :style="{ background: 'var(--color-bg-2)' }"
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
            <a-doption value="login">Login</a-doption>
          </template>
        </a-dropdown>
      </div>
    </template>
  </a-page-header>

  <RouterView />
</template>

<style scoped>
.right-part {
  display: flex;
  align-items: center;
}
.notice-icon {
  margin-right: 20px;
  font-size: 20px;
  color: #000;
}
.avatar {
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
