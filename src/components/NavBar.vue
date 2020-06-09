<template>

    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">

            <b-navbar-brand style="font-size:2vw;" href="#"> <img alt="logo" height="40" width="auto" src=".././assets/authentication-lock-icon.png">Biometric Based Remote User Authentication Scheme</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-navbar-nav>
                        <b-nav-item router-link to="login" icon="user">Login</b-nav-item>
                        <b-nav-item router-link to="signUp" >Sign Up</b-nav-item>
                    </b-navbar-nav>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
<!--                        <b-dropdown-item href="#">Profile</b-dropdown-item>-->
                        <b-dropdown-item href="login">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>
<style scoped>

</style>