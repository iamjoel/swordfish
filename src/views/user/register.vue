<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { Message } from "@arco-design/web-vue";
import useBoolean from "@/hooks/boolean";

const router = useRouter();
const [isLoading, { setTrue: startLoading, setFalse: stopLoading }] =
  useBoolean();

const form = reactive({
  username: "",
  password: "",
});

const formRef = ref(null);

const handleSubmit = async () => {
  const validRes = await (formRef.value as any).validate();
  if (validRes) {
    return;
  }
  try {
    startLoading();
    router.push({
      name: "login",
      query: router.currentRoute.value.query,
    });
  } catch (e) {
    Message.error(e + "");
  } finally {
    stopLoading();
  }
};
</script>

<template>
  <div class="container">
    <a-card hoverable :style="{ width: '500px' }">
      <a-card-meta>
        <template #title>
          <div class="title">
            <icon-left class="back-icon" @click="router.go(-1)" />
            Register
          </div>
        </template>
        <template #description>
          <a-form
            :model="form"
            auto-label-width
            @submit="handleSubmit"
            class="form"
            ref="formRef"
          >
            <a-form-item
              field="username"
              label="Username"
              :rules="{ required: true, message: 'Username required' }"
            >
              <a-input
                v-model="form.username"
                placeholder="Please enter your username"
              />
            </a-form-item>
            <a-form-item
              field="password"
              label="Password"
              :rules="{ required: true, message: 'Password required' }"
            >
              <a-input
                v-model="form.password"
                type="password"
                placeholder="Please enter your password"
              />
            </a-form-item>
            <a-form-item style="margin-bottom: 0">
              <div style="width: 100%">
                <a-button
                  html-type="submit"
                  type="primary"
                  :loading="isLoading"
                  size="large"
                  long
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
  position: relative;
  text-align: center;
  font-weight: bold;
}

.back-icon {
  position: absolute;
  left: 10px;
  font-size: 20px;
  cursor: pointer;
}

.form {
  margin-top: 20px;
  padding: 10px;
}
</style>
