<script>
import { state } from "../state.js";
export default {
  name: "AppHeader",
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
  },
};
</script>
<template>
  <header>
    <div class="logo">
      <h1>boolfix</h1>
    </div>
    <nav>
      <input type="text" v-model="state.searchText" />
      <button @click="searchGo">Search</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--bool-primary);
  padding: 2rem;
  margin: 0.25rem;
  border-radius: 0.5rem;

  .logo {
    h1 {
      color: var(--bool-focus);
      text-transform: uppercase;
    }
  }

  nav {
    input {
      padding: 0.5rem;
      border: none;
      border-radius: 3px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: 500;
    }

    button {
      margin-left: 0.1rem;
      padding: 0.5rem;
      border: none;
      border-radius: 3px;
      background-color: var(--bool-dark);
      color: var(--bool-light);
      /* border: 1px solid var(--bool-light); */
      font-weight: 500;
    }
  }
}
</style>
