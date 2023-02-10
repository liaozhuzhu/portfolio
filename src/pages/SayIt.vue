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
            <img src="../../static/images/sayit.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">SayIT!</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <MusicNav link="https://github.com/liaozhuzhu/sayit"/>
        <div class="container-flex justify-content-left song-desc">
            <p>
                SayIT!© is a Chrome exstension that allows users to ask questions, chat, or just say something without leaving
                their browser window. It uses OpenAI's GPT-3 API to generate responses to user input, and utilizes a React frontend
                which mimics the look and feel of ChatGPT. 
                <br/>
                <br/>
                I will be honest and say that I cheaped out on hosting it on the Chrome Web Store only because my OpenAI API key expires in 3
                months and I don't want to pay for it. If you want to try it out, you can download the build folder <a href="https://drive.google.com/drive/folders/1_uRfZIx63pfoYMB-g6q1re963QQT7OEL" target="_blank">here</a>
                and upload it at <a href="chrome://extensions/" target="_blank">chrome://extensions/</a> under developer mode.
                <br/>
                <br/>
                You can also visit the source code found at <a href="https://github.com/liaozhuzhu/sayit" target="_blank">https://github.com/liaozhuzhu/sayit</a> for more details, results, and instructions.
            </p>
        </div>
    </div>
</template>
<script>
import MusicNav from "../components/MusicNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - SayIT!"
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
        background-image: linear-gradient(to bottom, rgba(67,51,103,255), black);
    }

    .song-page-header {
        background-image: linear-gradient(to bottom, rgba(114,87,176,255), rgba(67,51,103,255));
    }
</style>