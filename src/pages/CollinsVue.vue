<template>
    <div class="section full-height" id="song-page">
        <div class="container-flex column artist-header">
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
                <ul class="account-dropdown container-flex column justify-content-left ex-account-dropdown" id="account-dropdown-container">
                    <li class="container-flex"><RouterLink to="/user">Profile</RouterLink></li>
                    <li class="container-flex"><RouterLink to="/playlist/projects">Projects</RouterLink></li>
                    <li class="container-flex"><a href="./liaozhu.pdf" target="_blank">Resume</a></li>
                    <li class="container-flex"><a href="https://github.com/liaozhuzhu" target="_blank">Github</a></li>
                </ul>  
            </div>
            <div class="artist-intro-header">
                <div class="container-flex justify-content-left">
                    <fa icon="fa-solid fa-square-check"/>
                    <p style="">Verified Artist</p>
                </div>
                <h1 class="artist-title" style="font-size: 4rem;">Incoming SWE Intern</h1>
                <p class="artist-listeners">68,000 monthly listeners</p>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://www.collinsaerospace.com/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <div class="artist-follow">FOLLOW</div>
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>
                Come back May 30th, 2023!
            </p>
      </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - Collins Aerospace Software Engineer Intern"
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
        background-image: linear-gradient(to bottom, white, rgb(0, 0, 0));
    }

    .artist-header {
        background-image: url("../../static/images/collinsbanner.png");
    }
</style>