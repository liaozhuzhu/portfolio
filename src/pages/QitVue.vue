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
            <img src="../../static/images/qit.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">QiT</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <MusicNav link="https://github.com/liaozhuzhu/qit"/>
        <div class="container-flex justify-content-left song-desc">
            <p>QiT (pronounced "cheat"), was my first ever full stack application using Flask and MySQL. QiT was supposed to be a random blog posting, social media, with the incentive to 
                be students posting questions and answers with each other. Each post could be liked, commented on, and shared with other users. Each user even had their own individual page 
                with biographies and profile pictures.
            <br/>
            <br/>
            Though QiT is not hosted due to Heroku going down, it served a great purpose to me in multiple ways. One, I gained a huge insight into how full stack and rest api's worked. This was 
            a crucial step for me to reaching my goal of becoming a ⭐10x developer⭐!!! No but in all seriousness, second, it helped me realize how I needed to get away from tutorial hell. When building 
            QiT, I found myself not really retaining the info, but rather just brainlessly typing away. 
            <br/>
            <br/>
            In order to combat this, I decided to attempt my own full stack app from scratch. This is what lead to <RouterLink to="/track/clask">Clask</RouterLink>.
            To view the code for QiT, go to my <a href="https://github.com/liaozhuzhu/qit" target="_blank">GitHub Repo</a>.
            </p>
      </div>
    </div>
</template>
<script>
import MusicNav from "../components/MusicNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - QiT"
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