<template>
    <div>

        <div class="card mx-auto mt-3" style="width: 18rem; ">

            <article class="card-body">
                <a href = "signUp" class="float-right btn btn-outline-primary" >Sign up</a>

<!--                <li class="nav-item">  <router-link class="nav-link" to="/blog">Blog</router-link></li>-->
                <h4 class="card-title mb-4 mt-1">Sign in</h4>
                <p>
<!--                    <font-awesome-icon icon="coffee" />-->
                    <a href="biometric" class="btn btn-block btn-outline-info"> <i class="fas fa-fingerprint"></i> Biometrics</a>
                </p>
                <hr>
                <form v-on:submit.prevent="onSubmit">
                    <div class="form-group">
                        <input v-model="username" name="" class="form-control" placeholder="username" required >
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <input v-model="password" class="form-control" placeholder="******" type="password" required>
                    </div> <!-- form-group// -->
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <button v-on:click="submit" type="submit" class="btn btn-primary btn-block"> Login  </button>
                            </div> <!-- form-group// -->
                        </div>
                        <div class="col-md-6 text-right">
<!--                            <a class="small" href="#">Forgot password?</a>-->
                        </div>
                    </div> <!-- .row// -->
                </form>
            </article>
        </div> <!-- card.// -->
        <div v-if="auth">
            <pre v-if="keys" class="text-left mt-3 mx-3" style="word-wrap: break-word;">public key: {{key.PublicKey}} <br>private key: {{key.PrivateKey}}
            </pre>
            <p>Received from server</p>
            <pre v-if="severkey" class="text-left mt-2 mx-3" style="word-wrap: break-word;">Server public key: {{serverKeySignature.PublicKey}} <br>signature: {{serverKeySignature.signature}}<br>Hash: {{serverKeySignature.Hash}}
            </pre>
            <p v-if="signatureVerified">Signature verified</p>
        </div>
    </div>

   </template>

<script>
// import HelloWorld from "@/components/HelloWorld";
// import * as router from "vue-router";
    // import HelloWorld from '/HelloWorld.vue'
// import Vue from 'vue'import Router from 'vue-router';


import axios from "axios";
// import VueRouter from "vue-router";



// function login(username, password){
//     let params = {
//         username: username,
//         password: password
//     }
//     axios({method: "POST", "url": "http://localhost:8081/login", data: params})
//         .then(response =>{
//             console.log(JSON.stringify(response.data))
//             return true
//             },(error) => {
//                 console.log(error),
//                     alert("user does not exists")
//                     return false
//             }
//         )
//}

export default {
        name: "Login",
        props:{
            title: String
        },
        data() {
            return {
                password : '',
                username : '',
                keys:false,
                severkey:false,
                privateKey: '',
                publicKey: '',
                key: [],
                serverKeySignature: [],
                auth: true,
                signatureVerified: false,
            }
        },



        async created() {
            let params = {}
            axios({method: "POST", "url": "http://localhost:8081/getuserkey", data: params})
                .then(response =>{
                        this.keys = true;
                        console.log(JSON.stringify(response.data))
                    this.key = response.data
                }),
                axios({method: "POST", "url": "http://localhost:8081/serverKeySignature", data: params})
                    .then(response =>{
                        this.severkey = true;
                        console.log(JSON.stringify(response.data))
                        this.serverKeySignature = response.data
                        if(this.serverKeySignature.Hash == this.serverKeySignature.Hash){
                            this.signatureVerified = true
                        }
                    })
        },

        methods: {
           submit() {
                // `this` inside methods points to the Vue instance
               if(this.password == '' || this.username == ''){
                   return
               }
               // console.log("on submit")
               // alert('Hello ' + this.password + '!'),
               // let status = login(this.username, this.password);
               // console.log(status)
               // if(status == true){
               //     this.$router.push({ path: '/home' });
               // }
               let params = {
                   username: this.username,
                   password: this.password
               }
               axios({method: "POST", "url": "http://localhost:8081/login", data: params})
                   .then(response =>{
                           console.log(JSON.stringify(response.data))
                       if(JSON.stringify(response.data) == "false"){
                           alert("user does not exists")
                           return false
                       }

                       this.$router.push({ path: '/home' });

                       },(error) => {
                           console.log(error),
                           alert("user does not exists")
                           return false
                       }
                   )

           },

            onSubmit () {
                // DO Something
            },

            signUp: function () {
                // alert("signup")
                // window.location.href = '/signUp';
                // router.push({ name: 'signUp', params: { "userId" } })
            }
        }
    }


// let password = '*******';
    // let username = 'username';



</script>

new Vue({
    data() {
    vueProp: 'vue variable' // visible to template
    }
});



<style scoped>

</style>

