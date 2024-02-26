<script>
import { state } from "../state.js/";
import FlyerInfo from "./FlyerInfo.vue";
import ShowOffPoster from "./ShowOffPoster.vue";
import ShowOffInfo from "./ShowOffInfo.vue";
export default {
  name: "ShowOffCard",
  components: {
    FlyerInfo,
    ShowOffPoster,
    ShowOffInfo,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <section class="show_off">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="big_card">
            <ShowOffPoster></ShowOffPoster>
            <ShowOffInfo></ShowOffInfo>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.show_off {
  display: none;
  background-color: var(--bool-primary);
  margin: 0.5rem;
  border-radius: 0.5rem;

  /* sm */
  @media screen and (min-width: 668px) {
    display: block;
  }
}

.big_card {
  border-radius: 5px;
  background-color: var(--bool-secondary);
  padding: 1rem;
  min-height: calc(224.567px + 2rem);
}
</style>
