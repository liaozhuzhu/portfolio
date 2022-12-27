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
                <ul class="account-dropdown container-flex column justify-content-left" id="account-dropdown-container">
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
                <h1 class="artist-title">UIowa Web Intern</h1>
                <p class="artist-listeners">2,200 monthly listeners</p>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://engineering.uiowa.edu/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <div class="artist-follow">FOLLOW</div>
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>Starting since June 2022, I've been working as a web intern for UIowa's College of Engineering. 
            <br/>
            <br/>
            Ever since, I've worked on several projects, accumulating over 50+ pages and 3 complete sites for the school. Another part of the job
            is handling faculty ticket requests to update and handle new pages.
            <br/>
            <br/>
            For this internship, I use Drupal and the school's site builder - <a href="https://sitenow.uiowa.edu/" target="_blank">SiteNow</a>.
            <br/>
            <br/>
            To be completely honest, I find the lack of code unappealing. However, handling requests from faculty, and collaborating with the school to create pages is very
            fulfilling for the position.
            <br/>
            <br/>
            Starting Spring 2022, I will begin another position as a Software Web Developer for the school's <a href="https://its.uiowa.edu/" target="_blank">ITS</a> department.
            For this position, I will use VueJS frontend, with Java Spring Boot as the backend. I'm very excited to start this position as I've never used Spring Boot before, and because
            I get to code ( ๑‾̀◡‾́)(‾̀◡‾́ ๑).
            </p>
      </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - UIowa COE Web Intern"
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
        background-image: linear-gradient(to bottom, rgb(255, 239, 117), rgb(0, 0, 0));
    }

    .artist-header {
        background-image: url("../../static/images/uiowabanner.png");
    }
</style>