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
  cast: [],
  showOff: false,
  loader: true,
  result: [],
  /* *** TENTATIVO CON DUE CALL: MOVIE && TV *** */
  /* movies: [],
  tv: [],
  loader1: true,
  loader2: true, */

  //Actions
  /* *** TENTATIVO CON DUE CALL: MOVIE && TV *** */
  /* getResults(url_movie, url_tv) {
    axios
      .get(url_movie)
      .then((response) => {
        this.movies = response.data.results;
        console.log(this.movies);
        this.loader1 = false;
        this.merge(this.movies, this.tv); //??funzione che dovrebbe attendere le due response??
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(url_tv)
      .then((response) => {
        this.tv = response.data.results;
        console.log(this.tv);
        this.loader2 = false;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  //function per mischiare objects di due arr
  merge(arr1, arr2) {
    this.searchRes = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== undefined) this.searchRes.push(arr1[i]);
      if (arr2[i] !== undefined) this.searchRes.push(arr2[i]);
    }
    //this.getShowOff(0, this.searchRes[0].id, this.searchRes[0].media_type);
    //console.log(this.searchRes);
  },
  searchGo() {
    const url_movie = `${this.url_api}/search/movie?api_key=${this.api_key}&query=${this.searchText}`;
    const url_tv = `${this.url_api}/search/tv?api_key=${this.api_key}&query=${this.searchText}`;
    this.getResults(url_movie, url_tv);
    this.searchText = "";
  }, */

  /* *********************************************************** */
  /* *** 1 CALL: /MULTI *** */
  getResults(url) {
    axios
      .get(url)
      .then((response) => {
        const arr = response.data.results;
        this.searchRes = arr.filter((result) => result.media_type != "person");
        this.loader = false;
        this.getShowOff(0, this.searchRes[0].id, this.searchRes[0].media_type);

        console.log(arr);
        console.log(this.searchRes);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  searchGo() {
    const url = `${this.url_api}/search/${this.media_type}?api_key=${this.api_key}&query=${this.searchText}`;
    this.getResults(url);
    this.searchText = "";

    console.log(url);
  },
  /* **************************************************************** */
  getShowOff(resultIndex, id, mediaType) {
    this.result = this.searchRes[resultIndex];
    this.getActors(id, mediaType);
    this.showOff = true;
    console.log(this.showOff);
  },

  getActors(id, mediaType) {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${this.api_key}`
      )
      .then((response) => {
        const arr = response.data.cast;
        this.cast = arr.filter((actor, index) => index < 5);
        //console.log(arr);
        //console.log(this.cast);
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
});
