<template>
  <div>
    <h3>Directory Listing:</h3>
    <w-table :headers="table.headers" :items="table.items"> </w-table>
  </div>
</template>

<script setup>
import { reactive, onMounted, inject, watch } from "vue";

const table = reactive({
  headers: [{ label: "Title", key: "title" }],
  items: [],
});
const dirInfo = inject("state", { path: "", items: [] });

onMounted(() => {
  table.items = dirInfo.items;
});

// watch(
//       () => dirInfo.path,
//       (newValue, oldValue) => {
//         if (newValue != oldValue) console.log('data changed',newValue, oldValue);
//       },
//       { immediate: true }
//     );
</script>

<style scoped>
</style>