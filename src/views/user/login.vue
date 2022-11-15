<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Message } from "@arco-design/web-vue";

const router = useRouter();

const form = reactive({
  name: "admin",
  password: "123",
  isRead: false,
});

const handleSubmit = () => {
  const { name, password } = form;
  //   use Mock, set role
  if (name === "admin" && password === "123") {
    router.push({ name: "home" });
    return;
  }
  Message.error("Invalid username or password");
};
</script>

<template>
  <div class="container">
    <a-card hoverable :style="{ width: '400px' }">
      <a-card-meta>
        <template #title>
          <div class="title">Login</div>
        </template>
        <template #description>
          <a-form :model="form" @submit="handleSubmit" class="form">
            <a-form-item field="name" label="Username">
              <a-input
                v-model="form.name"
                placeholder="Please enter your username"
              />
            </a-form-item>
            <a-form-item field="password" label="Password">
              <a-input
                v-model="form.password"
                type="password"
                placeholder="Please enter your password"
              />
            </a-form-item>
            <a-form-item style="margin-bottom: 0">
              <a-button html-type="submit" type="primary">Login</a-button>
            </a-form-item>
          </a-form>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  text-align: center;
  font-weight: bold;
}

.form {
  margin-top: 30px;
  padding: 10px;
}
</style>
