import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  //state
  api_key: "61c198a32992a4189de16fcab7d00274",
  url_api: `https://api.themoviedb.org/3`,
  url_flag: "https://flagsapi.com/",
  url_flyer: "https://image.tmdb.org/t/p/w342",
  media_type: "multi",
  searchRes: [],
  searchText: "",
  loader: true,
  cast: [],
  result: [],

  //Actions
  renderResults(url) {
    axios
      .get(url)
      .then((response) => {
        const arr = response.data.results;
        this.searchRes = arr.filter((result) => result.media_type != "person"); //
        this.loader = false;

        console.log(arr);
        console.log(this.searchRes);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  pickMovie(resultIndex, id, media) {
    this.result = this.searchRes[resultIndex];
    console.log(this.result);
    this.getActors(id, media);
  },

  getActors(id, media) {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${this.api_key}`
      )
      .then((response) => {
        const arr = response.data.cast;
        this.cast = arr.filter((actor, index) => index < 5);

        console.log(arr);
        console.log(this.cast);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  renderInfo(key_1, key_2, key_3, key_4) {
    return key_1 && key_1 != key_3
      ? key_1
      : key_2 && key_2 != key_4
      ? key_2
      : "";
  },

  renderFlag(languageFlag) {
    return languageFlag == "en"
      ? this.url_flag + "GB/flat/16.png"
      : languageFlag == "ja"
      ? this.url_flag + "JP/flat/16.png"
      : languageFlag == "zh"
      ? this.url_flag + "CN/flat/16.png"
      : languageFlag == "ko"
      ? this.url_flag + "KP/flat/16.png"
      : this.url_flag + languageFlag.toUpperCase() + "/flat/16.png";
  },

  searchGo() {
    const url = `${this.url_api}/search/${this.media_type}?api_key=${this.api_key}&query=${this.searchText}`;
    console.log(url);
    this.renderResults(url);
    this.searchText = "";
  },
});
