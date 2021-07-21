<template>
  <div>
    <h3>Directory Listing:</h3>
    <w-table :headers="table.headers" :items="listItems"> </w-table>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const listItems = computed(() => store.state.items);

const table = reactive({
  headers: [{ label: "Title", key: "title" }],
  items: [],
});
</script>

<style scoped>
</style>