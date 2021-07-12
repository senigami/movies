<template>
  <div>
    <h3>Directory Listing:</h3>
    <w-table :headers="table.headers" :items="table.items"> </w-table>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

const state = reactive({
  count: 0,
});

const table = reactive({
  headers: [{ label: "Title", key: "title" }],
  items: [],
});

const emit = defineEmits(['updatePath'])
onMounted(() => {
  table.items = data.items;
  emit('updatePath',data.path);
});

const data = {
  path: "V:\\[SORT]\\[PG]\\",
  items: [
    { title: "Batman & Mr. Freeze, SubZero (1998) [PG] [Animation] [1080]" },
    { title: "Cats (2019) [PG] [Family,Comedy] [1080]" },
    { title: "Christmas Carol, A (1984) [PG] [Family,Fantasy] [1080]" },
    { title: "DBZ" },
    { title: "Dolittle (2020) [PG] [Family,Comedy] [1080]" },
    { title: "Dragon Quest, Your Story (2019) [PG] [Family,Animation] [1080]" },
    { title: "Invasion Planet Earth (2019) [PG] [Sci-Fi] [1080]" },
    { title: "Jonathan (2018) [PG] [Sci-Fi] [1080]" },
    { title: "Little Women (2019) [PG] [Romance] [1080]" },
    {
      title:
        "Never Surrender, A Galaxy Quest Documentary (2019) [PG] [Documentary] [1080]",
    },
    { title: "Robot Carnival (1987) [PG] [Animation] [1080]" },
    {
      title:
        "Timmy Failure, Mistakes Were Made (2020) [PG] [Family,Comedy] [1080]",
    },
  ],
};
</script>

<style scoped>
</style>