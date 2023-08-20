<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/profile">profile</router-link>
    <router-link to="/ticket">ticket</router-link>
  </nav>
</template>

<script>

  export default {
  name: 'SiteHeader',
};
</script>

<style>
nav {
  background-color: #000000;
  padding: 0 40px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav a{
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  padding: 30px;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  nav a {
    font-size: 15px;
  }
}
</style>