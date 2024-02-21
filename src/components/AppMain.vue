<script>
import { state } from "../state.js";
export default {
  name: "AppMain",
  data() {
    return {
      state,
      url_flyer: "https://image.tmdb.org/t/p/w342",
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          v-for="result in state.searchRes"
        >
          <div class="card">
            <div class="cardPoster">
              <img :src="url_flyer + result.poster_path" alt="" />
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
                <!-- <i style="color: yellow" class="fa-solid fa-star"></i> 
                CDN di fontawesome rincitrullito!!!!-->

                <!-- v-for="n in Math.round(vote)" -->

                {{
                  state.renderInfo(
                    Math.round(result.vote_average),
                    "🟢No Feedbacks"
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.card {
  border: 1px solid rgb(182, 0, 0);
  border-radius: 5px;
  height: 100%;
  .cardPoster {
    padding: 3px;
    img {
      width: 100%;
      border-radius: 3px;
    }
  }
  .cardInfos {
    padding: 0.25rem;
  }
}
</style>
