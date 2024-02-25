<script>
import { state } from "../state.js/";
export default {
  name: "FlyerInfo",
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
  <div class="cardInfos">
    <h5>{{ state.renderInfo(result.title, result.name) }}</h5>
    <div class="release_year">
      <div v-if="result.release_date && result.release_date !== ''">
        {{ result.release_date.split("-")[0] }}
      </div>
      <div v-else>Unknown year</div>
    </div>
    <div class="flag">
      <div>Original</div>
      <img
        :src="
          result.original_language
            ? state.renderFlag(result.original_language)
            : ''
        "
        :alt="result.original_language"
      />
    </div>
    <div
      class="original_title"
      v-if="
        result.original_title !== result.title ||
        result.original_name !== result.name
      "
    >
      <p>
        <strong>Original Title:&nbsp</strong>
        {{
          state.renderInfo(
            result.original_title,
            result.original_name,
            result.title,
            result.name
          )
        }}
      </p>
    </div>
    <div class="overview">
      <p><strong>Overview:&nbsp</strong>{{ result.overview }}</p>
    </div>
    <div class="feedback">
      <strong>Feedback:&nbsp</strong>
      <i
        v-if="result.vote_average"
        v-for="n in Math.round(result.vote_average)"
        class="fa-solid fa-star"
      ></i>
      <span v-else>🟡None</span>

      <!-- {{ 
                    state.renderInfo(Math.round(result.vote_average),"❌No Feeds")
                }} -->
    </div>
  </div>
</template>

<style scoped>
.cardInfos {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--bool-black);
  padding: 0.5rem;
  width: 100%;
  font-size: 12px;
  filter: opacity(0);
  max-height: 100%;
  transition: filter 400ms ease-in-out;

  .release_year {
    display: inline;
    margin-right: 1rem;
    font-size: 10px;
    color: var(--bool-light);

    div {
      display: inline;
    }
  }

  .flag {
    display: inline;
    font-size: 10px;

    div {
      display: inline;
      color: var(--bool-light);
      margin-right: 0.25rem;
    }

    img {
      display: inline;
      vertical-align: bottom;
      color: var(--bool-focus);
    }
  }

  h5 {
    font-size: 1rem;
    color: var(--bool-light);
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .overview {
    max-height: 103px;
    overflow: hidden;
  }

  & strong {
    color: var(--bool-white);
  }

  & p {
    font-weight: 100;
    color: var(--bool-light);
  }

  & span {
    color: var(--bool-light);
  }

  & i {
    color: rgb(207, 207, 0);
  }
}
</style>
