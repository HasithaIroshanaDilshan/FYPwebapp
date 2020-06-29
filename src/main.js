import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from "vue-router";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import BiometricAuth from "@/components/BiometricAuth";
import Home from "@/components/Home";
import NavBar from '@/components/NavBar.vue';
import Intro from '@/components/Intro';
import TrainData from '@/components/TrainData';

Vue.component('NavBar', NavBar);

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login},
  { path: '/signUp', component: SignUp},
  { path: '/biometric', component: BiometricAuth},
  { path: '/home', component: Home},
  { path: '/Intro', component: Intro},
  { path: '/TrainData', component: TrainData}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')

