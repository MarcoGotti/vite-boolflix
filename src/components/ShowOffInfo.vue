<script>
import { state } from "../state.js/";
export default {
  name: "ShowOffInfo",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div class="showoff_info">
    <h5>
      {{ state.renderInfo(state.result.title, state.result.name) }}
    </h5>
    <div class="sideInfo">
      <div class="release_year">
        <div
          v-if="state.result.release_date && state.result.release_date !== ''"
        >
          Year
          {{ state.result.release_date.split("-")[0] }}
        </div>
        <div v-else>Unknown year</div>
      </div>
      <div class="flag">
        <div>Original language</div>
        <img
          :src="
            state.result.original_language
              ? state.renderFlag(state.result.original_language)
              : ''
          "
          :alt="state.result.original_language"
        />
      </div>
    </div>
    <div class="cast">
      <strong>Cast:&nbsp;</strong>
      <span v-for="actor in state.cast">{{ actor.name }},&nbsp;</span>
    </div>

    <div class="overview">
      <strong>Overview:&nbsp;</strong>
      <span>
        {{ state.result.overview }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.showoff_info {
  h5 {
    font-size: 1.25rem;
    color: var(--bool-focus);
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }

  .sideInfo {
    display: none;
    color: var(--bool-light);
    font-size: 14px;
    margin-bottom: 1rem;

    @media screen and (min-width: 828px) {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .flag {
      div {
        display: inline;
        margin-right: 0.5rem;
      }
      img {
        vertical-align: middle;
      }
    }
  }

  .cast {
    strong {
      color: var(--bool-dark);
    }
    span {
      color: var(--bool-light);
    }
  }
  .overview {
    strong {
      color: var(--bool-dark);
    }
    span {
      color: var(--bool-light);
    }
  }
}
</style>
