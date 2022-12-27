<template lang="">
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
        <div class="container-flex justify-content-left playlist-header" id="liaozhu-header">
            <img src="../../static/images/home.png" style="object-fit: contain"/>
            <div class="column">
                <p class="playlist-category">PLAYLIST</p>
                <h1 class="playlist-title">Liao Zhu</h1>
                <p class="playlist-desc">View the different sections of my portfolio!</p>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <fa class="play-icon container-flex playlist-play" icon="fa-solid fa-pause" style="opacity: 1"/>
            <fa class="playlist-like" icon="fa-solid fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="playlist-keys container-flex">
            <div class="container-flex justify-content-left">
                <p class="key-index">#</p>
                <p class="key-title">TITLE</p>
            </div>
            <p class="key-album">ALBUM</p>
            <p class="key-time"><fa icon="fa-solid fa-clock"/></p>
        </div>
        <hr class="playlist-hr"/>
        <div class="playlist-songs">
            <div class="container-flex song-container">
                    <div class="container-flex song-header">
                        <p class="song-index">1</p>
                        <img src="../../static/images/home.png"/>
                        <div class="container-flex column justify-content-left song-info">
                            <RouterLink to="/" class="song-title">Home</RouterLink>
                            <div class="container-flex">
                                <p class="song-languages">Liao Zhu</p>
                            </div>
                        </div>
                    </div>
                    <RouterLink to="/" class="song-code">Open</RouterLink>
                    <p class="song-time">4:16</p>
            </div>
            <div class="container-flex song-container">
                    <div class="container-flex song-header">
                        <p class="song-index">2</p>
                        <img src="../../static/images/profile.png"/>
                        <div class="container-flex column justify-content-left song-info">
                            <RouterLink to="/user" class="song-title">Profile</RouterLink>
                            <div class="container-flex">
                                <p class="song-languages">About me</p>
                            </div>
                        </div>
                    </div>
                    <RouterLink to="/user" class="song-code">Open</RouterLink>
                    <p class="song-time">2:44</p>
            </div>
            <div class="container-flex song-container">
                    <div class="container-flex song-header">
                        <p class="song-index">3</p>
                        <img src="../../static/images/projects.png"/>
                        <div class="container-flex column justify-content-left song-info">
                            <RouterLink to="/playlist/projects" class="song-title">Projects</RouterLink>
                            <div class="container-flex">
                                <p class="song-languages">Vue,</p>
                                <p class="song-languages">JavaScript,</p>
                                <p class="song-languages">Python,</p>
                                <p class="song-languages">HTML/CSS,</p>
                                <p class="song-languages">Java</p>
                            </div>
                        </div>
                    </div>
                    <RouterLink to="/playlist/projects" class="song-code">Open</RouterLink>
                    <p class="song-time">1:52</p>
            </div>

            <div v-for="(section, index) in sections" :key="section.title">
                <div class="container-flex song-container">
                    <div class="container-flex song-header">
                        <p class="song-index">{{ index + 4 }}</p>
                        <img :src="require(`../../static/images/${section.src}`)"/>
                        <div class="container-flex column justify-content-left song-info">
                            <a :href="section.code" target="_blank" class="song-title">{{ section.title }}</a>
                            <div class="container-flex">
                                <p v-for="(language, index) in section.languages" :key="language" class="song-languages">{{ language[0] }}<span v-if="index != section.languages.length - 1">, </span></p>
                            </div>
                        </div>
                    </div>
                    <a :href="section.code" target="_blank" class="song-code">Open</a>
                    <p class="song-time">{{ section.time }}</p>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name: "LiaoZhu",
    created(){
        document.title = "Liao Zhu - Liao Zhu"
    },
    data() {
        return {
            sections: [
                {
                    title: "Resume",
                    src: "resume.png",
                    languages: [["Experiences"], ["Extracuriculars"], ["Courses"], ["Projects"]],
                    code: "../liaozhu.pdf",
                    time: "2:33",
                },
                {
                    title: "Github",
                    src: "github.png",
                    languages: [["Projects"], ["Code"], ["Deployments"]],
                    code: "https://github.com/liaozhuzhu",
                    time: "1:59",
                },
                {
                    title: "Linkedin",
                    src: "linkedin.png",
                    languages: [["Expereinces"], ["Skills"], ["Interests"]],
                    code: "https://www.linkedin.com/in/liao-zhu/",
                    time: "3:31"
                },
                {
                    title: "Email",
                    src: "email.png",
                    languages: [["Email Me"]],
                    code: "mailto:liao.zhu.cs@gmail.com",
                    time: "2:45"
                },
            ]
      }
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
    }
}
</script>
<style scoped>
    .topbar {
        background-image: linear-gradient(to bottom, rgba(118,132,148,255), rgba(102,114,127,255));
    }

    .section {
        background-image: linear-gradient(to bottom, rgba(48,54,60,255), rgba(39,42,47,255));
    }

    #liaozhu-header {
        background-image: linear-gradient(to bottom, rgba(102,114,127,255), rgba(64,73,81,255));
    }
</style>