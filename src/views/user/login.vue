<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Message } from "@arco-design/web-vue";
import { useUserStore } from "@/stores";
import useBoolean from "@/hooks/boolean";
import type { LoginData } from "@/api/user";

const router = useRouter();
const userStore = useUserStore();
const [isLoading, { setTrue: startLoading, setFalse: stopLoading }] =
  useBoolean();

const form = reactive({
  username: "admin",
  password: "1",
  isRead: false,
});

const handleSubmit = async () => {
  try {
    startLoading();
    await userStore.login(form as LoginData);
    const { redirect, ...othersQuery } = router.currentRoute.value.query;
    router.push({
      name: (redirect as string) || "home",
      query: {
        ...othersQuery,
      },
    });
  } catch (e) {
    Message.error(e + "");
  } finally {
    stopLoading();
  }
};

const toPage = (name: string) => {
  router.push({
    name,
    query: router.currentRoute.value.query,
  });
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
            <a-form-item field="username" label="Username">
              <a-input
                v-model="form.username"
                placeholder="Please enter your username"
              />
            </a-form-item>
            <a-form-item
              field="password"
              label="Password"
              style="margin-bottom: 5px"
            >
              <a-input
                v-model="form.password"
                type="password"
                placeholder="Please enter your password"
              />
            </a-form-item>
            <a-form-item style="margin-bottom: 5px">
              <a-link class="forget-link" @click="toPage('forget-password')"
                >Forget password</a-link
              >
            </a-form-item>
            <a-form-item style="margin-bottom: 0">
              <div style="width: 100%">
                <a-button
                  class="login-btn"
                  html-type="submit"
                  type="primary"
                  :loading="isLoading"
                  size="large"
                  long
                >
                  Login
                </a-button>
                <a-button
                  class="register-btn"
                  type="text"
                  size="large"
                  long
                  @click="toPage('register')"
                >
                  Register
                </a-button>
              </div>
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
  margin-top: 20px;
  padding: 10px;
}

.forget-link {
  display: block;
  text-align: right;
  width: 100%;
}

.login-btn,
.register-btn {
  display: block;
}

.register-btn {
  margin-top: 10px;
  color: var(--color-text-3) !important;
}
</style>
