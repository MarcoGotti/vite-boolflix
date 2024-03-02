<script>
import { state } from "../state.js";
import genreOptions from "./genreOptions.vue";
import mediaOptions from "./mediaOptions.vue";
export default {
  name: "Filters",
  components: { genreOptions, mediaOptions },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <select
    name="genre"
    id="genre"
    v-model="state.genre"
    @change="state.applyFilters()"
  >
    <genreOptions></genreOptions>
  </select>

  <select
    name="media"
    id="media"
    v-model="state.media_type"
    @change="state.applyFilters()"
  >
    <mediaOptions></mediaOptions>
  </select>
</template>

<style scoped>
select {
  padding: 0.5rem;
  border: none;
  font-weight: 500;
  border-radius: 10px;
  background-color: var(--bool-light);
  max-width: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
