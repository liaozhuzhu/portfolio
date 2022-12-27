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
            <img src="../../static/images/sort.png"/>
            <div class="column">
                <p class="playlist-category">SONG</p>
                <h1 class="playlist-title">Sorting Visualizer</h1>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://liaozhuzhu.github.io/sort/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <fa class="song-like" icon="fa-regular fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>I made this visualizer to get a better grasp of DOM manipulation and to improve my javascript skills.
            <br/>
            <br/>
            This project taught me a lot about DOM manipulation and also enhanced my knowledge on various sorting algorithms.
            <br/>
            <br/>
            To try it yourself, go to <a target="_blank" href="https://liaozhuzhu.github.io/sort/">https://liaozhuzhu.github.io/sort/</a> and if you want to see the code for yourself, go to 
            this <a target="_blank" href="https://github.com/liaozhuzhu/sort">this repository</a>.
            </p>
      </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - Sorting Visualizer"
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
        background-image: linear-gradient(to bottom, rgba(27,67,91,255), black);
    }

    .song-page-header {
        background-image: linear-gradient(to bottom, rgba(48,116,159,255), rgba(27,67,91,255));
    }
</style>