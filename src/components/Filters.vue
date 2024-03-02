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
  <div class="filter_box">
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
  </div>
</template>

<style scoped>
.filter_box {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0;

  @media screen and (min-width: 824px) {
    padding: 0;
  }

  select {
    padding: 0.5rem;
    border: none;
    font-weight: 500;
    border-radius: 8px;
    background-color: var(--bool-light);
    max-width: 100px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
}
</style>
