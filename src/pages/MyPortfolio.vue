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
                    <li class="container-flex"><a href="https://github.com/liaozhuzhu">Github</a></li>
                </ul>
            </ul>
        </div>
        <div class="container-flex justify-content-left song-page-header">
            <img src="../../static/images/home.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">My Portfolio</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a href="../user"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <fa class="song-like" icon="fa-regular fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>My online portfolio verson 14,325,214. I wanted to make my portfolio more fun and less bland. One app I use all the time is Spotify. Whether I'm working, doing homework, going to the gym, or even walking, I'm always
            listening to Spotify. So this portfolio version is supposed to be a fun version of Spotify.
            <br/>
            <br/>
            To get more practice with VueJS, I used Vue to make this portfolio. The end goal of this portfolio, is to use the Spotify Web App to display my personal Spotify stats and the song I'm 
            currently listening to in order to make the site even more interesting.
            <br/>
            <br/>
            Though this portfolio is supposed to be an online resume, check out my real resume here: <a href="../../liaozhu.pdf" target="_blank">liaozhu.pdf</a>.
            </p>
      </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - My Portfolio"
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