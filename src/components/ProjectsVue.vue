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
                <ul class="account-dropdown container-flex column justify-content-left" id="account-dropdown-container">
                    <li class="container-flex"><RouterLink to="/user">Profile</RouterLink></li>
                    <li class="container-flex"><RouterLink to="/playlist/projects">Projects</RouterLink></li>
                    <li class="container-flex"><a href="./liaozhu.pdf" target="_blank">Resume</a></li>
                    <li class="container-flex"><a href="https://github.com/liaozhuzhu" target="_blank">Github</a></li>
                </ul>
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
        <MusicNav liked="true" />
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
                <div class="container-flex song-container" @mouseover="handleSongHover(projIndex)" @mouseleave="handleSongLeave(projIndex)">
                    <div class="container-flex song-header">
                        <p id="song-index-id" class="song-index">{{ projIndex + 1 }} </p>
                        <RouterLink :to="project.page" style="cursor: default"><fa id="playlist-song-play-icon" class="playlist-song-play" icon="fa-solid fa-play"/></RouterLink>
                        <img :src="require(`../../static/images/${project.src}`)"/>
                        <div class="container-flex column justify-content-left song-info">
                            <RouterLink :to="project.page" class="song-title" id="project-title-link">{{ project.title }}</RouterLink>
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
import MusicNav from "../components/MusicNav.vue";
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
    components: {
        MusicNav
    },
    methods: {
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
        togglePlaylistPopup() {
            let playlistPopup = document.getElementById("playlist-popup");
            playlistPopup.style.opacity=1;
        },
        closePlaylistPopup() {
            let playlistPopup = document.getElementById("playlist-popup");
            playlistPopup.style.opacity=0;
        },
        handleSongHover(index) {
            document.getElementsByClassName("playlist-song-play")[index].style.display="flex";
            document.getElementsByClassName("song-index")[index].style.opacity="0";
        },
        handleSongLeave(index) {
            document.getElementsByClassName("playlist-song-play")[index].style.display="none";
            document.getElementsByClassName("song-index")[index].style.opacity="0.6";
        }
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