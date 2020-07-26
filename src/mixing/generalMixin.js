export const validateMixing = {
	created() {
		
			console.log('check login');
			if (localStorage.getItem("loggedIn") == "true") {
				this.loggedIn = true;
				return true;
			} else {
				this.$router.push("/Intro");
				return false;
			}
		
	}
}