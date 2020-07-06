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
                        <a href="TrainData" class="btn btn-primary">Go</a>
                    </div>
                </div>
            <!-- </div> -->

            <div class="pt-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="pt-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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