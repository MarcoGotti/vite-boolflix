<script>
import { state } from "../state.js";
import UserAccess from "./UserAccess.vue";
import Searchinput from "./Searchinput.vue";
import Logo from "./Logo.vue";
import Filters from "./Filters.vue";

export default {
  name: "AppHeader",
  components: {
    UserAccess,
    Searchinput,
    Logo,
    Filters,
  },
  data() {
    return {
      state,
    };
  },
};
</script>
<template>
  <header>
    <Logo></Logo>
    <nav>
      <Filters></Filters>
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
