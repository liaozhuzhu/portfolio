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
            <img src="../../static/images/statipy.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">Statipy</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <MusicNav/>
        <div class="container-flex justify-content-left song-desc">
            <p>As you know, I love Spotify. Another app I love is Discord. My friends and I used these apps so much during Covid, always showing each other random Spotify songs,
                or even our own stats trough Discord. One issue though is that we would have to go to the actual Spotify app and get these pieces of information and then paste them into the Discord channel.
            <br/>
            <br/>
            I was inspired to try to combine these actions into one. Using Discord's API and <a href="https://spotipy.readthedocs.io/en/2.22.0/" target="_blank">Spotipy</a>, I made Statipy - a Discord bot that allowed users to show off their own Spotify profiles, stats, songs, playlists, and artists, all
            without leaving Discord!
            <br/>
            <br/>
            To try it yourself, go to <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=1021833387205472307&permissions=535798742080&scope=bot">this url</a> and add it to your server (It's probably offline though as I'm not running it through a server). 
            </p>
      </div>
    </div>
</template>
<script>
import MusicNav from "../components/MusicNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - Statipy"
    },
    components: {
        MusicNav,
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
        background-image: linear-gradient(to bottom, rgba(44,76,64,255), black);
    }

    .song-page-header {
        background-image: linear-gradient(to bottom, rgba(72,128,107,255), rgba(44,76,64,255));
    }
</style>