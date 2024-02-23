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
}
</style>
