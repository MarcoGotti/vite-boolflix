<script>
import { state } from "../state.js";
import FlyersList from "./FlyersList.vue";
import CaseLimit from "./CaseLimit.vue";
export default {
  name: "AppMain",
  components: {
    FlyersList,
    CaseLimit,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <main>
    <CaseLimit v-if="state.searchRes.length == 0"></CaseLimit>

    <section v-else class="show_off">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card"></div>
          </div>
        </div>
      </div>
    </section>
    <FlyersList v-else></FlyersList>
  </main>

  <!-- <div v-for="result in state.searchResults" class="card">
    <ul v-if="result.media_type != 'person'">
      <li>{{ state.renderInfo(result.title, result.name) }}</li>
      <li>
        {{
          state.renderInfo(
            result.original_title,
            result.original_name,
            result.title,
            result.name
          )
        }}
      </li>
      <li>
        <img
          :src="
            result.original_language
              ? state.renderFlag(result.original_language)
              : ''
          "
          :alt="result.original_language + '🐐no flags🐐'"
        />
      </li>
      <li>{{ state.renderInfo(result.vote_average, "🟢No Feedbacks") }}</li>
    </ul>
  </div> -->
</template>

<style scoped>
main {
  min-height: calc(100vh - 245px);
}
.show_off {
  background-color: var(--bool-primary);
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
}

.card {
  height: 300px;
  border-radius: 5px;
  background-color: var(--bool-secondary);
  padding: 1rem;
  /* background-image: url("https://image.tmdb.org/t/p/w342https://image.tmdb.org/t/p/w342/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg");
  background-repeat: no-repeat;
  background-size: auto; */
}
</style>
