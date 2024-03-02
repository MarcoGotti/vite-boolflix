<script>
export default {
  name: "Loader",
};
</script>

<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  margin: 5rem auto;
  border: 8px solid var(--bool-dark);
  border-radius: 50%;
  border-top: 8px solid var(--bool-focus);
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
