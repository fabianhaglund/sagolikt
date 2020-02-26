<template>

  <div id="app">

    <!--  LOG IN SCREEN -->
    <div id="logIn" v-if="!this.verified">
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

  @import url('https://fonts.googleapis.com/css?family=Marcellus&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy&display=swap');

  #logIn {
    display: flex; 
    flex: 1; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 12px; 
  }

  #password-box {
    font-family: 'Sorts Mill Goudy';
    padding: 30px;
    margin: 30px;
    font-size: 16px;
    font-weight: 500;
    background-color: rgb(255, 253, 250); 
    color: #cb758c;
  }

  #verifyButton {
    font-family: 'Sorts Mill Goudy';
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