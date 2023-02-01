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
                <ul class="account-dropdown container-flex column justify-content-left ex-account-dropdown" id="account-dropdown-container">
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
                <h1 class="artist-title">AIS SWE Intern</h1>
                <p class="artist-listeners">January 2023 - Present</p>
            </div>
        </div>

        <ArtistNav link="https://its.uiowa.edu/about/ais"/>
        
        <div class="container-flex justify-content-left song-desc">
            <p>Recently, I've started as a Software Engineering Intern for my school's <a href="https://its.uiowa.edu/about/ais" target="_blank">ITS - Administrative System Information department</a>.
            <br/>
            <br/>
            For this position, I put my Java and JavaScript skills to the test. Hopefully I will be able to learn how to integrate my code with AWS features.
            <br/>
            <br/>
            Not much to be said for this position as I am just starting, but stay tuned for constant updates as I get more experience with this position!
            </p>
      </div>
    </div>
</template>
<script>
import ArtistNav from "../components/ArtistNav.vue";

export default {
    created() {
        document.title = "Liao Zhu - ITS Administrative Information Systems Software Engineering Intern"
    },
    components: {
        ArtistNav,
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
    }
    
}
</script>
<style scoped>
    .section {
        background-image: linear-gradient(to bottom, rgb(255, 239, 117), rgb(0, 0, 0));
    }

    .artist-header {
        background-image: url("../../static/images/itsbanner.png");
    }
</style>