<script>
import { state } from "../state.js/";
export default {
  name: "Xclose",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <div class="x_close" @click="state.showOff = false">
    <i class="fa-solid fa-xmark"></i>
  </div>
</template>

<style scoped>
.x_close {
  position: absolute;
  top: 0;
  right: 5px;

  :hover {
    cursor: pointer;
  }
}
</style>
