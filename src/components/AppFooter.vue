<script>
import Logo from "./Logo.vue";
export default {
  name: "AppFooter",
  components: {
    Logo,
  },
};
</script>

<template>
  <footer><Logo></Logo></footer>
</template>

<style scoped>
footer {
  background-color: var(--bool-primary);
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
}
</style>
