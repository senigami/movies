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
      <input type="text" id="path" :value="state.path" />
    </div>

    <w-tabs :items="[{ title: 'Listing' }, { title: 'HTML Table' }]">
      <template #item-content.1>
        <DirList @updatePath="updatePath"></DirList>
      </template>
      <template #item-content.2>
        <TableList @updatePath="updatePath"></TableList>
      </template>
    </w-tabs>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import DirList from "./DirList.vue";
import TableList from "./TableList.vue";

const updatePath = (value) => {
  state.path = value;
};

const state = reactive({
  path: "",
});
</script>

<style scoped>
</style>