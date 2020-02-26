<template>

    <div id="LandingPage">

        <div v-if="this.song.isPlaying">
            <button class="mute" v-on:click="toggleMute()">TYST</button>
        </div>

        <div v-if="!this.song.isPlaying">
            <button class="mute" v-on:click="toggleMute()">MUSIK</button>
        </div>
        

        <div id="TopSection">

            <div id="TopLeftSection">

                <img id="picnic" src="../assets/picnic.jpg"/>

            </div>

            <div id="TopRightSection">

                <div class="title">
                    Plats
                </div>
                <div class="text">
                    Idyllisk landsbygdsmiljö som peakar i svensk högsommar. Nära Uppsala & Stockholm (inom 15 mils radius). Mer exakt info kommer. 
                </div>

                <div class="title">
                    Tid
                </div>
                <div class="text">
                    18 juli, (och ha ingenting superviktigt den 19e. Inga dop, brunch med partners familj, arbetsintervjuer eller dylikt).
                </div>

                <div class="balloonBox">
                    <a href="https://tillfabian.typeform.com/to/Y1EAJG">
                        <img class="balloon" src="../assets/balloon.png"/>
                    </a>
                </div>

            </div>

        </div>


        <div id="Feed">

            <Letter/>

        </div>

    </div>

</template>

<style scoped>

    .mute {
        display: flex;
        align-items: center;
        background-color: #f587a4;
        font-family: 'Sorts Mill Goudy';
        color: white;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 12px;
    }

    #LandingPage {
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

    #TopLeftSection {
        display: flex;
        flex: 1;
        
    }

    #TopRightSection {
        flex: 1;
        padding: 40px;
    }

    #picnic {
        display: flex; 
        flex: 1;
        width: 100%;
        filter: brightness(135%);
    }

    .balloon {
        max-height: 200px;
    }

    .balloonBox{
        display: flex; 
        align-items: center;
        justify-content: center;
        padding: 40px;
    }

    .balloonBox:hover {
        transition: 1.5s;
        filter: brightness(110%);
        transform: rotate(360deg);
    }

    .title {
        font-family: 'Sorts Mill Goudy';
        font-size: 48px;
        padding: 12px;
    }

    .text {
        font-family: 'Marcellus';
        font-size: 24px;
        padding: 12px;
    }

    @media (max-width: 1500px) {

        .title {
            font-size: 36px;
        }

        .text {
            font-size: 18px;
        }

        #picnic {
            height: 50%;
        }
    }

    @media (max-width: 1500px){
        #TopSection {
            flex-direction: column;
        }

        #picnic {
            width: 500px;
        }

        .balloonBox {
            margin-top: 80px;
        }
    }

    @media (max-width: 800px) {
        /* CSS that should be displayed if width is equal to or less than 800px goes here */

        .mute {
            padding: 2px; 
            font-size: 10px;
            margin-bottom: 2px;
        }

        #LandingPage {
            padding: 4px;
        }

        #picnic {
            height: auto;
            width: 80%
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
    
    export default {  

        name: "Landing",

        components: {
            Letter
        },

        data(){
            return {
                song: {
                    id: 'muscle-car',
                    name: 'Muscle Car',
                    file: new Audio(require('../assets/celebration.mp3')),
                    isPlaying: false
                }
            }
        },

        mounted: function(){
            console.log('Play song on mount');
            var audio = this.song.file;
            audio.play();
            this.song.isPlaying = true;
            console.log(this.song.isPlaying);
        }, 

        methods: {
            toggleMute: function(){
                var audio = this.song.file;
                if(this.song.isPlaying == false){
                    audio.play();
                    this.song.isPlaying = true;
                    console.log("playing music");
                } else {
                    audio.pause(); 
                    this.song.isPlaying = false; 
                    console.log("paused music");
                }
            }
        }

    }

</script>