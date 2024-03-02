<script>
export default {
  name: "Logo",
};
</script>

<template>
  <div class="logo">
    <h1>boolflix</h1>
  </div>
</template>

<style scoped>
.logo {
  h1 {
    font-size: 24px;
    color: var(--bool-focus);
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }
}
</style>
