<template>
    <div>

        <div v-if="!auth" class="card mx-auto mt-3" style="width: 18rem; ">

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
            <p  v-if="keys" class="mt-2">User keys</p>
            <pre v-if="keys" class="text-left mt-2 mx-3" style="word-wrap: break-word;">public key: {{publicKey}} <br>private key: {{privateKey}}
            </pre>
            <p v-if="severkey" class="mt-2">Received from server</p>
            <pre v-if="severkey" class="text-left mt-2 mx-3" style="word-wrap: break-word;">Server public key: {{serverPublicKey}}
            </pre>
            <p v-if="severkey" class="mt-2">Signature send to server</p>
            <pre v-if="severkey" class="text-left mt-2 mx-3" style="word-wrap: break-word;">ECDSA signature: {{userSignatureHash}}
            </pre>

            <button v-if="severkey" v-on:click="eccVerified" type="submit" > OK  </button>
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

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
console.log(joinArray)
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}



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
                userSignature: '',
                userSignatureHash: '',
                temp: [],
                serverPublicKey: '',
            }
        },



        async created() {

            let params = {}
            axios({method: "POST", "url": "http://localhost:8081/getuserkey", data: params})
                .then(response =>{

                    console.log(JSON.stringify(response.data))
                    this.key = response.data
                    // this.publicKey =
                    // this.privateKey =
                    this.publicKey = reverseString(this.key.PublicKey)
                    this.privateKey = reverseString(this.key.PrivateKey)
                    this.keys = true;
                    let params1 = {"publicKey": this.publicKey}
                    axios({method: "POST", "url": "http://localhost:8081/setuserpublickey", data: params1})
                        .then(response =>{
                            console.log(JSON.stringify(response.data))
                            this.temp = response.data



                            axios({method: "POST", "url": "http://localhost:8081/getserverpublickey", data: params})
                                .then(response =>{
                                    console.log(JSON.stringify(response.data))
                                    this.temp = response.data
                                    this.serverPublicKey = this.temp.PublicKey


                                    let sha256 = require('sha-256-js');
                                    this.userSignature = sha256("I am the user username = user user id =id");
                                    // console.log("this.userSignature= " +this.userSignature)
                                    let params2 = {"msg":  this.userSignature}
                                    axios({method: "POST", "url": "http://localhost:8081/doencrypt", data: params2})
                                        .then(response =>{
                                            this.severkey = true;
                                            console.log(JSON.stringify(response.data))
                                            this.temp = response.data
                                            this.userSignatureHash = this.temp.encripted

                                            // let params3 = {}
                                            // axios({method: "POST", "url": "http://localhost:8081/serverKeySignature", data: params3})
                                            //     .then(response =>{
                                            //         this.severkey = true;
                                            //         console.log(JSON.stringify(response.data))
                                            //         this.serverKeySignature = response.data
                                            //         if(this.serverKeySignature.Hash == this.serverKeySignature.Hash){
                                            //             this.signatureVerified = true
                                            //         }


                                                    let params4 = {"publicKey": this.publicKey,
                                                        "signature": this.userSignature,
                                                        "hash": this.userSignatureHash
                                                    }
                                                    axios({method: "POST", "url": "http://localhost:8081/usersignatureverify", data: params4})
                                                        .then(response =>{
                                                            this.severkey = true;
                                                            console.log(JSON.stringify(response.data))
                                                            this.temp = response.data
                                                            if(this.temp.Status =="Signature verified"){

                                                            }

                                                        })




                                                // })




                                        })



                                })




                        })






            })















        },

        methods: {
            submit: function () {
                // `this` inside methods points to the Vue instance
                if (this.password == '' || this.username == '') {
                    return
                }
                // console.log("on submit")
                // alert('Hello ' + this.password + '!'),
                // let status = login(this.username, this.password);
                // console.log(status)
                // if(status == true){
                //     this.$router.push({ path: '/home' });
                // }

                let sha256 = require('sha-256-js');
                let enpassword = sha256(this.password);
                let params = {
                    username: this.username,
                    password: enpassword
                }
                axios({method: "POST", "url": "http://localhost:8081/login", data: params})
                    .then(response => {
                            console.log(JSON.stringify(response.data))
                            if (JSON.stringify(response.data) == "false") {
                                alert("user does not exists")
                                return false
                            }

                            this.$router.push({path: '/home'});

                        }, (error) => {
                            console.log(error),
                                alert("user does not exists")
                            return false
                        }
                    )


            },

            eccVerified(){
                this.auth = false
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

