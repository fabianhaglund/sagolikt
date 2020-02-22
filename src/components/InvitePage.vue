<template>
  <div>

    <img id="picnic" src="../assets/picnic.jpg"/>

    <div id="buttons">
      <button v-on:click="showInfo">INBJUDAN</button>
      <button v-on:click="showLetter">Brev från bygden</button>
    </div>

    <div v-if="state.showLetter">
      <Letter />
    </div>

    <div v-if="state.showInfo">
      Sommardrinkar, disco långt efter gryning och garanterat energifylld kvalitétstid med nära, kära,
      gamla och nya vänner. JA det är 100årsfest och JA det är 100årets fest, och du är kalasinbjuden. 
      100 år har vi fyra tokiga vänner skramlat ihop och det vi vill fira med att samla en sagolik kompott 
      av världens bästa och vackraste människor, nämligen våra vänner. Så ladda dina fysiska och psykiska 
      batterier för en dag, kväll och natt med svensk högsommar när den är som allra bäst, där den numera 
      förbjudna CIGGEN inte kommer portas, där du möter din mest idylliska sommarromans och en stämning som 
      skriker kärlek och hedonism. Vi kan tyvärr INTE erbjuda köer, ordningsvakter med “makt” eller dyra VIP-bås. 
      Det vi däremot kan erbjuda är ljuvlig björkskog, obegränsad ljudvolym och en hel del dopaminkickar. 
      <div class="paragraph-spacer"/>
      <div class="paragraph-spacer"/>
      Varmt välkomna till oss!
      <div class="paragraph-spacer"/>
      <div class="paragraph-spacer"/>
      Location - Idyllisk landsbygdsmiljö som peakar i Svensk högsommar. Nära Uppsala & Stockholm (inom 15 mils radius).
      <div class="paragraph-spacer"/>
      Datum - Spika 18 juli, (och ha ingenting superviktigt den 19e. Inga dop, brunch med partners familj, arbetsintervjuer eller dylikt)
    </div>
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
#picnic {
    display: flex; 
    height: 500px;
}
</style>