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
      /* arr1: [1, 2, 3, 4],
      arr2: ["a", "b"],
      arr3: [], */
      state,
      url_api_initial:
        "https://api.themoviedb.org/3/trending/all/day?api_key=61c198a32992a4189de16fcab7d00274",
      /* *********** */
      url_api_movies_initial:
        "https://api.themoviedb.org/3/trending/movie/day?api_key=61c198a32992a4189de16fcab7d00274",
      url_api_tv_initial:
        "https://api.themoviedb.org/3/trending/tv/day?api_key=61c198a32992a4189de16fcab7d00274",
    };
  },
  created() {
    state.getResults(this.url_api_movies_initial, this.url_api_tv_initial);
    /* console.log("show " + state.showOff);
    console.log(this.arr1);
    console.log(this.arr2);
    this.merge(this.arr1, this.arr2); */
  },
  /* methods: {
    merge(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        this.arr3.push(arr1[i]);
        if (arr2[i] !== undefined) this.arr3.push(arr2[i]);
      }

      console.log(this.arr3);
    },
  }, */
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
