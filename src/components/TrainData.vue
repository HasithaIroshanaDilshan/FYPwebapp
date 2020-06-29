<template>


	<div class="row pt-4">
		<div class="col-sm-5" >
			<div class="card mx-auto mt-auto" style="width: 18rem; ">
				<article class="card-body">
					<h4 class="card-title mb-4 mt-1">Train data</h4>
					<hr>
					<form v-on:submit.prevent="onSubmit">
						<div class="form-group">
							<input v-model="username" name="" class="form-control" placeholder="username" required >
						</div> 
						<div class="form-group">
							<input v-model="password" class="form-control" placeholder="******" type="password" v-on:keyup="onkeyUp" v-on:keydown="onkeyDown" @paste="onPaste" required>
						</div> 

						<div v-if="showErr" class="alert alert-danger alert-dismissible fade show" role="alert">
							{{pwErrorMsg}}
							<button v-on:click="closeAlert" type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div v-if="addSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
							Success!
							<button v-on:click="closeAlert" type="button" class="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<button v-on:click="submit" type="submit" class="btn btn-primary btn-block"> Login  </button>
								</div>
							</div>
							<div class="col-md-6 text-right">
								<!-- <a class="small" href="#">Forgot password?</a>-->
							</div>
						</div> 
					</form>
				</article>
			</div>
		</div>

		<div class="col-sm-7" >
			<div class="card" >
                <div class="card-body">
                    <h4 class="card-title">Instructions</h4>
                    <p class="card-text">{{Instructions}}</p>
					<u style="color: rgb(0,0,255)" v-on:click="visitCmu">Keystroke Dynamics - Benchmark Data Set</u>
                </div>
            </div>
		</div>
	</div>


</template>

<script>
	import axios from "axios";
	import { urlHost } from './variables.js'
	import { Instructions } from "./content.js";
	export default  {
		name: 'TrainData',
		props: [],
		mounted () {

		},
		data () {
			return {
				password : '',
                username : '',
                keys:false,
                key: [],
                auth: false,
                signatureVerified: false,
                userSignature: '',
                userSignatureHash: '',
                temp: [],
                keystorkeTimes: [],
                showErr: false,
				pwErrorMsg: 'paste is not allowed',
				deviceType: '',
				userAgent: '',
				Instructions:'',
				addSuccess: false
			}
		},

		created() {
			
				const ua = navigator.userAgent;
				this.userAgent = ua;
                // console.log(ua)
                if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
                    this.deviceType = "tablet";
                }
                else if ( /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
					this.deviceType = "mobile";
                    // return "mobile";
				} else {
					this.deviceType = "desktop";
				}
				
				this.Instructions = Instructions;
            
		},



		methods: {

			visitCmu: function () {
				window.open('https://www.cs.cmu.edu/~keystroke/', '_blank');
			},

            submit: function () {
                if (this.password == '' || this.username == '') {
                    return
                }
                console.log(this.password); 
                let t = new Date().getTime()
                console.log(t); 
                let t2 = t.toString();
                t2 =  t2.substring(6);
                this.keystorkeTimes.push("return:"+t2);

                console.log(this.keystorkeTimes)
                let sha256 = require('sha-256-js');
				let enpassword = sha256(this.password);
				let prevPw = sessionStorage.getItem('pw');
				if( (prevPw !=null) && (prevPw != enpassword) ){
					console.log("here")
					this.pwErrorMsg = "wrong password"
					this.addSuccess = false;
					this.showErr = true;
					this.clearKeyData();
					return
				}
                let device = this.deviceType;
                let ua = this.userAgent;
                let params = {
                    username: this.username,
                    password: enpassword,
                    keystorkeTimes: this.keystorkeTimes,
                    device: device,    
					userAgent: ua,
					pw: this.password  
                }
                axios({method: "POST", "url": "http://"+urlHost+":8081/trainset", data: params})
                    .then(response => {
                            console.log(JSON.stringify(response.data))
                            if (JSON.stringify(response.data) == "false") {
								this.pwErrorMsg = "wrong password"
								this.addSuccess = false;
								this.showErr = true;
								this.clearKeyData();
                                // alert("wrong password")
                                return false
                            }
							this.clearKeyData();
							this.showErr = false;
							this.addSuccess = true;
							sessionStorage.setItem("pw", enpassword)
							// setTimeout(this.addSuccess = false, 2000);
							// setTimeout(function(){
							// 	alert("Hello");
							// 	this.addSuccess = false;
							// }, 3000);
                        }, (error) => {
                            console.log(error),
                                alert("server error")
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
                var key = event.keyCode || event.charCode;
                console.log(key)
                if(key == 8 || key == 46){
					this.pwErrorMsg = 'Don\'t use delete and backspace';
					this.addSuccess = false;
                    this.showErr = true;
                    this.clearKeyData();
                }else if(!(key == 16 || key == 20 || key == 17)){
                    let t = new Date().getTime()
                    console.log(t); 
                    let t2 = t.toString();
                    t2 =  t2.substring(6);
                    this.keystorkeTimes.push("keyup:"+t2);
                }
               
                
            },

            onkeyDown: function (){
                console.log("onkeyDown"); 
                var key = event.keyCode || event.charCode;
                console.log(key)
                if(key == 8 || key == 46){
					this.pwErrorMsg = 'Don\'t use delete and backspace';
					this.addSuccess = false;
                    this.showErr = true;
                    // this.clearKeyData();
                }else if(!(key == 16 || key == 20 || key == 17)){
                     let t = new Date().getTime()
                    console.log(t);
                    let t2 = t.toString();
                    t2 =  t2.substring(6); 
                    this.keystorkeTimes.push("keydown:"+t2);
                }

                // if( key == 8 || key == 46 )
                //     return false;
                // }
            },

            onPaste: function () {
                this.pwErrorMsg = 'paste is not allowed';
                console.log('onpaste');
                //alert('paste is not allowed')
				// console.log(event.clipboardData.getData('text'))
				this.addSuccess = false;
                this.showErr = true;
				this.clearKeyData()
				
				// setTimeout(function(){
				// 	alert("Hello");
				// 	this.showErr = false;
				// 	console.log(this.showErr)
				
				// }, 3000);


            },

            clearKeyData: function(){
                console.log(this.keystorkeTimes);
                setTimeout(() => {
                    this.keystorkeTimes= [];
                    this.password = "";
                    console.log(this.keystorkeTimes);
                }, 500);
            },

            closeAlert: function(){
				this.showErr = false;
				this.addSuccess = false;
            }


		},
		computed: {

		}
}


</script>

<style scoped>
 
</style>
