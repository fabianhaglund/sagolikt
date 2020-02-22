<template>
  <div id="invitePage">

    <div id="header">
        <img id="picnic" src="../assets/picnic.jpg"/>
        <div id="headerTextBox">
            <p class="headerTextTitle">PLATS</p>
            <p class="headerTextSub">
                Idyllisk landsbygdsmiljö som peakar i svensk högsommar. Nära Uppsala & Stockholm (inom 15 mils radius).
            </p>
            <p class="headerTextTitle">TID</p>
            <p class="headerTextSub">
                18 juli, (och ha ingenting superviktigt den 19e. Inga dop, brunch med partners familj, arbetsintervjuer eller dylikt).
            </p>
            <a href="https://tillfabian.typeform.com/to/Y1EAJG">
                <img id="balloon" src="../assets/balloon.png"/>
            </a>
        </div>
    </div>

    <Letter/>

  </div>
</template>

<script>

import Letter from "./Letter.vue";

export default {
  name: "InvitePage",
  components: {
    Letter
  },
  data() {
    return {
      state: {
        showLetter: false,
        showInfo: true
      }
    };
  },
  methods: {
    showLetter() {
      console.log("show letter");
      this.state.showLetter = true;
      this.state.showInfo = false;
    },
    showInfo() {
      console.log("show info");
      this.state.showInfo = true;
      this.state.showLetter = false;
    }
  }
};
</script>

<style>
#invitePage {
    display: flex; 
    flex-direction: column; 
    align-items: center;
}
#header {
    display: flex; 
    flex-direction: row;
    margin-right: 10%;
}
#headerTextBox {
    display: flex; 
    flex-direction: column;
    margin: 40px;
}
#picnic {
    display: flex; 
    height: 500px;
}
.headerTextTitle {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
}
.headerTextSub {
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    margin-top: 0;
}
#balloon {
    width: 120px;
    padding: 20px;
}
#balloonButton {
    background-color: white;
}
</style>