<template>
<body :style="cssProps">
  <!-- :style="{ backgroundImage: 'url(' + require('@/components/background.png') + ')' }" -->

  <div id="div1">
	<NavBar />
	<div id="app">
		<transition name="slide-fade">
		<router-view></router-view>
		</transition>
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
			integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
			crossorigin="anonymous"
		/>
	</div>
  </div>
  <!-- <img class="backgroundImg" src="http://placekitten.com/1500/1000"> -->
</body>
</template>






<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from "@/components/Login";

// const routes = {
//     '/': Login,
//     '/HelloWorld': HelloWorld
// }
// import VueRouter from 'vue-router'
import NavBar from "@/components/NavBar";
// import Home from "@/components/Home";
// import firstPage from "@/components/firstPage";
export default {
  name: "app",
  components: {
	NavBar
	// firstPage

	// HelloWorld,
	// Login
  },
  data() {
	return {
		showAbstract: true,
		cssProps: {
			backgroundImage: `url(${require("@/assets/background.png")})`
		}
	};
  },

  created() {
	// console.log(window.location.pathname)
	if (localStorage.getItem("loggedIn") == "true") {
		this.showAbstract = false;
		if(window.location.pathname == "/") {
			this.$router.push("/Home");
		}
	} else {
		this.$router.push("/Intro");
	}
  }
};
</script>



<style>
@import "./transitions.css";
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	padding-left: 5px;
	margin-left: 10px;
	padding-right: 5px;
	margin-right: 10px;
}

body,
html {
	width: 100%;
	min-height: 100vh;
}
</style>
