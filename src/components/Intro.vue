<template>
	<div class="pt-4">
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Abstract</h4>
				<p class="card-text">{{abstract}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { abstract } from "./content.js";

export default {
	name: "Intro",
	props: {
		title: String
	},
	mounted() {},
	data() {
		return {
			abstract: []
		};
	},

	created() {
		this.abstract = abstract;
	},

	methods: {},
	computed: {}
};
</script>

<style scoped>
</style>
