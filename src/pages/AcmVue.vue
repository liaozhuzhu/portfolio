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
            <img src="../../static/images/acm.png"/>
            <div class="column">
                <p class="playlist-category">PLAYLIST</p>
                <h1 class="playlist-title">ACM</h1>
                <p class="playlist-desc">Association for Computing Machinery @ UIowa</p>
                <strong class="playlist-creator">Liao Zhu</strong>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://acm.org.uiowa.edu/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <fa class="song-like" icon="fa-regular fa-heart" />
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>ACM is a great place to learn about new advancements in the software world! At ACM, we learn more about classes, algorithm and data structure topics, LeetCode, and so much more.
            <br/>
            <br/>
            Many meetings consist of tech talks from professors and sometimes software engineers from tech companies. ACM has allowed me to meet so many new people and 
            see the many different places software can take you.
            <br/>
            <br/>
            Besides talking to some amazing people and friends, there is also pizza 🍕🍕🍕.
            </p>
      </div>
</div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - ACM"
    },
    data() {
        return {
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
    background-image: linear-gradient(to bottom, rgba(12,44,86,255), rgba(12,44,86,255));
}

#projects-header {
    background-image: linear-gradient(to bottom, rgba(12,44,86,255), rgba(9,27,51,255));
}

#projects-page {
    background-image: linear-gradient(to bottom, rgba(9,27,51,255), black);
}
    
</style>