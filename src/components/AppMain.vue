<script>
import { state } from "../state.js";
import FlyersList from "./FlyersList.vue";
import Loader from "./Loader.vue";
import CaseLimit from "./CaseLimit.vue";
export default {
  name: "AppMain",
  components: {
    FlyersList,
    Loader,
    CaseLimit,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <main>
    <Loader v-if="state.loader"></Loader>
    <CaseLimit v-if="!state.loader && state.searchRes.length == 0"></CaseLimit>
    <FlyersList v-else></FlyersList>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - 245px);
}
</style>
