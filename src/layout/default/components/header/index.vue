<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { LocationQueryRaw } from "vue-router";
import { APP_NAME, APP_DESCRIPTION } from "@/config";
import { useUserStore } from '@/stores';
// import i18n, { LOCALE_OPTIONS } from "@/locale";
// import useLocale from "@/hooks/locale";

const router = useRouter();
const route = useRoute();

const userStore = useUserStore();

// i18n
// const { changeLocale, currentLocale} = useLocale();
// const locales = [...LOCALE_OPTIONS];
// const triggerBtn = ref();
// const setDropDownVisible = () => {
//   const event = new MouseEvent("click", {
//     view: window,
//     bubbles: true,
//     cancelable: true,
//   });
//   triggerBtn.value.dispatchEvent(event);
// };

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
        <!-- <div class="choose-language">
          <a-tooltip content="选择语言">
            <a-button
              class="nav-btn"
              type="outline"
              :shape="'circle'"
              @click="setDropDownVisible"
            >
              <template #icon>
                <icon-language />
              </template>
            </a-button>
          </a-tooltip>
          <a-dropdown trigger="click" @select="changeLocale as any">
            <div ref="triggerBtn" class="trigger-btn"></div>
            <template #content>
              <a-doption
                v-for="item in locales"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </a-doption>
            </template>
          </a-dropdown>
        </div> -->

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
