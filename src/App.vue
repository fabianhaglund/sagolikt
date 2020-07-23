<template>
  <div id="app">
    <!--  LOG IN SCREEN -->
    <div id="logIn" v-if="!this.verified">
      <div class="lineContainer" />
      <div class="lineContainer red" />
      <div class="lineContainer blue" />

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
    </div>

    <!--  LANDING PAGE -->
    <div v-if="this.verified">
      <div>
        <div class="lineContainer" />
        <div class="lineContainer red" />
        <div class="lineContainer blue" />
      </div>
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
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  font-family: "Archivo Black";
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  max-width: 100vw;
  background: #111;
}

span::selection {
  background: purple;
}

span {
  color: black;
  background: rgba(255, 255, 0, 0.5);
  line-height: 1.5;
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

.scrolling-text {
  color: red;
  text-transform: uppercase;
}

@keyframes move {
  0% {
    transform: translate(-50vw, 1vh) rotate(30deg) scale(0.9);
    filter: blur(10px);
  }
  50% {
    filter: blur(50px);
  }
  100% {
    filter: blur(10px);
    transform: translate(50vw, -3vh) rotate(-40deg) scale(1);
  }
}
@keyframes moveRotate {
  0% {
    transform: translate(-50vw, -1vh) rotate(40deg) scale(1);
    filter: blur(10px);
  }
  50% {
    filter: blur(50px);
  }
  100% {
    filter: blur(10px);
    transform: translate(50vw, 1vh) rotate(-50deg) scale(0.9);
  }
}

.lineContainer {
  z-index: 0;
  opacity: 0.6;
  mix-blend-mode: screen;
  background: rgb(0, 255, 0);
  position: fixed;
  height: 80vw;
  width: 80vw;
  border-radius: 40vw;
  animation: move 0.5s ease-in-out infinite alternate;
}
@media (max-width: 800px) {
  .lineContainer {
  height: 80vh;
  width: 80vh;
  border-radius: 40vh;
  }
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
    transform: translate(-20px) rotate(1deg);
  }
  to {
    transform: translate(20px) rotate(0deg);
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
  margin: 10px 0px;
  height: 10px;
  line-height: 10px;
  animation-duration: 0.25s;
}
.password-text-4 {
  animation-duration: 0.12s;
  margin: 15px 0px;
  height: 2px;
  line-height: 2px;
}
.password-text-5 {
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
  color: black;
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
      song: {
        id: "baom-baom",
        name: "Baumibam",
        file: new Audio(require("./assets/depechePeople.mp3")),
        isPlaying: true
      }
    };
  },

  mounted: function(){
    console.log("added play song on change")
  },

  watch: {
    // whenever userAttempt changes, this function will run
    userAttempt: function () {
      console.log("play song on change");
      var audio = this.song.file;
      audio.play();
      this.song.isPlaying = true;
      console.log(this.song.isPlaying);
    }
  },

  methods: {
    verify() {
      if (this.userAttempt == "sagolikt" || this.userAttempt == "Sagolikt") {
        this.verified = true;
      }
    },
  },
};
</script>
