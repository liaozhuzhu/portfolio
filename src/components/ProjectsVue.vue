<template>
    <div class="section full-height" id="projects-page">
        <div class="container-flex topbar">
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
        <div class="container-flex justify-content-left playlist-header" id="projects-header">
            <img src="../../static/images/projects.png"/>
            <div class="column">
                <p class="playlist-category">PLAYLIST</p>
                <h1 class="playlist-title">Projects</h1>
                <p class="playlist-desc">Projects I've worked on in my free time!</p>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/>
            <fa class="playlist-like" icon="fa-solid fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="playlist-keys container-flex">
            <div class="container-flex">
                <p class="key-index">#</p>
                <p class="key-title">TITLE</p>
            </div>
            <p class="key-album">ALBUM</p>
            <p class="key-time"><fa icon="fa-solid fa-clock"/></p>
        </div>
        <hr class="playlist-hr"/>
        <div class="playlist-songs">
            <div v-for="(project, projIndex) in projects" :key="project.title">
                <div class="container-flex song-container">
                    <div class="container-flex song-header">
                        <p class="song-index">{{ projIndex + 1 }}</p>
                        <img :src="require(`../../static/images/${project.src}`)"/>
                        <div class="container-flex column justify-content-left song-info">
                            <a :href="'/track/'+ project.page" class="song-title">{{ project.title }}</a>
                            <div class="container-flex">
                                <p v-for="(language, index) in project.languages" :key="language" class="song-languages">{{ language[0] }}<span v-if="index != project.languages.length - 1">, </span></p>
                            </div>
                        </div>
                    </div>
                    <a :href="project.code" target="_blank" class="song-code">Code</a>
                    <p class="song-time">{{ project.time }}</p>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import { projects } from '../projects.js';
export default {
    created() {
        document.title = "Liao Zhu - Projects"
    },
    data() {
        return {
            projects: projects
        }
    },
    methods: {
      toggleAccountDropdown() {
        this.accountIsShowing = !this.accountIsShowing;
        console.log(this.accountIsShowing);
        if (this.accountIsShowing) {
          document.getElementById("caret-up").style.display="flex";
          document.getElementById("caret-down").style.display="none";
        } else {
          document.getElementById("caret-up").style.display="none";
          document.getElementById("caret-down").style.display="flex";
        }
      },
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
.topbar {
    background-image: linear-gradient(to bottom, rgba(16,82,68,255), rgba(16, 90, 90, 200));
}

#projects-header {
    background-image: linear-gradient(to bottom, rgba(16, 90, 90, 200), rgba(16, 90, 90, 50));
}

#projects-page {
    background-image: linear-gradient(to bottom, rgba(10,35,30,255), rgba(15,28,25,255));
}
    
</style>