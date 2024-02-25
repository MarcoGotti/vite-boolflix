<script>
import { state } from "../state.js/";
import FlyerInfo from "./FlyerInfo.vue";
export default {
  name: "ShowOffCard",
  components: { FlyerInfo },
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
            <div class="showoff_img">
              <img
                class="backdrop_path"
                v-if="state.result.backdrop_path"
                :src="state.url_flyer + state.result.backdrop_path"
                alt=""
              />
              <img
                v-else-if="
                  !state.result.backdrop_path && state.result.poster_path
                "
                :src="state.url_flyer + state.result.poster_path"
                alt=""
                class="poster_path"
              />
              <div v-else class="no_img_path">
                <img :src="'https://picsum.photos/200/300'" alt="" />
                <div>Poster unavailable</div>
              </div>
            </div>

            <div class="showoff_info">
              <h5>
                {{ state.renderInfo(state.result.title, state.result.name) }}
              </h5>
              <div class="sideInfo">
                <div class="release_year">
                  <div
                    v-if="
                      state.result.release_date &&
                      state.result.release_date !== ''
                    "
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
  @media screen and (min-width: 468px) {
    display: block;
  }
}

.big_card {
  border-radius: 5px;
  background-color: var(--bool-secondary);
  padding: 1rem;
  min-height: calc(224.567px + 2rem);

  .showoff_img {
    width: 400px;
    float: left;
    margin-right: 1rem;

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

  .showoff_info {
    h5 {
      font-size: 1.25rem;
      color: var(--bool-focus);
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 1rem;
    }

    .sideInfo {
      display: flex;
      justify-content: center;
      gap: 1rem;
      color: var(--bool-light);
      font-size: 14px;
      margin-bottom: 1rem;
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
      margin-bottom: 1rem;

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
}
</style>
