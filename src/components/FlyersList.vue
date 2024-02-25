<script>
import { state } from "../state.js/";
import axios from "axios";
import FlyerPoster from "./FlyerPoster.vue";
import FlyerInfo from "./FlyerInfo.vue";
import ShowOffCard from "./ShowOffCard.vue";
/* import FlyerItem from "./FlyerItem.vue"; */
export default {
  name: "FlyersList",
  components: {
    FlyerPoster,
    FlyerInfo,
    ShowOffCard,
    /* FlyerItem, */
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
  <ShowOffCard></ShowOffCard>

  <section class="cards_list">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          v-for="(result, index) in state.searchRes"
        >
          <div
            class="card"
            :id="result.id"
            @click="state.pickMovie(index, result.id, result.media_type)"
          >
            <FlyerPoster :result="result"></FlyerPoster>
            <FlyerInfo :result="result"></FlyerInfo>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.cards_list {
  background-color: var(--bool-primary);
  margin: 0.5rem;
  border-radius: 0.5rem;
}
.card {
  border-radius: 5px;
  background-color: var(--bool-secondary);
  padding: 1rem;
  border: 2px solid var(--bool-secondary);
  border-radius: 5px;
  height: 100%;
  transition: scale 0.5s, padding 0.5s, border 0.8s;
}

.card:hover {
  cursor: pointer;
  border: 2px solid rgb(182, 0, 0);
  border-radius: 5px;
  overflow: auto;
  scale: 1.3;
}

.card:hover .cardInfos {
  filter: opacity(1);
}
</style>
