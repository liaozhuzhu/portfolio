<template>
<div class="section full-height" id="profile-page">
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

    <div class="container-flex justify-content-left" id="profile-header">
      <img src="../../static/images/pfp.jpeg"/>
      <div class="container-block">
        <p>PROFILE</p>
        <h1 class="section-title profile-title">liaozhuu</h1>
      </div>
    </div>
    <div class="container-block justify-content-left" id="profile-body">
      <div class="container-flex justify-content-left" id="elipsis" @click="toggleAbout" @mouseover="toggleAboutPopup" @mouseleave="closeAboutPopup">
        <fa icon="fa-solid fa-circle"/>
        <fa icon="fa-solid fa-circle"/>
        <fa icon="fa-solid fa-circle"/>
        <p id="about-popup">{{aboutShowingText}}</p>
      </div>
      <div class="container-flex justify-content-left" id="profile-about">
        <p>My name is Liao Zhu. I am pursuing a Computer Science degree at the University of Iowa. Currently, I am a web intern for the College of Engineering
          and am an incoming software engineering intern at <a href="https://www.collinsaerospace.com/" target="_blank">Collins Aerospace</a>.
          <br/>
          <br/>
          Some of my most proficient skills include Java, Python, and JavaScript. I have experience with Vue, React, Node, and SQL but have much more to learn!
          Currently, I am getting more experienced with Vue and so far I love it ❤️. What I don't love is CSS 👎.
          <br/>
          <br/>
          When I'm not watching anime, or playing with my younger brother, I'm coding and listening to music (thus why this site is inspired by <a href="https://open.spotify.com/" target="_blank">Spotify</a>).
          By the way, the currently playing song bar below is 100% accurate (from details, to pausing and playing, etc.) and live updates on its own. This way everyone can see what type of music I enjoy throughout my day!
        </p>
      </div>
    </div>
    <h1 class="profile-section-title">Experience</h1>
    <div class="container-grid profile-cards-container">
      <RouterLink :to="ex.href" class="container-flex column justify-content-left profile-cards" v-for="ex in experiences" :key="ex.src" @mouseover="togglePlayButton" @mouseleave="togglePlayButton">
        <img :src="require(`../../static/images/${ex.src}`)"/>
        <div class="container-flex column justify-content-left profile-cards-inner">
          <h1>{{ ex.title }}</h1>
          <p>{{ ex.artist }}</p>
        </div>
        <fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play"/>
      </RouterLink>
    </div>
    <br/>
    <h1 class="profile-section-title">Extracurriculars</h1>
    <div class="container-grid profile-cards-container">
      <RouterLink :to="ec.href" class="container-flex column justify-content-left profile-cards" v-for="ec in extracurriculars" :key="ec.src" @mouseover="togglePlayButton" @mouseleave="togglePlayButton">
          <img :src="require(`../../static/images/${ec.src}`)" class="ec-image"/>
          <div class="container-flex column justify-content-left profile-cards-inner ec-desc">
            <h1>{{ ec.title }}</h1>
            <p>{{ ec.artist }}</p>
          </div>
          <fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play"/>
      </RouterLink>
    </div>
</div>
</template>

<script>
  import { experiences } from '../experiences.js';
  import { extracurriculars } from '../extracurriculars.js';
    export default {
        name: "ProfileVue",
        created(){
            document.title = "Liao Zhu - Profile"
        },
        data() {
          return {
            aboutShowing: true,
            aboutShowingText: "Hide about me",
            experiences: experiences,
            extracurriculars: extracurriculars,
            playBtnShowing: false,
          }
        },
        methods: {
          toggleAbout() {
            let about = document.getElementById("profile-about");
            if (this.aboutShowing) {
              about.style.display="none";
              this.aboutShowingText = "Show about me";
            } else {
              this.aboutShowingText = "Hide about me";
              about.style.display="flex";
            }
            this.aboutShowing = !this.aboutShowing;
          },
          toggleAboutPopup() {
            let aboutPopup = document.getElementById("about-popup");
            aboutPopup.style.opacity=1;
          },
          closeAboutPopup() {
            let aboutPopup = document.getElementById("about-popup");
            aboutPopup.style.opacity=0;
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
          togglePlayButton() {
            if (!this.playBtnShowing) {
              this.playBtnShowing = true;
            }
          }

        }
    }
</script>

<style scoped>
.topbar {
    background-image: none;
    background-color: rgba(51,57,76,255);
}

#profile-page {
  background-image: linear-gradient(to bottom, rgb(50, 60, 78), rgb(0, 0, 0));
}

#profile-header {
  background-image: linear-gradient(to bottom, rgba(51,57,76,255),rgba(51,57,76,255),rgba(47, 50, 70, 230));
}

#profile-header img{
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(0rem 0rem 1rem rgb(21, 21, 23));
  margin: 30px;
}

#profile-header p {
  font-size: 0.7rem;
  font-weight: bold;
  margin: 3px;
}

#profile-header h1 {
  font-size: 6rem;
  letter-spacing: -4px;
  margin: 0;
}

#profile-body div {
  opacity: 0.8;
  font-size: 0.25rem;
  gap: 5px;
  margin: 30px;
}

#elipsis {
  opacity: 0.8;
  width: 25px;
  height: 10px;
  position: relative;
}

#elipsis:hover {
  opacity: 1;
}

#about-popup{
  font-size: 0.9rem;
  position: absolute;
  width: 120px;
  bottom: 50;
  background-color: rgb(36, 36, 36);
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  left: -50px;
  top: -50px;
  opacity: 0;
  transition: 0.3s ease-in;
}

#profile-about p {
  font-size: 1.1rem;
}

#profile-body a {
  color: white;
  text-decoration:underline;
  transition: 0.2s;
}

#profile-body a:hover {
  color: lightblue;
}

.profile-section-title {
  margin: 25px;
  font-size: 1.5rem;
}

.profile-cards-container {
  grid-gap: 0;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 100px));
  grid-gap: 25px;
  padding-left: 20px;
  justify-content: left;
  width: 100%;
}

.profile-cards {
  background-color: rgba(24,25,24,255);
  border-radius: 6px;
  gap: 25px;
  transition: 0.25s ease-in;
  position: relative;
}

.profile-cards:hover {
  background-color: #7d7d7d40!important;
}

.profile-cards img{
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 0px;
  margin-right: 0px;
  filter: drop-shadow(0rem 1rem 1rem rgb(21, 21, 23));
}

.profile-cards div {
  gap: 10px;
  align-items: baseline;
  width: 100%;
  margin-inline-start: 20px;
  margin-bottom: 20px;
}

.profile-cards h1 {
  font-size: 0.9rem;
  padding: none;
}

.profile-cards p {
  opacity: 0.6;
  font-size: 0.8rem;
  color: white;
}

.play-icon {
  position: absolute;
  opacity: 1;
  right: 20px;
  bottom: 100px;
  opacity: 0;
  transition: 0.2s ease-in;
}

.profile-cards:hover .play-icon {
  opacity: 1;
}

.ec-image {
  border-radius: 6px !important;
} 

.ec-desc {
  margin-bottom: 35px !important;
}
</style>