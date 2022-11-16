<script setup lang="ts">
import Row from "@/components/ui/layout/Row.vue";
import Col from "@/components/ui/layout/Col.vue";

const emit = defineEmits(["search", "reset"]);

const handleReset = () => {
  emit("reset");
};

const handleSearch = () => {
  emit("search");
};
</script>

<template>
  <main class="search-panel">
    <Row>
      <Col :flex="1">
        <Row>
          <slot />
        </Row>
      </Col>
      <a-divider style="height: 84px" direction="vertical" />
      <Col :flex="'86px'" style="text-align: right">
        <a-space direction="vertical" :size="18">
          <a-button type="primary" @click="handleSearch" long>
            <template #icon>
              <icon-search />
            </template>
            Search
          </a-button>
          <a-button @click="handleReset" long>
            <template #icon>
              <icon-refresh />
            </template>
            Reset
          </a-button>
        </a-space>
      </Col>
    </Row>
  </main>
</template>

<style scoped>
.reset-btn {
  margin-right: 10px;
}
</style>
