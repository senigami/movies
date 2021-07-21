<template>
  <div>
    Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const count = computed(() => store.getters.count);
const recentHistory = computed(() => store.getters.recentHistory);
const increment = () => store.dispatch("increment");
const decrement = () => store.dispatch("decrement");
const incrementIfOdd = () => store.dispatch("incrementIfOdd");
const incrementAsync = () => store.dispatch("incrementAsync");
</script>