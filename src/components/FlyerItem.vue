<script>
import { state } from "../state.js/";
export default {
  name: "FlyerItem",
  data() {
    return {
      state,
    };
  },
  props: {
    result: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="cardPoster">
      <img :src="state.url_flyer + result.poster_path" alt="" />
      <!-- <img :src="url_flyer + result.backdrop_path" alt="" /> -->
    </div>
    <div class="cardInfos">
      <div>{{ state.renderInfo(result.title, result.name) }}</div>
      <div>
        {{
          state.renderInfo(
            result.original_title,
            result.original_name,
            result.title,
            result.name
          )
        }}
      </div>
      <div>
        <img
          :src="
            result.original_language
              ? state.renderFlag(result.original_language)
              : ''
          "
          :alt="result.original_language + '🐐no flags🐐'"
        />
      </div>
      <div>
        <i
          v-if="result.vote_average"
          v-for="n in Math.round(result.vote_average)"
          style="color: yellow"
          class="fa-solid fa-star"
        ></i>
        <span v-else>🟡No Feedbacks</span>
        <!-- {{ 
                    state.renderInfo(Math.round(result.vote_average),"❌No Feeds")
                }} -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  height: 100%;
  background-color: var(--bool-secondary);
  padding: 1rem;

  .cardPoster {
    transition: scale 0.5s;
    img {
      display: block;
      width: 100%;
      border-radius: 3px;
    }
  }
  .cardInfos {
    display: none;
    padding: 0.25rem;
  }
}
.card:hover .cardPoster {
  border: 2px solid rgb(182, 0, 0);
  border-radius: 5px;
  scale: 1.2;
}
</style>
