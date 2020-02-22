<template>
  <div id="app">
    <div v-if="!this.verified">
        <input id="password-box" @keyup.enter="verify" v-model="userAttempt" type="text">
        <button id="verifyButton" v-on:click="verify">Verifiera inbjudan</button>
    </div>
   
    <div v-if="this.verified">
        <InvitePage/>
    </div>
  </div>
</template>

<script>

import InvitePage from './components/InvitePage.vue'

export default {
  name: 'App',
  components: {
    InvitePage
  }, 
  data(){
    return {
      verified: false,
      userAttempt: ""
    }
  },
  methods: {
    verify(){
      if(this.userAttempt == "björkpalm"){
        this.verified = true; 
      } 
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 160px;
}
#verifyButton {
  font-family: 'Courier New', Courier, monospace;
  padding: 4px;
  margin: 10px;
  font-size: 16px;
  font-weight: 900;
  color: white; 
  background-color: #cb758c;
}
.paragraph-spacer {
  height: 20px;
}
</style>
