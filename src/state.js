import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  //state
  url_api: `https://api.themoviedb.org/3`,
  media_type: "multi",
  api_key: "61c198a32992a4189de16fcab7d00274",
  searchRes: [],
  starsNum: [],
  searchText: "",
  url_flag: "https://flagsapi.com/",

  //Actions
  renderResults(url) {
    axios
      .get(url)
      .then((response) => {
        const arr = response.data.results;

        this.searchRes = arr.filter((result) => result.media_type != "person"); //
        console.log(arr);
        console.log(this.searchRes);
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
      ? this.url_flag + "GB/flat/24.png"
      : languageFlag == "ja"
      ? this.url_flag + "JP/flat/24.png"
      : languageFlag == "zh"
      ? this.url_flag + "CN/flat/24.png"
      : this.url_flag + languageFlag.toUpperCase() + "/flat/24.png";
  },

  /* renderFeed(num){
    this.starsNum = Math.round(num)
  } */
});
