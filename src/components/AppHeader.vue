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
      <div class="search">
        <Searchinput></Searchinput>
        <Filters></Filters>
      </div>
      <UserAccess></UserAccess>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  padding: 1rem;
  background-color: var(--bool-primary);
  border-radius: 0.5rem;

  @media screen and (min-width: 594px) {
    flex-direction: row;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;

    @media screen and (min-width: 594px) {
      justify-content: end;
      gap: 2rem;
      margin-top: 0;
    }

    .search {
      @media screen and (min-width: 824px) {
        display: flex;
        flex-direction: row-reverse;
        gap: 0.5rem;
      }
    }
  }
}
</style>
