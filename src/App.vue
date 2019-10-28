<template>
  <div id="app">
      <NavBar/>

      <router-view></router-view>
      <link rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            crossorigin="anonymous">
<!--    <img alt="Vue logo" height="100" width="100" src="./assets/authentication-lock-icon.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->


<!--      <Login title="Biometric Based Remote User Authentication Scheme for Multi-Server Architecture" />-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from "@/components/Login";

// const routes = {
//     '/': Login,
//     '/HelloWorld': HelloWorld
// }

import NavBar from "@/components/NavBar";
export default {
  name: 'app',
  components: {
      NavBar
    // HelloWorld,
    // Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
