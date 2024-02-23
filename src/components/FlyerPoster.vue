<script>
import { state } from "../state.js/";
export default {
  name: "FlyerPoster",
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
  <div class="flyer_poster">
    <img
      v-if="result.poster_path"
      class="poster"
      :src="state.url_flyer + result.poster_path"
      alt=""
    />

    <div v-else class="no_img_path">
      <img :src="'https://picsum.photos/200/300'" alt="" />
      <div>Poster unavailable</div>
    </div>
  </div>
</template>

<style scoped>
.flyer_poster {
  .poster {
    display: block;
    width: 100%;
    border-radius: 3px;
  }

  .no_img_path {
    position: relative;

    img {
      filter: brightness(12%);
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
</style>
