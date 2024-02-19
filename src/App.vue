<script>
import {state} from '../src/state.js'

export default {
  name:'App',
  data(){
    return{
      state,    
    }
  },
  methods:{
    
    searchGo(){
      const url = `${state.url_api}/search/${state.categories}?api_key=${state.api_key}&query=${this.searchText}`
      console.log(url);
      state.renderResults(url)
    }
  },
  computed:{
    
  },  
  created(){
    
  },
}
</script>

<template>

  
<input type="text" v-model="state.searchText">
<button @click="searchGo">Search</button>

<ul v-for="result in state.searchResults">
  <li>{{ result.title }}</li>
  <li>{{ result.original_title }}</li>
  <li>{{ result.original_language }}</li>
  <li>{{ result.vote_average }}</li>
</ul>


</template>

<style scoped>

</style>
