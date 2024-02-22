<script>
import { state } from "../state.js/";
import FlyerItem from "./FlyerItem.vue";
export default {
  name: "FlyersList",
  components: {
    FlyerItem,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <section class="cards_list">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          v-for="result in state.searchRes"
        >
          <FlyerItem :result="result"></FlyerItem>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cards_list {
  /* section */
  background-color: var(--bool-primary);
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
</style>
