<!-- Ho dovuto eliminare questo components altrimento avrei dovuto fare almeno un props-drilling per portare :result="result" più in là -->

<script>
import { state } from "../state.js/";
/* import FlyerPoster from "./FlyerPoster.vue"; */
export default {
  name: "FlyerItem",
  /* components:{
    FlyerPoster
  }, */
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
    <!-- <FlyerPoster></FlyerPoster> -->
    <div class="card_poster">
      <img
        v-if="result.poster_path"
        class="flyer"
        :src="state.url_flyer + result.poster_path"
        alt=""
      />
      <div v-else class="no_img_path">
        <img :src="'https://picsum.photos/200/300'" alt="" />
        <div>Poster unavailable</div>
      </div>
    </div>

    <!-- <img :src="url_flyer + result.backdrop_path" alt="" /> -->

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
  position: relative;
  border-radius: 5px;
  height: 100%;
  background-color: var(--bool-secondary);
  padding: 1rem;
  border: 2px solid var(--bool-secondary);
  border-radius: 5px;
  transition: scale 0.5s, padding 0.5s, border 0.8s;

  .card_poster {
    .flyer {
      display: block;
      width: 100%;
      border-radius: 3px;
    }

    .no_img_path {
      position: relative;

      img {
        filter: brightness(13%);
        display: block;
        width: 100%;
      }

      div {
        position: absolute;
        top: 3rem;
        left: 0.5rem;
        color: var(--bool-dark);
      }
    }
  }

  .cardInfos {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--bool-black);
    padding: 0.5rem;
    width: 100%;
    filter: opacity(0);
    transition: filter 400ms ease-in-out;
  }
}
.card:hover {
  /* .card_poster */
  border: 2px solid rgb(182, 0, 0);
  border-radius: 5px;
  padding: 0.1rem;
  scale: 1.2;
  z-index: 2;
}

.card:hover .cardInfos {
  filter: opacity(1);
}
</style>
