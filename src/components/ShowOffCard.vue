<script>
export default {
  name: "ShowOffCard",
};
</script>

<template>
  <section class="show_off">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="big_card"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.show_off {
  background-color: var(--bool-primary);
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
}

.big_card {
  height: 300px;
  border-radius: 5px;
  background-color: var(--bool-secondary);
  padding: 1rem;
  /* background-image: url("https://image.tmdb.org/t/p/w342https://image.tmdb.org/t/p/w342/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg");
  background-repeat: no-repeat;
  background-size: auto; */
}
</style>
