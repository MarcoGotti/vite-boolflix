<script>
import { state } from "../state.js";
import FlyersList from "./FlyersList.vue";
export default {
  name: "AppMain",
  components: {
    FlyersList,
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
    <FlyersList></FlyersList>
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

<style scoped></style>
