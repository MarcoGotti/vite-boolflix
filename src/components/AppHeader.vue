<script>
import { state } from "../state.js";
import UserAccess from "./UserAccess.vue";
import Searchinput from "./Searchinput.vue";
import Logo from "./Logo.vue";

export default {
  name: "AppHeader",
  components: {
    UserAccess,
    Searchinput,
    Logo,
  },
  data() {
    return {
      state,
    };
  },
  methods: {},
};
</script>
<template>
  <header>
    <Logo></Logo>
    <nav>
      <select name="genre" id="genre" v-model="state.selectedgenre">
        <option value="" selected>All</option>
        <option v-for="genre in state.genres" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>

      <select name="media" id="media" v-model="state.media_type">
        <option value="" selected>All</option>
        <option value="movie">Movies</option>
        <option value="tv">Series</option>
      </select>
      <Searchinput></Searchinput>
      <UserAccess></UserAccess>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bool-primary);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;

  @media screen and (min-width: 580px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    gap: 2rem;

    @media screen and (min-width: 580px) {
      justify-content: end;
    }
  }
}
</style>
