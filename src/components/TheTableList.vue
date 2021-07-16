<template>
  <div>
    <h3>Table Listing:</h3>
    <w-table :headers="table.headers" :items="table.items">
      <template #item-cell.rating="{ label, item }">
        <w-tooltip right>
          <template #activator="{ on }">
            <span
              v-if="item.mpaa"
              v-on="on"
              class="px2 text-center green-light5--bg text-bold"
              >{{ label }}</span
            >
            <span v-else>{{ label }}</span>
          </template>
          {{ item.mpaa }}
        </w-tooltip>
      </template>
      <template #item-cell.title="{ label, item }">
        <w-tooltip right>
          <template #activator="{ on }">
            <span v-if="item.plot" v-on="on">
              <a v-if="item.imdb" :href="item.imdb" target="_blank">{{
                label
              }}</a>
              <span v-else>{{ label }}</span>
            </span>
            <span v-else>{{ label }}</span>
          </template>
          {{ item.plot }}
        </w-tooltip>
      </template>
    </w-table>
  </div>
</template>
  
  <script setup>
import { reactive, onMounted, inject } from "vue";
const dirInfo = inject("state", { path: "", items: [] });

const table = reactive({
  headers: [
    { label: "Trailer", key: "trailer" },
    { label: "Year", key: "year" },
    { label: "Title", key: "title" },
    { label: "MPAA", key: "rating" },
    { label: "Genres", key: "genre" },
    { label: "Actors (top 3)", key: "actors" },
    { label: "Score", key: "score" },
    { label: "Quality", key: "quality" },
    { label: "Length", key: "length" },
    { label: "GB", key: "gigs" },
  ],
  items: [],
});

onMounted(() => {
  table.items = dirInfo.items;
});
</script>
  
  <style scoped>
</style>



