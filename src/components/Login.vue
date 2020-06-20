<template>
    <div>

        <div v-if="!auth" class="card mx-auto mt-3" style="width: 18rem; ">

            <article class="card-body">
                <a href = "signUp" class="float-right btn btn-outline-primary" >Sign up</a>

                <!-- <li class="nav-item">  <router-link class="nav-link" to="/blog">Blog</router-link></li>-->
                <h4 class="card-title mb-4 mt-1">Sign in</h4>
                <!-- <p>
                   <font-awesome-icon icon="coffee" />
                    <a href="biometric" class="btn btn-block btn-outline-info"> <i class="fas fa-fingerprint"></i> Biometrics</a>
                </p> -->
                <hr>
                <form v-on:submit.prevent="onSubmit">
                    <div class="form-group">
                        <input v-model="username" name="" class="form-control" placeholder="username" required >
                    </div> <!-- form-group// -->
                    <div class="form-group">
                        <input v-model="password" class="form-control" placeholder="******" type="password" v-on:keyup="onkeyUp" v-on:keydown="onkeyDown" required>
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
            <pre v-if="keys" class="text-left mt-2 mx-3" style="word-wrap: break-word;">public key: MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9nEOw+PPv9C5ORmG8xyL2ko7KPvt
WC6x1e9gNuIwjI7pvBEs8ijQwYV9tG9CeMSoc8bZfdlMla3imUW5NE/x+w== <br>private key: MHcCAQEEIMDZ0T677nTx8P/fKI1fntIchzFhQSYeu2jQh5cKilPsoAoGCCqGSM49
AwEHoUQDQgAE9nEOw+PPv9C5ORmG8xyL2ko7KPvtWC6x1e9gNuIwjI7pvBEs8ijQ
wYV9tG9CeMSoc8bZfdlMla3imUW5NE/x+w==
            </pre>
            <p v-if="severkey" class="mt-2">Received from server</p>
            <pre v-if="severkey" class="text-left mt-2 mx-3" style="word-wrap: break-word;">Server public key: MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1xhNa5MJRF1ti2hi+Xfvuclb2j2M
212MiAh3MCLgS9X1gl+mDrGLuMhE1wDSsjgBKdNriYN3Ky+m+HZgACr/0w==
            </pre>
            <p v-if="severkey" class="mt-2">Signature send to server</p>
            <pre v-if="severkey" class="text-left mt-2 mx-3" style="word-wrap: break-word;">ECDSA signature: MEYCIQC+HeQwxVIdqNs0v08k6T3gqRFjcu+5QKVTYUWSX7qkhgIhAMXpDtCoRqauyzxZt
                V2mZioPUEnW5Qg0lq60dZlqEH59
            </pre>

            <button  v-on:click="eccVerified" type="submit" > OK  </button>
<!--            v-if="severkey"-->
        </div>
    </div>

</template>

