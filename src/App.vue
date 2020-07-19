<template>
  <div id="app">
    <!--  LOG IN SCREEN -->
    <div id="logIn" v-if="!this.verified">
    <marquee behavior="scroll" class="scrolling-text" direction="left">
    Type code below, press enter/done to continue... 
    </marquee>
      <div class="lineContainer top" />
      <div class="lineContainer top red" />
      <div class="lineContainer top blue" />
      
      <div class="lineContainer" />
      <div class="lineContainer red" />
      <div class="lineContainer blue" />
     
      <div class="lineContainer bottom" />
      <div class="lineContainer bottom red" />
      <div class="lineContainer bottom blue" />
      
      <div class="password-text password-text-5">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-4">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-3">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-2">
        {{ this.userAttempt }}
      </div>
      <div class="password-text">
        {{ this.userAttempt }}
      </div>

      <input
        id="password-box"
        class="password-text"
        @keyup.enter="verify"
        v-model="userAttempt"
        type="text"
        placeholder="KOD"
      />
      <div class="password-text">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-2">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-3">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-4">
        {{ this.userAttempt }}
      </div>
      <div class="password-text password-text-5">
        {{ this.userAttempt }}
      </div>
      <button id="verifyButton" v-on:click="verify"></button>
          <marquee behavior="scroll" class="scrolling-text" direction="right">
    Type code above, press enter/done to continue... 
    </marquee>
    </div>

    <!--  LANDING PAGE -->
    <div v-if="this.verified">
      <Landing />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Marcellus&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");

body {
  margin: 0;
  padding: 0;
}


#app {
  font-family: "Archivo Black";
  height: 100vh;
  width: 100vw;
  background: black;

}

#logIn {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.scrolling-text{
color:white;}

@keyframes move {
  0% {
    transform: translateX(-50vw) rotate(30deg);
  filter:blur(0px);
  }
  50%{
  filter:blur(5px);
  }
  100% {
  filter:blur(0px);
    transform: translateX(50vw) rotate(-40deg);
  }
}
@keyframes moveRotate {
  0% {
    transform: translateX(-50vw) rotate(40deg) scale(1);
  filter:blur(0px);
  }
  50%{
  filter:blur(5px);
  }
  100% {
  filter:blur(0px);
    transform: translateX(50vw) rotate(-50deg) scale(0.7);
  }
}

.lineContainer {
  mix-blend-mode: screen;
  background: rgb(0, 255, 0);
  position: absolute;
  height: 20vh;
  width: 20vh;
  border-radius:10vh;
  animation: move 0.5s ease-in-out infinite alternate;
}

.top{
top:20px;
animation-duration:0.25s;
}
.bottom{
animation-duration:0.25s;
bottom:-20px;
}
.red {
  animation-delay: 0.02s;
  background: rgb(255, 0, 0);
}
.blue {
  animation-name: moveRotate;
  animation-delay: 0.04s;
  background: rgb(0, 0, 255);
}

@keyframes dance {
  from {
    transform: translateX(-10px);
  }
  to {
    transform: translateX(10px);
  }
}

.password-text {
  letter-spacing: 10px;
  transform: scaley(0.8);
  margin: 10px 0px;
  line-height: 40px;
  height: 40px;
  text-transform: uppercase;
  font-family: "Archivo Black";
  color: blue;
  font-size: 80px;
  font-weight: 800;
  width: 100vw;
  overflow: hidden;
  text-align: center;
  color: blue;
  animation: dance 1s ease infinite alternate;
}

.password-text-2 {
  animation-duration: 0.5s;
  margin: 20px 0px;
  height: 20px;
  line-height: 20px;
}
.password-text-3 {
  color:#0000E6;
  margin: 10px 0px;
  height: 10px;
  line-height: 10px;
  animation-duration: 0.25s;
}
.password-text-4 {
  animation-duration: 0.125s;
  margin: 15px 0px;
  height: 2px;
  line-height: 2px;
}
.password-text-5 {
  color:#0000E6;
  animation-duration: 0.25s;
  margin: 15px 0px;
  height: 2px;
  line-height: 2px;
}

#password-box {
  animation: none;
  height: 80px;
  line-height: 100px;
  background: none;
  padding: 10px;
  text-align: center;
  outline: none;
  border: none;
}

#password-box::placeholder {
  color: white;
}

#verifyButton {
  cursor: pointer;
  font-family: "Sorts Mill Goudy";
  padding: 40px;
  font-size: 20px;
  font-weight: 900;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
}

.paragraph-spacer {
  height: 20px;
}
</style>

<script>
import Landing from "./components/Landing.vue";

export default {
  name: "App",
  components: {
    Landing,
  },

  data() {
    return {
      verified: false,
      userAttempt: "",
    };
  },

  methods: {
    verify() {
      if (this.userAttempt == "kullamannen" || this.userAttempt == "Kullamannen") {
        this.verified = true;
      }
    },
  },
};
</script>
