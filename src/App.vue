<script>
import { state } from "../src/state.js";

export default {
  name: "App",
  data() {
    return {
      state,
    };
  },
  methods: {
    searchGo() {
      const url = `${state.url_api}/search/${state.media_type}?api_key=${state.api_key}&query=${state.searchText}`;
      console.log(url);
      state.renderResults(url);
    },

    renderInfo(key_1, key_2) {
      return key_1 ? key_1 : key_2;
    },
    renderInfo(key_1, key_2, key_3, key_4) {
      return key_1 && key_1 != key_3
        ? key_1
        : key_2 && key_2 != key_4
        ? key_2
        : "";
    },
  },
  computed: {},
  created() {},
};
</script>

<template>
  <input type="text" v-model="state.searchText" />
  <button @click="searchGo">Search</button>

  <div v-for="result in state.searchResults">
    <ul v-if="result.media_type != 'person'">
      <li>{{ renderInfo(result.title, result.name) }}</li>
      <li>
        {{
          renderInfo(
            result.original_title,
            result.original_name,
            result.title,
            result.name
          )
        }}
      </li>
      <li>
        <img
          :src="
            result.original_language
              ? state.renderFlag(result.original_language)
              : ''
          "
          :alt="result.original_language + '🐐no flags available🐐'"
        />
      </li>
      <li>{{ renderInfo(result.vote_average, "🟢No Feedbacks") }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
