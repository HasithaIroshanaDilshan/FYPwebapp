(function(t){function e(e){for(var a,i,n=e[0],c=e[1],l=e[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"38a6":function(t,e,s){"use strict";var a=s("eed2"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("body",{staticStyle:{"background-image":"url('background.png')","background-repeat":"no-repeat","background-size":"cover","background-position":"center center","background-opacity":"0.5"}},[s("div",{attrs:{id:"div1"}},[s("NavBar"),s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"slide-fade"}},[s("router-view")],1),s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}})],1)],1)])},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navBar"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("a",{staticClass:"navbar-left",attrs:{href:"home"}},[a("img",{attrs:{height:"40",width:"auto",src:s("b9af"),alt:""}})]),a("b-navbar-text",{staticStyle:{"font-size":"3vw"},attrs:{href:"#"}},[t._v("\n      Keystroke Dynamics Based Biometric For Remote User\n      Authentication Schemes\n    ")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[t.loggedIn?t._e():a("b-navbar-nav",[a("b-nav-item",{attrs:{"router-link":"",to:"login"}},[t._v("Login")]),a("b-nav-item",{attrs:{"router-link":"",to:"signUp"}},[t._v("Sign Up")])],1),t.loggedIn?a("b-navbar-nav",[a("b-nav-item",{attrs:{"router-link":"",to:"Home"}},[t._v("Home")]),a("b-nav-item",{attrs:{"router-link":"",to:"TrainData"}},[t._v("Train Data")])],1):t._e(),t.loggedIn?a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("User")])]},proxy:!0}],null,!1,4258386881)},[a("b-dropdown-item",{attrs:{"router-link":"",to:"login"}},[t._v("Sign Out")])],1):t._e()],1)],1)],1)],1)},n=[],c={name:"NavBar",data:function(){return{loggedIn:!1}},created:function(){"true"==localStorage.getItem("loggedIn")&&(this.loggedIn=!0)},methods:{logout:function(){this.loggedIn=!1,localStorage.setItem("loggedIn",!1)}}},l=c,u=(s("38a6"),s("2877")),d=Object(u["a"])(l,i,n,!1,null,"07e6af20",null),m=d.exports,p={name:"app",components:{NavBar:m},data:function(){return{showAbstract:!0}},created:function(){"true"==localStorage.getItem("loggedIn")?(this.showAbstract=!1,"/"==window.location.pathname&&this.$router.push("/Home")):this.$router.push("/Intro")}},h=p,v=(s("034f"),Object(u["a"])(h,r,o,!1,null,null,null)),f=v.exports,g=(s("4989"),s("5f5b")),b=(s("f9e3"),s("2dd8"),s("8c4f")),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.auth?t._e():s("div",{staticClass:"card mx-auto mt-3",staticStyle:{width:"18rem"}},[s("article",{staticClass:"card-body"},[s("a",{staticClass:"float-right btn btn-outline-primary",attrs:{href:"signUp"}},[t._v("Sign up")]),s("h4",{staticClass:"card-title mb-4 mt-1"},[t._v("Sign in")]),s("hr"),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{name:"",placeholder:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"******",type:"password",required:""},domProps:{value:t.password},on:{keyup:t.onkeyUp,keydown:t.onkeyDown,paste:t.onPaste,input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.showErr?s("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n                        "+t._s(t.pwErrorMsg)+"\n                        "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.closeAlert}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.submit}},[t._v(" Login  ")])])]),s("div",{staticClass:"col-md-6 text-right"})])])])]),t.auth?s("div",[t.keys?s("p",{staticClass:"mt-2"},[t._v("User keys")]):t._e(),t.keys?s("pre",{staticClass:"text-left mt-2 mx-3",staticStyle:{"word-wrap":"break-word"}},[t._v("public key: MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9nEOw+PPv9C5ORmG8xyL2ko7KPvt\nWC6x1e9gNuIwjI7pvBEs8ijQwYV9tG9CeMSoc8bZfdlMla3imUW5NE/x+w== "),s("br"),t._v("private key: MHcCAQEEIMDZ0T677nTx8P/fKI1fntIchzFhQSYeu2jQh5cKilPsoAoGCCqGSM49\nAwEHoUQDQgAE9nEOw+PPv9C5ORmG8xyL2ko7KPvtWC6x1e9gNuIwjI7pvBEs8ijQ\nwYV9tG9CeMSoc8bZfdlMla3imUW5NE/x+w==\n            ")]):t._e(),t.severkey?s("p",{staticClass:"mt-2"},[t._v("Received from server")]):t._e(),t.severkey?s("pre",{staticClass:"text-left mt-2 mx-3",staticStyle:{"word-wrap":"break-word"}},[t._v("Server public key: MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1xhNa5MJRF1ti2hi+Xfvuclb2j2M\n212MiAh3MCLgS9X1gl+mDrGLuMhE1wDSsjgBKdNriYN3Ky+m+HZgACr/0w==\n            ")]):t._e(),t.severkey?s("p",{staticClass:"mt-2"},[t._v("Signature send to server")]):t._e(),t.severkey?s("pre",{staticClass:"text-left mt-2 mx-3",staticStyle:{"word-wrap":"break-word"}},[t._v("ECDSA signature: MEYCIQC+HeQwxVIdqNs0v08k6T3gqRFjcu+5QKVTYUWSX7qkhgIhAMXpDtCoRqauyzxZt\n                V2mZioPUEnW5Qg0lq60dZlqEH59\n            ")]):t._e(),s("button",{attrs:{type:"submit"},on:{click:t.eccVerified}},[t._v(" OK  ")])]):t._e()])},w=[],k=(s("6b54"),s("28a5"),s("bc3a")),C=s.n(k),_=window.location.host.split(":")[0];function S(t){var e=t.split(""),s=e.reverse(),a=s.join("");return a}var x={name:"Login",props:{title:String},data:function(){return{password:"",username:"",keys:!1,severkey:!1,privateKey:"",publicKey:"",key:[],serverKeySignature:[],auth:!1,signatureVerified:!1,userSignature:"",userSignatureHash:"",temp:[],serverPublicKey:"",keystorkeTimes:[],showErr:!1,pwErrorMsg:"paste is not allowed"}},created:function(){var t=this;this.keystorkeTimes=[];var e={};C()({method:"POST",url:"http://"+_+":8081/getuserkey",data:e}).then((function(a){t.key=a.data,t.publicKey=S(t.key.PublicKey),t.privateKey=S(t.key.PrivateKey),t.keys=!0;var r={publicKey:t.publicKey};C()({method:"POST",url:"http://"+_+":8081/setuserpublickey",data:r}).then((function(a){t.temp=a.data,C()({method:"POST",url:"http://"+_+":8081/getserverpublickey",data:e}).then((function(e){t.temp=e.data,t.serverPublicKey=t.temp.PublicKey;var a=s("5aba");t.userSignature=a("I am the user username = user user id =id");var r={msg:t.userSignature};C()({method:"POST",url:"http://"+_+":8081/doencrypt",data:r}).then((function(e){t.severkey=!0,t.temp=e.data,t.userSignatureHash=t.temp.encripted;var s={publicKey:t.publicKey,signature:t.userSignature,hash:t.userSignatureHash};C()({method:"POST",url:"http://"+_+":8081/usersignatureverify",data:s}).then((function(e){t.severkey=!0,t.temp=e.data}))}))}))}))}))},methods:{getDeviceType:function(){var t=navigator.userAgent;return console.log(t),/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)?"tablet":/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t)?"mobile":"desktop"},submit:function(){var t=this;if(""!=this.password&&""!=this.username){console.log(this.password);var e=(new Date).getTime();console.log(e);var a=e.toString();a=a.substring(6),this.keystorkeTimes.push("return:"+a),console.log(this.keystorkeTimes);var r=s("5aba"),o=r(this.password),i=this.getDeviceType(),n=navigator.userAgent,c={username:this.username,password:o,keystorkeTimes:this.keystorkeTimes,device:i,userAgent:n};C()({method:"POST",url:"http://"+_+":8081/login",data:c}).then((function(e){if(console.log(JSON.stringify(e.data)),"false"==JSON.stringify(e.data))return alert("user does not exists"),!1;localStorage.setItem("loggedIn",!0),t.$router.push({path:"/home"})}),(function(t){return console.log(t),alert("user does not exists"),!1}))}},eccVerified:function(){this.auth=!1},onSubmit:function(){},onkeyUp:function(){console.log("onkeyUp");var t=event.keyCode||event.charCode;if(console.log(t),8==t||46==t)this.pwErrorMsg="Don't use delete and backspace",this.showErr=!0,this.clearKeyData();else if(16!=t&&20!=t&&17!=t){var e=(new Date).getTime();console.log(e);var s=e.toString();s=s.substring(6),this.keystorkeTimes.push("keyup:"+s)}},onkeyDown:function(){console.log("onkeyDown");var t=event.keyCode||event.charCode;if(console.log(t),8==t||46==t)this.pwErrorMsg="Don't use delete and backspace",this.showErr=!0;else if(16!=t&&20!=t&&17!=t){var e=(new Date).getTime();console.log(e);var s=e.toString();s=s.substring(6),this.keystorkeTimes.push("keydown:"+s)}},signUp:function(){},onPaste:function(){this.pwErrorMsg="paste is not allowed",console.log("onpaste"),console.log(event.clipboardData.getData("text")),this.showErr=!0,this.clearKeyData()},clearKeyData:function(){var t=this;console.log(this.keystorkeTimes),setTimeout((function(){t.keystorkeTimes=[],t.password="",console.log(t.keystorkeTimes)}),500)},closeAlert:function(){this.showErr=!1}}},E=x,T=Object(u["a"])(E,y,w,!1,null,"828e648e",null),P=T.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card mx-auto mt-3",staticStyle:{width:"18rem"}},[s("article",{staticClass:"card-body"},[s("h4",{staticClass:"text-center"},[t._v("Sign up")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control mt-3",attrs:{placeholder:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mt-2",attrs:{placeholder:"email",type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mt-2",attrs:{placeholder:"password",type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control mt-2",attrs:{placeholder:"confirm password",type:"password",required:""},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.submit}},[t._v("Submit")])])]),s("div",{staticClass:"col-md-6 text-right"})])])])])},I=[],O={name:"SignUp",data:function(){return{username:"",email:"",password:"",confirmPassword:""}},methods:{onSubmit:function(){},submit:function(){var t=this;if(""==this.username||""==this.email||""==this.password||""==this.confirmPassword)return console.log("invalid data"),!1;if(this.password==this.confirmPassword){var e=s("5aba"),a=e(this.password),r={username:this.username,password:a,email:this.email};return C()({method:"POST",url:"http://localhost:8081/users",data:r}).then((function(e){console.log(JSON.stringify(e.data)),t.$router.push({path:"/login"})}),(function(t){return console.log(t),alert(t),!1})),!0}alert("Please make sure your passwords match"),this.confirmPassword=""}}},K=O,A=Object(u["a"])(K,D,I,!1,null,"6ea3d784",null),M=A.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[t._v("milestone 6")])},N=[],U={name:"BiometricAuth"},q=U,B=Object(u["a"])(q,j,N,!1,null,"5a499a5e",null),Q=B.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row pt-4"},[s("div",{staticClass:"col-sm-7"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Abstract")]),s("p",{staticClass:"card-text"},[t._v(t._s(t.abstract))])])])]),s("div",{staticClass:"col-sm-5"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Add training data")]),s("p",{staticClass:"card-text"},[t._v("Type password multiple times to add trainnig data set")]),s("router-link",{attrs:{to:"TrainData"}},[s("a",{staticClass:"btn btn-primary"},[t._v("Go")])])],1)]),t._m(0),t._m(1)])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("View Profile")]),s("p",{staticClass:"card-text"},[t._v("With supporting text below as a natural lead-in to additional content.")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("View results")]),s("p",{staticClass:"card-text"},[t._v("With supporting text below as a natural lead-in to additional content.")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])])])}],$="Remote user authentication is a mechanism to access information systems via insecure channel from any location. There are a number of various authentication protocols that follow different mechanisms. When communicating via insecure channel, security is the main issue due to the intruders. When communicating via unsecure channel, security is the main issue. Intruders can harm the user's information using various techniques even though the user is using an authentication scheme. Although researchers have invented many user authentication schemes to withstand security attacks still many schemes are vulnerable to various attacks. Many authentication schemes have used passwords and smart cards for user authentication. But recently, Instead of passwords and smart-cards now many schemes use bio-metric features for their authentication due to the uniqueness of biometric features. In this research, two-way authentication scheme is considered. We have investigated the key requirement to full fill the security and reliability on “Keystroke Dynamics Based Bio-metric for Remote User Authentication Schemes” referring different authentication schemes. Keystroke dynamics has been use as a biometric feature to authentication the remote user and it was used as a second authentication factor while using password as first authentication factor. We have done several experiments for various algorithms to get the minimum error rate using specific machine learning for data mining, classification toolkit WEKA and python program. Here we have reported all the algorithms and results for different approaches. According to the obtained results this bio-metric feature and proposed authentication mechanism provide an acceptable level of performance.",V="",G={name:"Home",data:function(){return{abstract:[]}},created:function(){this.abstract=$}},Z=G,J=Object(u["a"])(Z,H,W,!1,null,"c33f3afc",null),Y=J.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pt-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Abstract")]),s("p",{staticClass:"card-text"},[t._v(t._s(t.abstract))])])])])},L=[],R={name:"Intro",props:{title:String},mounted:function(){},data:function(){return{abstract:[]}},created:function(){this.abstract=$},methods:{},computed:{}},F=R,X=Object(u["a"])(F,z,L,!1,null,"342dce0f",null),tt=X.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row pt-4"},[s("div",{staticClass:"col-sm-5"},[s("div",{staticClass:"card mx-auto mt-auto",staticStyle:{width:"18rem"}},[s("article",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-4 mt-1"},[t._v("Train data")]),s("hr"),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{name:"",placeholder:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"******",type:"password",required:""},domProps:{value:t.password},on:{keyup:t.onkeyUp,keydown:t.onkeyDown,paste:t.onPaste,input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.showErr?s("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.pwErrorMsg)+"\n\t\t\t\t\t\t\t"),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.closeAlert}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),t.addSuccess?s("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v("\n\t\t\t\t\t\t\tSuccess!\n\t\t\t\t\t\t\t"),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.closeAlert}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.submit}},[t._v(" Login  ")])])]),s("div",{staticClass:"col-md-6 text-right"})])])])])]),s("div",{staticClass:"col-sm-7"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Instructions")]),s("p",{staticClass:"card-text"},[t._v(t._s(t.Instructions))]),s("a",{attrs:{href:"https://www.cs.cmu.edu/~keystroke/",target:"_blank"}},[t._v("Keystroke Dynamics - Benchmark Data Set")])])])])])},st=[],at={name:"TrainData",props:[],mounted:function(){},data:function(){return{password:"",username:"",keys:!1,key:[],auth:!1,signatureVerified:!1,userSignature:"",userSignatureHash:"",temp:[],keystorkeTimes:[],showErr:!1,pwErrorMsg:"paste is not allowed",deviceType:"",userAgent:"",Instructions:"",addSuccess:!1}},created:function(){var t=navigator.userAgent;this.userAgent=t,/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)?this.deviceType="tablet":/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t)?this.deviceType="mobile":this.deviceType="desktop",this.Instructions=V},methods:{submit:function(){var t=this;if(""!=this.password&&""!=this.username){console.log(this.password);var e=(new Date).getTime();console.log(e);var a=e.toString();a=a.substring(6),this.keystorkeTimes.push("return:"+a),console.log(this.keystorkeTimes);var r=s("5aba"),o=r(this.password),i=sessionStorage.getItem("pw");if(null!=i&&i!=o)return this.pwErrorMsg="wrong password",this.addSuccess=!1,this.showErr=!0,void this.clearKeyData();var n=this.deviceType,c=this.userAgent,l={username:this.username,password:o,keystorkeTimes:this.keystorkeTimes,device:n,userAgent:c,pw:this.password};C()({method:"POST",url:"http://"+_+":8081/trainset",data:l}).then((function(e){return console.log(JSON.stringify(e.data)),"false"==JSON.stringify(e.data)?(t.pwErrorMsg="wrong password",t.addSuccess=!1,t.showErr=!0,t.clearKeyData(),!1):"User not registered"!==JSON.stringify(e.data)&&(t.clearKeyData(),t.showErr=!1,void(t.addSuccess=!0))}),(function(t){return console.log(t),alert("server error"),!1}))}},eccVerified:function(){this.auth=!1},onSubmit:function(){},onkeyUp:function(){console.log("onkeyUp");var t=event.keyCode||event.charCode;if(console.log(t),8==t||46==t)this.pwErrorMsg="Don't use delete and backspace",this.addSuccess=!1,this.showErr=!0,this.clearKeyData();else if(16!=t&&20!=t&&17!=t){var e=(new Date).getTime();console.log(e);var s=e.toString();s=s.substring(6),this.keystorkeTimes.push("keyup:"+s)}},onkeyDown:function(){console.log("onkeyDown");var t=event.keyCode||event.charCode;if(console.log(t),8==t||46==t)this.pwErrorMsg="Don't use delete and backspace",this.addSuccess=!1,this.showErr=!0;else if(16!=t&&20!=t&&17!=t){var e=(new Date).getTime();console.log(e);var s=e.toString();s=s.substring(6),this.keystorkeTimes.push("keydown:"+s)}},onPaste:function(){this.pwErrorMsg="paste is not allowed",console.log("onpaste"),this.addSuccess=!1,this.showErr=!0,this.clearKeyData()},clearKeyData:function(){var t=this;console.log(this.keystorkeTimes),setTimeout((function(){t.keystorkeTimes=[],t.password="",console.log(t.keystorkeTimes)}),500)},closeAlert:function(){this.showErr=!1,this.addSuccess=!1}},computed:{}},rt=at,ot=Object(u["a"])(rt,et,st,!1,null,"4a7de080",null),it=ot.exports;a["default"].use(g["a"]),a["default"].component("NavBar",m),a["default"].config.productionTip=!1,a["default"].use(b["a"]);var nt=[{path:"/login",component:P},{path:"/signUp",component:M},{path:"/biometric",component:Q},{path:"/home",component:Y},{path:"/Intro",component:tt},{path:"/TrainData",component:it}],ct=new b["a"]({routes:nt,mode:"history"});new a["default"]({el:"#app",router:ct,render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,s){},b9af:function(t,e,s){t.exports=s.p+"img/authentication-lock-icon.c8192d70.png"},eed2:function(t,e,s){}});
//# sourceMappingURL=app.d340f12f.js.map