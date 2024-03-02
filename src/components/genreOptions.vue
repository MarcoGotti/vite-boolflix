<script>
import axios from "axios";
import { state } from "../state.js";
export default {
  name: "genreOptions",
  data() {
    return {
      state,
      genres: [],
    };
  },
  created() {
    this.getGenres;
  },
  computed: {
    getGenres() {
      let genresId = [];
      axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=61c198a32992a4189de16fcab7d00274"
        )
        .then((response) => {
          const arr = response.data.genres;
          arr.forEach((genre) => {
            if (!genresId.includes(genre.id)) {
              genresId.push(genre.id);
              this.genres.push(genre);
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
      axios
        .get(
          "https://api.themoviedb.org/3/genre/tv/list?api_key=61c198a32992a4189de16fcab7d00274"
        )
        .then((response) => {
          const arr = response.data.genres;
          arr.forEach((genre) => {
            if (!genresId.includes(genre.id)) {
              genresId.push(genre.id);
              this.genres.push(genre);
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <option value="" selected>All</option>
  <option v-for="genre in this.genres" :value="genre.id">
    {{ genre.name }}
  </option>
</template>

<style scoped></style>
