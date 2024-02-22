<script>
export default {
  name: "UserAccess",
};
</script>

<template>
  <div class="user_access">
    <span class="separator">|</span>
    <a href="#" class="register">Register</a>
    <a href="#" class="logIn">Log-in</a>
  </div>
</template>

<style scoped>
.user_access {
  display: inline-block;
  margin-left: 2rem;

  a {
    text-decoration: none;
  }

  .separator {
    font-size: 2rem;
  }

  .register {
    color: var(--bool-focus);
    margin: 0 1rem;
  }
  .logIn {
    background-color: var(--bool-white);
    color: var(--bool-black);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
}
</style>
