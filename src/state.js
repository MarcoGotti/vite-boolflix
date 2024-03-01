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
  genres: [],
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

  getGenres() {
    let genresId = [];
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=61c198a32992a4189de16fcab7d00274"
      )
      .then((response) => {
        const arr = response.data.genres;
        arr.forEach((genre) => {
          if (!genresId.includes(genre.id)) {
            genresId.push(genre.id);
            this.genres.push(genre);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=61c198a32992a4189de16fcab7d00274"
      )
      .then((response) => {
        const arr = response.data.genres;
        arr.forEach((genre) => {
          if (!genresId.includes(genre.id)) {
            genresId.push(genre.id);
            this.genres.push(genre);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
    //this.getShowOff(0, this.filteredRes[0].id, this.filteredRes[0].media_type);

    console.log(this.filteredRes);
  },

  getShowOff(resultIndex, id, mediaType) {
    this.result = this.filteredRes[resultIndex];
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
      })
      .catch((error) => {
        console.error(error);
      });
  },

  getResults(url_movie, url_tv) {
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

  merge(arr1, arr2) {
    this.searchRes = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== undefined) this.searchRes.push(arr1[i]);
      if (arr2[i] !== undefined) this.searchRes.push(arr2[i]);
    }
    this.applyFilters();
    this.getShowOff(0, this.filteredRes[0].id, this.filteredRes[0].media_type);
    console.log(this.searchRes);
  },

  searchGo() {
    const url_movie = `${this.url_api}/search/movie?api_key=${this.api_key}&query=${this.searchText}`;
    const url_tv = `${this.url_api}/search/tv?api_key=${this.api_key}&query=${this.searchText}`;
    this.getResults(url_movie, url_tv);
    this.searchText = "";
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
