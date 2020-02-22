<template>
    <div>
        <div id="header">

            <button v-on:click="showInfo">Praktikaliteter</button>
            <button v-on:click="showLetter">Brev från bygden</button>

        </div>

        <div v-if="state.showLetter">
            <Letter/>
        </div>

        <div v-if="state.showInfo">
            Plats: TBA (inom 15 mils radius från Stockholm)<br/>
            Tid: 18 juli 2020, från dag till morgon
        </div>


    </div>
</template>

<script>

    import Letter from './Letter.vue';

    export default {
        name: 'InvitePage',
        components: {
            Letter
        }, 
        data(){
            return {
                state: {
                    showLetter: false,
                    showInfo: true
                }
            }
        }, 
        methods: {
            showLetter(){
                console.log("show letter");
                this.state.showLetter = true; 
                this.state.showInfo = false;
            }, 
            showInfo(){
                console.log("show info");
                this.state.showInfo = true;
                this.state.showLetter = false; 
            }
        }
    } 
</script>

<style>

</style>