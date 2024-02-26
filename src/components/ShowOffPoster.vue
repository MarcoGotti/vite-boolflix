<script>
import { state } from "../state.js/";
export default {
  name: "ShowOffPoster",
  data() {
    return {
      state,
    };
  },
};
</script>
<template>
  <div class="showoff_img">
    <img
      class="backdrop_path"
      v-if="state.result.backdrop_path"
      :src="state.url_flyer + state.result.backdrop_path"
      alt=""
    />
    <img
      v-else-if="!state.result.backdrop_path && state.result.poster_path"
      :src="state.url_flyer + state.result.poster_path"
      alt=""
      class="poster_path"
    />
    <div v-else class="no_img_path">
      <img :src="'https://picsum.photos/200/300'" alt="" />
      <div>Poster unavailable</div>
    </div>
  </div>
</template>

<style scoped>
.showoff_img {
  width: 345px;
  height: 193.683px;
  overflow: hidden;
  float: left;
  margin-right: 1rem;

  @media screen and (min-width: 830px) {
    width: 400px;
    height: 224.567px;
  }

  & img {
    display: block;
    width: 100%;
  }

  .no_img_path {
    position: relative;

    img {
      filter: brightness(12%);
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
