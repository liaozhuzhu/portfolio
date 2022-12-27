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
            <img src="../../static/images/iowa.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">UI Course Catalog</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://vueitsproject.netlify.app/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <fa class="song-like" icon="fa-regular fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>This project was an interview project given to me for a position at my school. It has three versions, a Vue version, a vanilla JS version, and a Java version.
            <br/>
            <br/>
            This was the very first time I had ever used Vue. It utilizes the school's public api endpoints to create a clone of what the school's real course search system is like.
            As long as a valid course is entered, the application returns accurate results with locations, times, sections, etc. across different semesters throughout numerous years.
            <br/>
            <br/>
            To try it yourself, go to <a target="_blank" href="https://vueitsproject.netlify.app/">https://vueitsproject.netlify.app/</a> and try entering "Fall 2022", "CS", and then "2630" for example.
            </p>
      </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - UIowa Course Catalog Clone"
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
        background-image: linear-gradient(to bottom, rgb(27, 4, 80), black);
    }

    .song-page-header {
        background-image: linear-gradient(to bottom, rgb(46, 8, 196), rgb(25, 14, 100));
    }
</style>