<template>
    <!-- Material form register -->
    <div class="card mx-auto mt-3" style="width: 18rem; ">
        <article class="card-body">
            <h4 class="text-center">Sign up</h4>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <input v-model="username"  class="form-control mt-3" placeholder="username" required >
                <input v-model="email"  class="form-control mt-2" placeholder="email" type = "email" required >
                <input v-model="password" class="form-control mt-2" placeholder="password" type="password" required>
                <input v-model="confirmPassword" class="form-control mt-2" placeholder="confirm password" type="password" required>
            </div> <!-- form-group// -->
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <button v-on:click="submit" type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div> <!-- form-group// -->
                </div>
                <div class="col-md-6 text-right">
                    <!--                            <a class="small" href="#">Forgot password?</a>-->
                </div>
            </div> <!-- .row// -->
        </form>
        </article>
    </div>
</template>

<script>
    import axios from "axios";

    // function validateForm(username,email,password,confirmPassword ) {
    //     if( username == ''||email == '' || password == '' ||confirmPassword == '' ) {
    //         console.log("invalid data");
    //         return false;
    //     }else if(password != confirmPassword){
    //         alert("Please make sure your passwords match")
    //         this.confirmPassword = '';
    //     }else{
            // if(!validEmail(email)){
            //     console.log("Invalid email")
            //     return false;
            //
            // }
    //         let params = {
    //             username: this.username,
    //             password: this.password,
    //             email: this.email
    //         }
    //         axios({method: "POST", "url": "http://localhost:8081/users", data: params})
    //             .then(response =>{
    //                     console.log(JSON.stringify(response.data))
    //                     this.$router.push({ path: '/login' });
    //
    //                 },(error) => {
    //                     console.log(error),
    //                         alert(error)
    //                     return false
    //                 }
    //             )
    //         return true;
    //     }
    // }



    export default {
        name: "SignUp",
        data() {
            return{
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },

        methods: {
            onSubmit () {
                // DO Something
            },

            submit() {
                // if(!validateForm(this.username, this.email, this.password, this.confirmPassword)) return;
                // console.log("validated");
                if (this.username == '' || this.email == '' || this.password == '' || this.confirmPassword == '') {
                    console.log("invalid data");
                    return false;
                } else if (this.password != this.confirmPassword) {
                    alert("Please make sure your passwords match")
                    this.confirmPassword = '';
                } else {
                    // if(!validEmail(email)){
                    //     console.log("Invalid email")
                    //     return false;
                    //
                    // }
                    let sha256 = require('sha-256-js');
                    let enpassword = sha256(this.password);

                    let params = {
                        username: this.username,
                        password: enpassword,
                        email: this.email
                    }
                    axios({method: "POST", "url": "http://localhost:8081/users", data: params})
                        .then(response => {
                                console.log(JSON.stringify(response.data))
                                this.$router.push({path: '/login'});

                            }, (error) => {
                                console.log(error),
                                    alert(error)
                                return false
                            }
                        )
                    return true;
                }
            }
        }


    }
</script>

<style scoped>

</style>