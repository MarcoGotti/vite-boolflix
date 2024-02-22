<script>
import { state } from "../state.js";
import UserAccess from "./UserAccess.vue";
import Searchinput from "./Searchinput.vue";

export default {
  name: "AppHeader",
  components: {
    UserAccess,
    Searchinput,
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
    <div class="logo">
      <h1>boolfix</h1>
    </div>

    <nav>
      <Searchinput></Searchinput>
      <UserAccess></UserAccess>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--bool-primary);
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;

  .logo {
    h1 {
      color: var(--bool-focus);
      text-transform: uppercase;
    }
  }
}
</style>
