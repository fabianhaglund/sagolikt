(function(t){function a(a){for(var s,n,o=a[0],l=a[1],p=a[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(a);while(u.length)u.shift()();return i.push.apply(i,p||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/sagolikt/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var p=0;p<o.length;p++)a(o[p]);var c=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),r=e.n(s);r.a},"279d":function(t,a,e){"use strict";var s=e("454c"),r=e.n(s);r.a},"454c":function(t,a,e){},"50d5":function(t,a,e){t.exports=e.p+"img/ute.55c0e0cc.jpg"},"53bc":function(t,a,e){t.exports=e.p+"img/ute2.e4e21140.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[this.verified?t._e():e("div",{attrs:{id:"logIn"}},[e("marquee",{staticStyle:{color:"white",position:"absolute",top:"10px",left:"0",width:"100%"}},[t._v("KLICKA ENTER / RETUR EFTER INSKRIVEN KOD")]),e("div",{staticClass:"lineContainer"}),e("div",{staticClass:"lineContainer red"}),e("div",{staticClass:"lineContainer blue"}),e("div",{staticClass:"password-text password-text-5"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-4"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-3"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-2"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userAttempt,expression:"userAttempt"}],staticClass:"password-text",attrs:{id:"password-box",type:"text",placeholder:"KOD"},domProps:{value:t.userAttempt},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.verify(a)},input:function(a){a.target.composing||(t.userAttempt=a.target.value)}}}),e("div",{staticClass:"password-text"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-2"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-3"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-4"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("div",{staticClass:"password-text password-text-5"},[t._v(" "+t._s(this.userAttempt)+" ")]),e("button",{attrs:{id:"verifyButton"},on:{click:t.verify}})],1),this.verified?e("div",[t._m(0),e("Landing")],1):t._e()])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"lineContainer"}),e("div",{staticClass:"lineContainer red"}),e("div",{staticClass:"lineContainer blue"})])}],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"picture-container"},[s("parallax",{staticClass:"paralax"},[s("img",{staticClass:"img-blend",attrs:{src:e("6a1f")}})]),s("parallax",{staticClass:"paralax"},[s("img",{attrs:{src:e("c15c")}})]),s("parallax",{staticClass:"paralax"},[s("img",{attrs:{src:e("50d5")}})]),s("parallax",{staticClass:"paralax"},[s("img",{attrs:{src:e("53bc")}})]),s("parallax",{staticClass:"paralax"},[s("img",{attrs:{src:e("f813")}})])],1),s("div",{attrs:{id:"LandingPage"}},[s("div",{attrs:{id:"TopSection"}}),s("div",{attrs:{id:"Feed"}},[s("Letter")],1)])])},o=[],l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"letter"},[e("span",{staticClass:"sp-title"},[t._v(" HEJ ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" På LÖRDAG vill vi att ni kommer och dansar med oss i det sagolika TOBO utanför Uppsala. Bland tigerälgar, nakna björksvampar, dockor, discoljus, drömmig musik och allmänt sagolika inslag kan absolut ingenting gå fel. ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Kom, ta med dig en eller flera goda vänner! Säg gärna till så vi har lite koll på ungefär hur många som kommer. ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" VARMT välkomna till Tobo! ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" /// en spretig skara festfixare ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",{staticClass:"sp-title"},[t._v(" Praktiskt: ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Vi håller hus i Tobo, Gamla Folkets Hus (numera “Tobo Bruksmuseum”) ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Koordinater till Google Maps: 60°15'26.8\"N 17°38'49.3\"E ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Enklast att ta sig dit är med Upptåget som går från Uppsala med en ynka restid på 29 minuter. Sedan ligger lokalen 5 minuter gång från tågstationen. Biljet köpes bäst med UL-appen ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Med bil är det bara E4an norrut från Uppsala i ca 45 min ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Vi håller oss till ett perfekt antal människor (“…lockdown i Paris, vi svävar fram i Anders Tegnells Corona-paradis…”) ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" ⁃Det kommer finnas bardisk med citrus, sockerlag, shaker, skärbräda, is etc. men ta med egen sprit såväl som handsprit om ni är såna ")]),e("div",{staticClass:"paragraph-spacer"}),e("span",[t._v(" Det finns ett begränsat antal sovplatser men krisar det så löser vi självklart, annars rekommenderar vi tåg hem när man känner sig klar. Sista tåget går 00.46 men sen börjar de gå 03.48 igen. ")])])}],c={name:"Letter"},d=c,u=(e("279d"),e("2877")),v=Object(u["a"])(d,l,p,!1,null,"255ac3be",null),m=v.exports,f=e("540a"),g=e.n(f),h={name:"Landing",components:{Letter:m,Parallax:g.a},data:function(){return{song:{id:"baom-baom",name:"Baumibam",file:new Audio(e("ef7d")),isPlaying:!1}}}},b=h,_=(e("f865"),Object(u["a"])(b,n,o,!1,null,"12a25956",null)),x=_.exports,C={name:"App",components:{Landing:x},data:function(){return{verified:!1,userAttempt:"",song:{id:"baom-baom",name:"Baumibam",file:new Audio(e("ef7d")),isPlaying:!0}}},mounted:function(){console.log("sagolikt")},watch:{userAttempt:function(){console.log("play song on change");var t=this.song.file;t.play(),this.song.isPlaying=!0,console.log(this.song.isPlaying)}},methods:{verify:function(){"sagolikt"!=this.userAttempt&&"Sagolikt"!=this.userAttempt||(this.verified=!0)}}},k=C,w=(e("034f"),Object(u["a"])(k,r,i,!1,null,null,null)),y=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(y)}}).$mount("#app")},"6a1f":function(t,a,e){t.exports=e.p+"img/old.65f5b1a0.jpg"},"85ec":function(t,a,e){},c15c:function(t,a,e){t.exports=e.p+"img/inne.eb9ac1fe.jpg"},cba2:function(t,a,e){},ef7d:function(t,a,e){t.exports=e.p+"media/depechePeople.459e51bd.mp3"},f813:function(t,a,e){t.exports=e.p+"img/tobo.772b526d.jpg"},f865:function(t,a,e){"use strict";var s=e("cba2"),r=e.n(s);r.a}});
//# sourceMappingURL=app.0a9e0cb1.js.map