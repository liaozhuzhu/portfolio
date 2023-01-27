<template>
    <div class="section full-height" id="song-page">
        <div class="container-flex topbar song-topbar">
            <div class="container-flex angle-container">
                <fa class="fa-angle" icon="fa-solid fa-angle-left" @click="this.$router.go(-1)"/>
                <fa class="fa-angle" icon="fa-solid fa-angle-right" @click="this.$router.go(1)"/>
            </div>
            <ul class="container-flex" id="account-dropdown-menu" @click="toggleAccountDropdown">
                <img src="../../static/images/pfp.jpeg"/>
                <h1>liaozhuu</h1>
                <fa icon="fa-solid fa-caret-down" id="caret-down" />
                <fa icon="fa-solid fa-caret-up" id="caret-up" style="display: none"/>
                <ul class="account-dropdown container-flex column justify-content-left" id="account-dropdown-container">
                    <li class="container-flex"><RouterLink to="/user">Profile</RouterLink></li>
                    <li class="container-flex"><RouterLink to="/playlist/projects">Projects</RouterLink></li>
                    <li class="container-flex"><a href="./liaozhu.pdf" target="_blank">Resume</a></li>
                    <li class="container-flex"><a href="https://github.com/liaozhuzhu" target="_blank">Github</a></li>
                </ul>
            </ul>
        </div>
        <div class="container-flex justify-content-left song-page-header">
            <img src="../../static/images/tiktok.jpeg"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">TikTok Video Bot</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <MusicNav/>
        <div class="container-flex justify-content-left song-desc">
            <p>As an enjoyer of TikTok, I noticed many videos that were simply a quote, a video, and some background music. Though simplistic, these videos would rack up thousands upon thousands of views.
            <br/>
            <br/>
            That's what lead me to make a Python script that generates these simple videos automatically. By randomly selecting a preloaded background video, music, and by fetching a quote from <a href="https://zenquotes.io/" target="_blank">ZenQuotes</a>, This script
            outputs a single mp4 file that can be uploaded to TikTok. It also generates the caption automatically to the users clipboard.
            <br/>
            <br/>
            This bot has gained over 1400 total views as of 12/06/2022, averages 87.8 views per video, and has accumulated over 100+ likes.
            To see the bot's work, visit <a target="_blank" href="https://www.tiktok.com/@liaozhuzhubot">www.tiktok.com/@liaozhuzhubot</a>, and to try it yourself, view the <a target="_blank" href="https://github.com/liaozhuzhu/TikTokQuoteVideoGenerator">code</a>.
            </p>
      </div>
    </div>
</template>
<script>
import MusicNav from "../components/MusicNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - TikTok Video Generator"
    },
    components: {
        MusicNav
    },
    methods: {
        togglePlaylistPopup() {
            let playlistPopup = document.getElementById("playlist-popup");
            playlistPopup.style.opacity=1;
        },
        closePlaylistPopup() {
            let playlistPopup = document.getElementById("playlist-popup");
            playlistPopup.style.opacity=0;
        },
        toggleAccountDropdown() {
        this.accountIsShowing = !this.accountIsShowing;
        if (this.accountIsShowing) {
          document.getElementById("caret-up").style.display="flex";
          document.getElementById("caret-down").style.display="none";
          document.getElementById("account-dropdown-container").style.display="flex";
        } else {
          document.getElementById("caret-up").style.display="none";
          document.getElementById("caret-down").style.display="flex";
          document.getElementById("account-dropdown-container").style.display="none";
        }
      },
    }
    
}
</script>
<style scoped>
    .section {
        background-image: linear-gradient(to bottom, purple, black);
    }

    .song-page-header {
        background-image: linear-gradient(to bottom, rgb(204, 0, 204), purple);
    }
</style>