import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  //state
  api_key: "61c198a32992a4189de16fcab7d00274",
  url_api: `https://api.themoviedb.org/3`,
  url_flag: "https://flagsapi.com/",
  url_flyer: "https://image.tmdb.org/t/p/w342",
  loader1: true,
  loader2: true,
  searchText: "",
  searchRes: [],
  filteredRes: [],
  cast: [],
  media_type: "",
  genre: "",
  showOff: false,
  result: [],
  movies: [],
  tv: [],

  //Actions
  fetchData(url_movie, url_tv) {
    axios.get(url_movie).then((response) => {
      this.movies = response.data.results;
      this.movies.forEach((item) => (item.media_type = "movie"));
      this.loader1 = false;

      this.merge(this.movies, this.tv); //function ripetuta due volte. Non pulito ma efficace
    });

    axios.get(url_tv).then((response) => {
      this.tv = response.data.results;
      this.tv.forEach((item) => (item.media_type = "tv"));
      this.loader2 = false;

      this.merge(this.tv, this.movies); //function ripetuta due volte. Non pulito ma efficace
    });
  },
  /**
   * Merge and mix (one object - one object) two arrays
   * @param {Array} arr1 One of arrays result of calls
   * @param {Array} arr2 The other array
   */
  merge(arr1, arr2) {
    this.searchRes = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== undefined) this.searchRes.push(arr1[i]);
      if (arr2[i] !== undefined) this.searchRes.push(arr2[i]);
    }
    this.applyFilters();
    //this.getShowOff(0, this.filteredRes[0].id, this.filteredRes[0].media_type);
    console.log(this.searchRes);
  },

  filterByMedia(arr, type) {
    if (!type) return arr;
    return arr.filter((item) => item.media_type == type);
  },

  filterByGenre(arr, genre) {
    if (!genre) return arr;
    return arr.filter((item) => item.genre_ids.includes(genre));
  },

  applyFilters() {
    this.filteredRes = [];
    this.filteredRes = this.filterByMedia(this.searchRes, this.media_type);
    this.filteredRes = this.filterByGenre(this.filteredRes, this.genre);
    this.showOff = false;

    console.log(this.filteredRes);
  },
  /**
   * Isolates the clicked object and allows showoff section to appear
   * @param {Number} resultIndex Object position
   * @param {Number} id Object key
   * @param {String} mediaType Object key
   */
  getShowOff(resultIndex, id, mediaType) {
    this.result = this.filteredRes[resultIndex];
    this.getActors(id, mediaType);
    this.showOff = true;
  },

  getActors(id, mediaType) {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${this.api_key}`
      )
      .then((response) => {
        const arr = response.data.cast;
        this.cast = arr.filter((actor, index) => index < 5);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  searchInitiate() {
    const url_movie = `${this.url_api}/search/movie?api_key=${this.api_key}&query=${this.searchText}`;
    const url_tv = `${this.url_api}/search/tv?api_key=${this.api_key}&query=${this.searchText}`;
    this.fetchData(url_movie, url_tv);
    this.searchText = "";
    //
  },
  /**
   * Regulates the rendering in case of equality
   * @param {String} key_1 object key .original_title
   * @param {String} key_2 object key .original_name
   * @param {String} key_3 object key .title
   * @param {String} key_4 object key .name
   * @returns
   */
  renderInfo(key_1, key_2, key_3, key_4) {
    return key_1 && key_1 != key_3
      ? key_1
      : key_2 && key_2 != key_4
      ? key_2
      : "";
  },
  /**
   * Compensate necessary inequality between Country-Language abbreviation
   * @param {String} languageFlag object key
   * @returns a piece of URL (a String)
   */
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