<script>
    // import HelloWorld from "@/components/HelloWorld";
    // import * as router from "vue-router";
    // import HelloWorld from '/HelloWorld.vue'
    // import Vue from 'vue'import Router from 'vue-router';


    import axios from "axios";
    import { myVar, urlHost } from './variables.js'
    // import VueRouter from "vue-router";



    // function login(username, password){
    //     let params = {
    //         username: username,
    //         password: password
    //     }
    //     axios({method: "POST", "url": "http://"+urlHost+":8081/login", data: params})
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
        // console.log(joinArray)
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
                auth: false,
                signatureVerified: false,
                userSignature: '',
                userSignatureHash: '',
                temp: [],
                serverPublicKey: '',
                keystorkeTimes: []
            }
        },


       created() {

            console.log('Component has been created!');
            console.log(myVar)
            console.log(urlHost)
            

            this.keystorkeTimes = [];
            let params = {}
            axios({method: "POST", "url": "http://"+urlHost+":8081/getuserkey", data: params})
                .then(response =>{

                    // console.log(JSON.stringify(response.data))
                    this.key = response.data
                    // this.publicKey =
                    // this.privateKey =
                    this.publicKey = reverseString(this.key.PublicKey)
                    this.privateKey = reverseString(this.key.PrivateKey)
                    this.keys = true;
                    let params1 = {"publicKey": this.publicKey}
                    axios({method: "POST", "url": "http://"+urlHost+":8081/setuserpublickey", data: params1})
                        .then(response =>{
                            // console.log(JSON.stringify(response.data))
                            this.temp = response.data



                            axios({method: "POST", "url": "http://"+urlHost+":8081/getserverpublickey", data: params})
                                .then(response =>{
                                    // console.log(JSON.stringify(response.data))
                                    this.temp = response.data
                                    this.serverPublicKey = this.temp.PublicKey
                                    let sha256 = require('sha-256-js');
                                    this.userSignature = sha256("I am the user username = user user id =id");
                                    // console.log("this.userSignature= " +this.userSignature)
                                    let params2 = {"msg":  this.userSignature}
                                    axios({method: "POST", "url": "http://"+urlHost+":8081/doencrypt", data: params2})
                                        .then(response =>{
                                            this.severkey = true;
                                            //console.log(JSON.stringify(response.data))
                                            this.temp = response.data
                                            this.userSignatureHash = this.temp.encripted

                                            // let params3 = {}
                                            // axios({method: "POST", "url": "http://"+urlHost+":8081/serverKeySignature", data: params3})
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
                                                    axios({method: "POST", "url": "http://"+urlHost+":8081/usersignatureverify", data: params4})
                                                        .then(response =>{
                                                            this.severkey = true;
                                                            //console.log(JSON.stringify(response.data))
                                                            this.temp = response.data


                                                        })
                                                // })
                                        })
                                })
                        })
            })
        },

        




        methods: {

            getDeviceType: function() {
                const ua = navigator.userAgent;
                console.log(ua)
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
                let t = new Date().getTime()
                console.log(t); 
                let t2 = t.toString();
                t2 =  t2.substring(6);
                this.keystorkeTimes.push("return:"+t2);



                console.log(this.keystorkeTimes)
                let sha256 = require('sha-256-js');
                let enpassword = sha256(this.password);
                let device = this.getDeviceType()
                let ua = navigator.userAgent;
                let params = {
                    username: this.username,
                    password: enpassword,
                    keystorkeTimes: this.keystorkeTimes,
                    device: device,    
                    userAgent: ua  
                }
                axios({method: "POST", "url": "http://"+urlHost+":8081/login", data: params})
                    .then(response => {
                            console.log(JSON.stringify(response.data))
                            if (JSON.stringify(response.data) == "false") {
                                alert("user does not exists")
                                return false
                            }
                            sessionStorage.setItem('loggedIn', true)
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


            onkeyUp: function (){
                console.log("onkeyUp"); 
                let t = new Date().getTime()
                console.log(t); 
                let t2 = t.toString();
                t2 =  t2.substring(6);
                this.keystorkeTimes.push("keyup:"+t2);
            },

            onkeyDown: function (){
                console.log("onkeyDown"); 
                let t = new Date().getTime()
                console.log(t);
                let t2 = t.toString();
                t2 =  t2.substring(6); 
                this.keystorkeTimes.push("keydown:"+t2);
                
                var key = event.keyCode || event.charCode;
                console.log(key)
                // if( key == 8 || key == 46 )
                //     return false;
                // }
            },

            signUp: function () {

                // let user = crypto.createECDH('secp256r1');
                // user.generateKeys();
                // let userPublicKey = user.getPublicKey('hex');
                // let userPrivateKey = user.getPrivateKey('hex');
                // // alert("signup")
                // // window.location.href = '/signUp';
                // // router.push({ name: 'signUp', params: { "userId" } })
                // console.log(userPrivateKey + userPublicKey );


                // var sr = require('secure-random')
                // var CoinKey = require('coinkey')
                //
                // var privateKey = sr.randomBuffer(32)
                // var ck = new CoinKey(privateKey, true)
                //
                // var msg = new Buffer("hello world!", 'utf8');
                //
                // const crypto = require('crypto');
                // let ecdsa = require('ecdsa')('secp256r1');
                // let  shaMsg = crypto.createHash('sha256').update(msg).digest();
                // let signature = ecdsa.sign(shaMsg, ck.privateKey);
                //
                // var isValid = ecdsa.verify(shaMsg, signature, ck.publicKey)
                // console.log(isValid) //true

            }
        }
    }


    // let password = '*******';
    // let username = 'username';



</script>




<style scoped>

</style>

