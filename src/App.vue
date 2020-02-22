<template>
  <div id="app">
    <div v-if="!this.verified">
        <input id="password-box" @keyup.enter="verify" v-model="userAttempt" type="text">
        <button v-on:click="verify">Verifiera inbjudan</button>
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
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 80px;
}
button {
  font-family: 'Courier New', Courier, monospace;
  padding: 12px;
  margin: 30px;
  font-size: 12;
  font-weight: 900;
  color: white; 
  background-color: lightpink;
}
.paragraph-spacer {
  height: 20px;
}
</style>
