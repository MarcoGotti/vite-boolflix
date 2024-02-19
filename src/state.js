import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive ({

    //state
    url_api:`https://api.themoviedb.org/3`,
    categories: 'movie',
    api_key:'61c198a32992a4189de16fcab7d00274',
    searchResults:[],
    searchText:'', 

    //Actions
    renderResults(url){
        axios
        .get(url)
        .then((response) => {
          this.searchResults = response.data.results;
          console.log(this.searchResults);
        })
        .catch(error => {
          console.error(error);
        })
      },
})