<script>
import { state } from "../src/state.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      state,
      url_api_initial:
        "https://api.themoviedb.org/3/trending/all/day?api_key=61c198a32992a4189de16fcab7d00274",

      /* *** TENTATIVO CON DUE CALL: MOVIE && TV *** */
      /* url_api_movies_initial:
        "https://api.themoviedb.org/3/trending/movie/day?api_key=61c198a32992a4189de16fcab7d00274",
      url_api_tv_initial:
        "https://api.themoviedb.org/3/trending/tv/day?api_key=61c198a32992a4189de16fcab7d00274", */
    };
  },

  created() {
    state.getResults(this.url_api_initial);
    /* *** TENTATIVO CON DUE CALL: MOVIE && TV *** */
    /* state.getResults(this.url_api_movies_initial, this.url_api_tv_initial); */
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
