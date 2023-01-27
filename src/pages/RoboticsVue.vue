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
            <img src="../../static/images/robotics.png"/>
            <div class="column">
                <p class="playlist-category">PLAYLIST</p>
                <h1 class="playlist-title">Robotics</h1>
                <p class="playlist-desc">Robotics at Iowa</p>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <MusicNav />
        <div class="container-flex justify-content-left song-desc">
            <p>I joined the robotics team at Iowa starting my Sophmore year. During this time, I've managed to implement a GPS map visualizer using Google Maps Api.
            <br/>
            <br/>
            This system displays the team's rover and it's destination point on the map, allowing for either point to be updated at any time.
            Robotics at Iowa has been my first experience working on code that I didn't start. Not only that, but working with a team on a single code base was also a new experience 
            that I had to get used to.
            <br/>
            <br/>
            Collaborating and communication are key aspects to success on the Robotics team. To view our progress visit this <a href="https://github.com/roboticsatiowa/UIRobotics" target="_blank">repo</a>.
            </p>
      </div>
</div>
</template>
<script>
import MusicNav from "../components/MusicNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - Robotics"
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
    }
}
</script>
<style scoped>
.topbar {
    background-image: linear-gradient(to bottom, rgba(18,102,116,255), rgba(18,102,116,255));
}

#projects-header {
    background-image: linear-gradient(to bottom, rgba(18,102,116,255), rgba(12,59,68,255));
}

#projects-page {
    background-image: linear-gradient(to bottom, rgba(12,59,68,255), black);
}
    
</style>