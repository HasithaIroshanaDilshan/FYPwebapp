<template>

    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <a class="navbar-left" href="home">
                <img height="40" width="auto" src=".././assets/authentication-lock-icon.png" alt="">
            </a>


        <!-- <b-navbar-brabd><img alt="logo" height="40" width="auto" src=".././assets/authentication-lock-icon.png"></b-navbar-brabd> -->
        <b-navbar-text style="font-size:3vw;" href="#">Keystroke Dynamics Based Biometric For Remote User
Authentication Schemes</b-navbar-text>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-navbar-nav v-if="!loggedIn">
                        <b-nav-item   router-link to="login" >Login</b-nav-item>
                        <b-nav-item router-link to="signUp" >Sign Up</b-nav-item>
                    </b-navbar-nav>

                    <b-nav-item-dropdown right v-if="loggedIn">
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
<!--                        <b-dropdown-item href="#">Profile</b-dropdown-item>-->
                        <b-dropdown-item v-on:click="logout" href="login" >Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    export default {
        name: "NavBar",

        data() {
            return {
                loggedIn : false,
            }
        },

        created() {
            if(sessionStorage.getItem('loggedIn') == 'true'){
                this.loggedIn = true;
            }
            
        },

        methods: {
            logout(){
                this.loggedIn = false
                sessionStorage.setItem('loggedIn', false)
            }
        }






    }
    





</script>
<style scoped>

</style>