<template>
  <div id="app">
    <b-navbar>
      <template #brand>
        <b-navbar-item href="/">
          <img class="image-logo" src="./assets/logo.png" alt="logo" style="height: auto; width: 120px; max-height: none">
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-dropdown label="Inverters">
          <b-navbar-item href="/goodwe">
            GoodWe
          </b-navbar-item>
          <b-navbar-item href="/deye">
            Deye
          </b-navbar-item>
          <b-navbar-item href="#">
            SMA
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Panels">
          <b-navbar-item href="#">
            JA Solar
          </b-navbar-item>
          <b-navbar-item href="#">
            Longi
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Networking">
          <b-navbar-item href="#">
            Corning
          </b-navbar-item>
          <b-navbar-item href="#">
            Cisco
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="#">
            Mobile Phones
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>