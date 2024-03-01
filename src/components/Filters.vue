<script>
import { state } from "../state.js";
export default {
  name: "Filters",
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
    <option value="" selected>All</option>
    <option v-for="genre in state.genres" :value="genre.id">
      {{ genre.name }}
    </option>
  </select>

  <select
    name="media"
    id="media"
    v-model="state.media_type"
    @change="state.applyFilters()"
  >
    <option value="" selected>All</option>
    <option value="movie">Movies</option>
    <option value="tv">Series</option>
  </select>
</template>

<style scoped></style>
