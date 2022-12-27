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
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://github.com/liaozhuzhu/TikTokQuoteVideoGenerator"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <fa class="song-like" icon="fa-regular fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
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
export default {
    created() {
        document.title = "Liao Zhu - TikTok Video Generator"
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