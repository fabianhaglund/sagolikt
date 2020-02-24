<template>

  <div id="app">

    <!--  LOG IN SCREEN -->
    <div v-if="!this.verified">
        <input id="password-box" @keyup.enter="verify" v-model="userAttempt" type="text" placeholder="Din kod :)">
        <button id="verifyButton" v-on:click="verify">Verifiera inbjudan</button>
    </div>

    <!--  LANDING PAGE -->
    <div v-if="this.verified">
        <Landing/>
    </div>


  </div>

</template>



<style>

  #password-box {
    font-family: 'Courier New', Courier, monospace;
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    background-color: lightgrey; 
    color: #cb758c;
  }

  #verifyButton {
    font-family: 'Courier New', Courier, monospace;
    padding: 40px;
    font-size: 16px;
    font-weight: 900;
    color: white; 
    background-color: #cb758c;
  }

  .paragraph-spacer {
    height: 20px;
  }

</style>




<script>

import Landing from './components/Landing.vue'


  export default {
    name: 'App',
    components: {
      Landing
    }, 


    data(){
      return {
        verified: false,
        userAttempt: ""
      }
    },


    methods: {

      verify(){
        if(this.userAttempt == "björkpalm" || this.userAttempt == "Björkpalm"){
          this.verified = true; 
        } 
      }

    }
  }


</script>