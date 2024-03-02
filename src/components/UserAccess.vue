<script>
export default {
  name: "UserAccess",
};
</script>

<template>
  <div class="user_access">
    <a href="#" class="register">Register</a>
    <a href="#" class="logIn">Log-in</a>
  </div>
</template>

<style scoped>
.user_access {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;

  @media screen and (min-width: 1176px) {
    flex-direction: row;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  .register {
    color: var(--bool-focus);
  }
  .logIn {
    background-color: var(--bool-white);
    color: var(--bool-black);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
}
</style>
