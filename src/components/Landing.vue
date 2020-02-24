<template>

    <div id="LandingPage">

        <div id="TopSection">

            <div id="TopLeftSection">

                <img id="picnic" src="../assets/picnic.jpg"/>

            </div>

            <div id="TopRightSection">

                <div class="title">
                    Plats
                </div>
                <div class="text">
                    Idyllisk landsbygdsmiljö som peakar i svensk högsommar. Nära Uppsala & Stockholm (inom 15 mils radius).
                </div>

                <div class="title">
                    Tid
                </div>
                <div class="text">
                    18 juli, (och ha ingenting superviktigt den 19e. Inga dop, brunch med partners familj, arbetsintervjuer eller dylikt).
                </div>

            </div>

            <div class="balloonBox">
                <a href="https://tillfabian.typeform.com/to/Y1EAJG">
                    <img id="balloon" src="../assets/balloon.png"/>
                </a>
            </div>


        </div>


        <div id="Feed">

            <Letter/>

        </div>

    </div>

</template>

<style scoped>

    #LandingPage {
        display: flex;
        flex: 1;
        flex-direction: column;  
    }

    #TopSection {
        display: flex;
        flex-direction: row;
    }

    #TopLeftSection {
        display: flex;
        flex: 1;
        
    }

    #TopRightSection {
        flex: 1;
    }

    #picnic {
        display: flex; 
        flex: 1;
        width: 60px;
        filter: brightness(135%);
    }

    #balloon {
        max-height: 200px;
    }

    .balloonBox{
        display: flex; 
        align-items: center;
        justify-content: center;
        padding: 40px;
    }

    .title {
        font-family: 'Sorts Mill Goudy';
        font-size: 32px;
        padding: 12px;
        margin-top: 20px;
    }

    .text {
        font-family: 'Marcellus';
        font-size: 16px;
        padding: 12px;
    }

    @media (max-width: 800px) {
        /* CSS that should be displayed if width is equal to or less than 800px goes here */
        #picnic {
            max-height: 400px;
        }
        #TopSection {
            flex-direction: column;
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
        }, 

    }

</script>