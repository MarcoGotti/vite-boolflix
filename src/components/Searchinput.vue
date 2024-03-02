<script>
import { state } from "../state.js";

export default {
  name: "SearchInput",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      id="text"
      v-model="state.searchText"
      @keyup.enter="state.searchGo"
      placeholder="what do you want to watch?"
    />
    <button type="button" @click="state.searchGo">Search</button>
  </div>
</template>

<style scoped>
input,
button {
  padding: 0.5rem;
  border: none;
  font-weight: 500;
}
input {
  border-radius: 10px;
  background-color: var(--bool-light);
  width: 250px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  @media screen and (min-width: 1056px) {
    width: 300px;
  }
}

button {
  display: none;
  margin-left: 0.3rem;
  border-radius: 3px;
  background-color: var(--bool-dark);
  color: var(--bool-light);

  @media screen and (min-width: 1080px) {
    display: inline-block;
  }
}
</style>
