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
            <img src="../../static/images/clask.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">Clask</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <MusicNav link="https://github.com/liaozhuzhu/clask"/>
        <div class="container-flex justify-content-left song-desc">
            <p>Nobody wants the gut wretching feeling that happens when you're too slow to write down the notes to whatever the professor is talking about.
            <br/>
            <br/>
            So using Python Flask for the backend, and vanilla HTML/CSS frontend (with Jinja template engine), I made a full stack web app that allowed the user to record lectures, and when finished can be transcribed into text so the user can
            write down the notes whenever they want. If the user makes a clask account, they can opt in to save the transcripts to their personal dashboard. Saved transcripts can be shared, edited, and given a title and author.
            <br/>
            <br/>
            This was my second time ever attempting a full stack application so there are many things that I still haven't quite figured out. Ever since Heroku went paid, I haven't had clask re-hosted. If you would like to try it yourself feel free to
            visit <a target="_blank" href="https://github.com/liaozhuzhu/clask">https://github.com/liaozhuzhu/clask</a>, and view the <a href="https://github.com/liaozhuzhu/clask/blob/main/README.md" target="_blank">README</a>.
            </p>
      </div>
    </div>
</template>
<script>
import MusicNav from "../components/MusicNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - Clask"
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
        background-image: linear-gradient(to bottom, rgb(27, 4, 80), black);
    }

    .song-page-header {
        background-image: linear-gradient(to bottom, rgb(46, 8, 196), rgb(25, 14, 100));
    }
</style>