<script setup lang="ts">
// import { computed } from "vue";
// import useLocale from "@/hooks/locale";
import enUS from "@arco-design/web-vue/es/locale/lang/en-us";
// import zhCN from "@arco-design/web-vue/es/locale/lang/zh-cn";

// const { currentLocale } = useLocale();
// const locale = computed(() => {
//   switch (currentLocale.value) {
//     case "zh-CN":
//       return zhCN;
//     case "en-US":
//       return enUS;
//     default:
//       return enUS;
//   }
// });
const locale = enUS;
</script>

<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
