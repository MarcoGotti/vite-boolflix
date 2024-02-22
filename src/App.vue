<script>
import { state } from "../src/state.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      state,
      url_api_initial:
        "https://api.themoviedb.org/3/trending/all/day?api_key=61c198a32992a4189de16fcab7d00274",
    };
  },
  methods: {},
  computed: {},
  created() {
    state.renderResults(this.url_api_initial);
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped></style>
