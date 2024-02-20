import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  //state
  url_api: `https://api.themoviedb.org/3`,
  media_type: "multi",
  api_key: "61c198a32992a4189de16fcab7d00274",
  searchResults: [],
  searchText: "",
  url_flag: "https://flagsapi.com/",

  //Actions
  renderResults(url) {
    axios
      .get(url)
      .then((response) => {
        this.searchResults = response.data.results;
        console.log(this.searchResults);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  renderFlag(languageFlag) {
    return languageFlag == "en"
      ? this.url_flag + "GB/flat/24.png"
      : languageFlag == "ja"
      ? this.url_flag + "JP/flat/24.png"
      : languageFlag == "zh"
      ? this.url_flag + "CN/flat/24.png"
      : this.url_flag + languageFlag.toUpperCase() + "/flat/24.png";
  },
});
