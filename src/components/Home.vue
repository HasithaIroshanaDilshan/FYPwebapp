<template>



    <div class="row pt-4">
        <div class="col-sm-7" >
            <div class="card" >
                <div class="card-body">
                    <h4 class="card-title">Abstract</h4>
                    <p class="card-text">{{abstract}}</p>
                </div>
            </div>
        </div>

        <div class="col-sm-5">

            <!-- <div class="row"> -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add training data</h5>
                        <p class="card-text">Type password multiple times to add trainnig data set</p>
                        <router-link to="TrainData">
                        <a  class="btn btn-primary"><span style="color: white">Train</span></a>
                        </router-link>
                    </div>
                </div>
            <!-- </div> -->

            <div class="pt-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Test</h5>
                        <p class="card-text">Test created model.</p>
                        <router-link to="Test">
                        <a class="btn btn-primary"><span style="color: white">Test</span></a>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="pt-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">View results</h5>
                        <p class="card-text">Graphically view classification results.</p>
                        <router-link to="Test">
                        <a  class="btn btn-primary"><span style="color: white">View</span></a>
                        </router-link>
                    </div>
                </div>
            </div>



            







        </div>
    </div>

</template>

<script>
    import { abstract } from "./content.js";


    export default {
        name: "Home",



        data() {
            return {
                abstract: []
            };
        },
        created() {
            this.abstract = abstract;
        },


    }
</script>

<style scoped>

</style>