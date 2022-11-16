<script setup lang="ts">
import { reactive, h } from "vue";
import { fetchList, create, edit, remove } from "@/api/fish";
import List from "@/components/logic/List.vue";
import SearchItem from "@/components/logic/search/SearchItem.vue";
import Input from "@/components/ui/form/Input.vue";
import InputNumber from "@/components/ui/form/InputNumber.vue";
import Select from "@/components/ui/form/select/Select.vue";
import Option from "@/components/ui/form/select/Option.vue";
import RangePicker from "@/components/ui/form/RangePicker.vue";
import FormItem from "@/components/ui/form/FormItem.vue";
import RadioGroup from "@/components/ui/form/radio/RadioGroup.vue";
import Radio from "@/components/ui/form/radio/Radio.vue";
import Textarea from "@/components/ui/form/Textarea.vue";

const getDefaultSearchQuery = () => ({
  name: "",
  address: "",
  createTime: [],
});

const searchQuery = reactive(getDefaultSearchQuery());

const handleReset = async () => {
  Object.assign(searchQuery, getDefaultSearchQuery());
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 80,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 100,
    sortable: {
      sortDirections: ["ascend", "descend"],
      sorter: true, // 关闭客户端排序
    },
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: 120,
    render({ record }: any) {
      return h("span", record.gender === 1 ? "Male" : "Female");
    },
  },
  {
    title: "Description",
    dataIndex: "describe",
    ellipsis: true,
  },
  {
    title: "From",
    dataIndex: "address",
    ellipsis: true,
  },
  {
    title: "Create time",
    dataIndex: "createTime",
    width: 120,
  },
];

const handleSave = async ({ type, payload, onSuccess }) => {
  if (type === "edit") {
    await edit(payload.id, payload);
  } else {
    await create(payload);
  }
  onSuccess();
};

const handleRemove = async ({ id, onSuccess }) => {
  await remove(id);
  onSuccess();
};
</script>

<template>
  <main>
    <List
      title="Fish list"
      :fetchList="fetchList"
      :columns="columns"
      :searchQuery="searchQuery"
      @reset="handleReset"
      @save="handleSave"
      @remove="handleRemove"
    >
      <!-- Search Condition -->
      <template #searchPanel>
        <SearchItem name="Name">
          <Input v-model="searchQuery.name" />
        </SearchItem>

        <SearchItem name="From">
          <Select v-model="searchQuery.address" placeholder="All">
            <Option value="">All</Option>
            <Option value="Beijing">Beijing</Option>
            <Option value="New York">New York</Option>
            <Option value="London">London</Option>
            <Option value="Tokyo">Tokyo</Option>
          </Select>
        </SearchItem>

        <SearchItem name="Description">
          <Input v-model="searchQuery.describe" />
        </SearchItem>

        <SearchItem name="Create time">
          <RangePicker v-model="searchQuery.createTime" />
        </SearchItem>
      </template>

      <!-- 详情 -->
      <template #detail="{ type, currItem }">
        <FormItem
          label="Name"
          field="name"
          :rules="
            type !== 'view'
              ? [{ required: true, message: 'Name required' }]
              : []
          "
          :validate-trigger="['change', 'input']"
        >
          <Input v-model="currItem.name" :disabled="type === 'view'" />
        </FormItem>
        <FormItem
          label="Age"
          field="age"
          :rules="
            type !== 'view' ? [{ required: true, message: 'Age required' }] : []
          "
          :validate-trigger="['change', 'input']"
        >
          <InputNumber v-model="currItem.age" :disabled="type === 'view'" />
        </FormItem>
        <FormItem
          label="Gender"
          field="gender"
          :rules="
            type !== 'view'
              ? [{ required: true, message: 'Gender required' }]
              : []
          "
          :validate-trigger="['change']"
        >
          <div v-if="type === 'view'">
            {{ currItem.gender === 1 ? "Male" : "Female" }}
          </div>
          <RadioGroup v-model="currItem.gender" v-else>
            <Radio :value="1">Male</Radio>
            <Radio :value="0">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Description">
          <Textarea v-model="currItem.describe" :disabled="type === 'view'" />
        </FormItem>
      </template>
    </List>
  </main>
</template>
