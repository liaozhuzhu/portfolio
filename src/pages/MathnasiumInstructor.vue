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
                <h1 class="artist-title">Math Instructor</h1>
                <p class="artist-listeners">1,000,000 monthly listeners</p>
            </div>
        </div>
        <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" href="https://www.mathnasium.com/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <div class="artist-follow">FOLLOW</div>
            <div class="container-flex justify-content-left" id="elipsis" @mouseover="togglePlaylistPopup" @mouseleave="closePlaylistPopup">
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <fa icon="fa-solid fa-circle"/>
                <p id="playlist-popup">Haven't thought this far yet...</p>
            </div>
        </div>
        <div class="container-flex justify-content-left song-desc">
            <p>I worked at Mathnasium starting October 2021 to August 2022. Prior to being an instructor, I was a soccer referee. Though refereeing allowed me to gain so many valuable skills such as leadership, 
                teamwork, and critical-fast thinking, it was much more stressful compared to being an instructor at Mathnasium.
            <br/>
            <br/>
            I will never forget the kids I got to meet and had the honor of helping (and sometimes they even helped me when my math was rusty 😅). Being an instructor was a life lesson I'll always cherish. 
            The ability to balance both fun and learning to not just one kid, but numerous kids at a time, was a challenge. However, overcoming this hurdle felt amazing, and seeing end results was always the best.
            <br/>
            <br/>
            Working at Mathnasium also allowed me to see what working outside of a soccer field was like, and also how many of the skills still applied.
            <br/>
            <br/>
            The ability to be a leader was something I always struggled with. Growing up with an older brother, I found myself becoming very dependent on others.
            Putting myself in a teaching position and leading the learning was something I thank refereeing for, as it allowed me to become more confident in myself 
            to lead in the right direction.
            <br/>
            <br/>
            The second skill that was crucial for being an instructor, was teamwork. Teamwork and communication go hand in hand and are very important to leading an 
            effective group. At Mathnasium we always had a team of 3-4 instructors at a time, boosting efficiency and productivity for the students.
            <br/>
            <br/>
            I wish I had started working at Mathnasium sooner before I started college, as I wouldn't be as busy as I am now 😔. 
            </p>
      </div>
    </div>
</template>
<script>
export default {
    created() {
        document.title = "Liao Zhu - Mathnasium Instructor"
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
        background-image: linear-gradient(to bottom, red, black);
    }

    .artist-header {
        background-image: url("../../static/images/mathnasiumbanner.png");
    }
</style>