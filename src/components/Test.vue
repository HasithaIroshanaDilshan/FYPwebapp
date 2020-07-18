<template>
  <div>
    <div class="card mx-auto mt-3" style="width: 18rem; ">
      <article v-if="showLogin" class="card-body">
        <h4 class="card-title mb-4 mt-1">Sign in Test</h4>
        <hr />
        <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <input v-model="username" name class="form-control" placeholder="username" required />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              class="form-control"
              placeholder="******"
              type="password"
              v-on:keyup="onkeyUp"
              v-on:keydown="onkeyDown"
              @paste="onPaste"
              required
            />
          </div>
          <!-- form-group// -->

          <div v-if="showErr" class="alert alert-danger alert-dismissible fade show" role="alert">
            {{pwErrorMsg}}
            <button
              v-on:click="closeAlert"
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <button v-on:click="submit" type="submit" class="btn btn-primary btn-block">Login</button>
              </div>
              <!-- form-group// -->
            </div>
            <div class="col-md-6 text-right">
              <!--                            <a class="small" href="#">Forgot password?</a>-->
            </div>
          </div>
          <!-- .row// -->
        </form>
      </article>
      <!-- v-if="accepted" -->
      <article v-if="!showLogin && accepted" class="card-body">
        <h4 class="card-title mb-4 mt-1">Sign in Test</h4>
        <hr />
        <div class="alert alert-success fade show m-2" role="alert">
          <div class="text-center">
            <img src=".././assets/accept.webp" height="auto" width="50" />
            <h4 class="mx-auto">Genuine login</h4>
          </div>
        </div>
        <div class="m-2">
          <p class="detail">
            Model 1:
            <span v-bind:style="{ color: modelOneColor}" class="name">{{modelOneStatus}}</span>
          </p>
          <p>
            Model 2:
            <span v-bind:style="{ color: modelOneColor}">{{modelOneStatus}}</span>
          </p>
        </div>
        <div class="m-2">
          <button type="button" class="btn btn-primary mx-auto">Test Again</button>
        </div>
      </article>

      <article v-if="!showLogin && rejected" class="card-body">
        <h4 class="card-title mb-4 mt-1">Sign in Test</h4>
        <hr />
        <div class="alert alert-danger fade show m-2" role="alert">
          <div class="text-center">
            <img src=".././assets/reject.webp" height="auto" width="50" />
            <h4 class="mx-auto">Impostor</h4>
          </div>
        </div>
        <div class="m-2">
          <p class="detail">
            Model 1:
            <span v-bind:style="{ color: modelOneColor}" class="name">{{modelOneStatus}}</span>
          </p>
          <p>
            Model 2:
            <span v-bind:style="{ color: modelTwoColor}">{{modelTwoStatus}}</span>
          </p>
        </div>
        <div class="m-2">
          <button type="button" class="btn btn-primary mx-auto">Test Again</button>
        </div>
      </article>
    </div>
    <!-- card.// -->
  </div>
</template>



<script>
import axios from "axios";
import { urlHost } from "./variables.js";

export default {
  name: "Test",
  props: {
    title: String
  },
  data() {
    return {
      password: "",
      username: "",
      keys: false,
      severkey: false,
      privateKey: "",
      publicKey: "",
      key: [],
      serverKeySignature: [],
      auth: false,
      signatureVerified: false,
      userSignature: "",
      userSignatureHash: "",
      temp: [],
      serverPublicKey: "",
      keystorkeTimes: [],
      showErr: false,
      pwErrorMsg: "paste is not allowed",
      accepted: false,
      rejected: true,
      showLogin: false,
      modelOneColor: "green",
      modelOneStatus: "Genuine",
      modelTwoColor: "red",
      modelTwoStatus: "Impostor"
    };
  },

  created() {
    this.keystorkeTimes = [];
  },

  methods: {
    getDeviceType: function() {
      const ua = navigator.userAgent;
      console.log(ua);
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      }
      if (
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    },

    submit: function() {
      // `this` inside methods points to the Vue instance
      if (this.password == "" || this.username == "") {
        return;
      }
      // console.log("on submit")
      // alert('Hello ' + this.password + '!'),
      // let status = login(this.username, this.password);
      // console.log(status)
      // if(status == true){
      //     this.$router.push({ path: '/home' });
      // }
      console.log(this.password);

      let t = new Date().getTime();
      console.log(t);
      let t2 = t.toString();
      t2 = t2.substring(6);
      this.keystorkeTimes.push("return:" + t2);

      console.log(this.keystorkeTimes);
      let sha256 = require("sha-256-js");
      let enpassword = sha256(this.password);
      let device = this.getDeviceType();
      let ua = navigator.userAgent;
      let params = {
        username: this.username,
        password: enpassword,
        keystorkeTimes: this.keystorkeTimes,
        device: device,
        userAgent: ua
      };
      axios({ method: "POST", url: urlHost + "/login", data: params }).then(
        response => {
          console.log(JSON.stringify(response.data));
          if (JSON.stringify(response.data) == "false") {
            alert("error");
            return false;
          }
          //   localStorage.setItem("loggedIn", true);
          this.accepted = true;
          this.rejected = false;
          this.showLogin = false;
          //   this.$router.push({ path: "/home" });
        },
        error => {
          console.log(error), alert("error");
          return false;
        }
      );
    },

    eccVerified() {
      this.auth = false;
    },

    onSubmit() {
      // DO Something
    },

    onkeyUp: function() {
      console.log("onkeyUp");
      var key = event.keyCode || event.charCode;
      console.log(key);
      if (key == 8 || key == 46) {
        this.pwErrorMsg = "Don't use delete and backspace";
        this.showErr = true;
        this.clearKeyData();
      } else if (!(key == 16 || key == 20 || key == 17)) {
        let t = new Date().getTime();
        console.log(t);
        let t2 = t.toString();
        t2 = t2.substring(6);
        this.keystorkeTimes.push("keyup:" + t2);
      }
    },

    onkeyDown: function() {
      console.log("onkeyDown");
      var key = event.keyCode || event.charCode;
      console.log(key);
      if (key == 8 || key == 46) {
        this.pwErrorMsg = "Don't use delete and backspace";
        this.showErr = true;
        // this.clearKeyData();
      } else if (!(key == 16 || key == 20 || key == 17)) {
        let t = new Date().getTime();
        console.log(t);
        let t2 = t.toString();
        t2 = t2.substring(6);
        this.keystorkeTimes.push("keydown:" + t2);
      }

      // if( key == 8 || key == 46 )
      //     return false;
      // }
    },

    onPaste: function() {
      this.pwErrorMsg = "paste is not allowed";
      console.log("onpaste");
      //alert('paste is not allowed')
      console.log(event.clipboardData.getData("text"));
      this.showErr = true;
      this.clearKeyData();
    },

    clearKeyData: function() {
      console.log(this.keystorkeTimes);
      setTimeout(() => {
        this.keystorkeTimes = [];
        this.password = "";
        console.log(this.keystorkeTimes);
      }, 500);
    },

    closeAlert: function() {
      this.showErr = false;
    },

    closeSucces: function() {
      this.accepted = false;
    }
  }
};

// let password = '*******';
// let username = 'username';
</script>




<style scoped>
</style>

