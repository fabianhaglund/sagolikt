<template>
  <div>
    <div class="picture-container">
    <parallax class="paralax">
      <img class="img-blend" src="../assets/old.jpg" />
    </parallax>
    <parallax class="paralax">
      <img src="../assets/inne.jpg" />
    </parallax>
    <parallax class="paralax">
      <img src="../assets/ute.jpg" />
    </parallax>
    <parallax class="paralax">
      <img src="../assets/ute2.jpg" />
    </parallax>
    <parallax class="paralax">
      <img src="../assets/tobo.jpg" />
    </parallax>
  </div>
  <div id="LandingPage">
    <div v-if="this.song.isPlaying">
      <button class="mute" v-on:click="toggleMute()">TYST</button>
    </div>

    <div v-if="!this.song.isPlaying">
      <button class="mute" v-on:click="toggleMute()">MUSIK</button>
    </div>

    <div id="TopSection">
      what
    </div>

    <div id="Feed">
      <Letter />
    </div>
  </div>
  </div>
</template>

<style scoped>
.picture-container {
width:100vw;
  z-index: 10;
  top: 0;
  left:0;
  position: absolute;
  mix-blend-mode:difference;
}
.img-blend{
}

.mute {
  display: flex;
  align-items: center;
  background-color: #fb77a3;
  color: white;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 12px;
}

#LandingPage {
  position: relative;
  z-index: 999;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 100px;
}

#TopSection {
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
}

.title {
  font-size: 48px;
  padding: 12px;
}

.text {
  font-size: 24px;
  padding: 12px;
}

/*   RESPONSIVENESS  */

@media (max-width: 1500px) {
  .title {
    font-size: 36px;
  }

  .text {
    font-size: 18px;
  }

  #picnic {
    height: 550px;
    width: 500px;
  }

  #TopRightSection {
    padding: 0px;
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 500px) {
  .mute {
    padding: 2px;
    font-size: 10px;
    margin-bottom: 2px;
  }

  #LandingPage {
    padding: 4px;
  }

  #picnic {
    height: 330px;
    width: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #TopSection {
    flex-direction: column;
    margin-bottom: 0px;
  }

  #TopRightSection {
    padding: 0px;
  }

  .title {
    font-size: 32px;
  }

  .text {
    font-size: 16px;
  }
}
</style>

<script>
import Letter from "./Letter.vue";
import Parallax from "vue-parallaxy";

export default {
  name: "Landing",

  components: {
    Letter,
    Parallax,
  },

  data() {
    return {
      song: {
        id: "baom-baom",
        name: "Baumibam",
        file: new Audio(require("../assets/depechePeople.mp3")),
        isPlaying: false,
      },
    };
  },
/*
  mounted: function() {
    console.log("Play song on mount");
    var audio = this.song.file;
    audio.play();
    this.song.isPlaying = true;
    console.log(this.song.isPlaying);
  },
*/
  methods: {
    toggleMute: function() {
      var audio = this.song.file;
      if (this.song.isPlaying == false) {
        audio.play();
        this.song.isPlaying = true;
        console.log("playing music");
      } else {
        audio.pause();
        this.song.isPlaying = false;
        console.log("paused music");
      }
    },
  },
};
</script>
