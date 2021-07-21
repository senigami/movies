<template>
  <div>
    <div>
      <h3>Actions</h3>
      <w-flex wrap>
        <div class="grow">
          <h4>Listing</h4>
          <w-list
            :items="[
              {
                label: 'List Directory Contents',
                id: 'list',
              },
              { label: 'Full View List' },
              { label: 'HTML Table' },
            ]"
            hover
            color="primary"
          ></w-list>
        </div>

        <div class="grow">
          <h4>Cleaning</h4>
          <w-list
            hover
            color="primary"
            :items="[
              { label: 'Rename Files and Folders' },
              { label: 'Clean Genres' },
              { label: 'Set MPAA Rating' },
              { label: 'Convert to VR' },
            ]"
          >
            <template #item="{ item }">- {{ item.label }}</template>
          </w-list>
        </div>
      </w-flex>
    </div>

    <div>
      <label for="path">Directory Path</label>
      <input type="text" id="path" :value="path" @change="updatePath" />
    </div>

    <w-tabs :items="[{ title: 'Listing' }, { title: 'HTML Table' }]">
      <template #item-content.1>
        <the-dir-list @updatePath="updatePath" />
      </template>
      <template #item-content.2>
        <the-table-list @updatePath="updatePath" />
      </template>
    </w-tabs>
  </div>
</template>

<script setup>
import { onBeforeMount, computed, toRef } from "vue";
import { useStore } from "vuex";

import TheDirList from "./TheDirList.vue";
import TheTableList from "./TheTableList.vue";

const newPath = toRef("");
const store = useStore();
const path = computed(() => store.state.path);

onBeforeMount(() => {
  // load last used path and request info from api
  // get data and save to state
  updatePath();
});

const updatePath = (e) => {
  let newPath = "";
  if (e) newPath = e.target.value;
  store.dispatch("updatePath", {
    path: newPath,
  });
};
</script>

<style scoped>
</style>