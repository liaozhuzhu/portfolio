<template>
  <div class="section full-height">
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
          <li class="container-flex"><a href="https://github.com/liaozhuzhu">Github</a></li>
        </ul>
      </ul>
    </div>
    <div class="container-flex column" id="home-container">
      <h1 class="greeting">{{ greeting }}</h1>
      <div class="container-grid">
        <RouterLink to="/playlist/liao-zhu" class="container-flex">
          <img src="../../static/images/home.png"/>
          <h1>Liao Zhu</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-pause" style="opacity: 1"/>
        </RouterLink>
        <RouterLink to="/user" class="container-flex" @mouseover="handleHover(2)" @mouseleave="handleLeave(2)">
          <img src="../../static/images/profile.png"/>
          <h1>Profile</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </RouterLink>
        <RouterLink to="/playlist/projects" class="container-flex" @mouseover="handleHover(3)" @mouseleave="handleLeave(3)">
          <img src="../../static/images/projects.png"/>
          <h1>Projects</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </RouterLink>
        <a href="./liaozhu.pdf" target="_blank" class="container-flex" @mouseover="handleHover(4)" @mouseleave="handleLeave(4)">
          <img src="../../static/images/resume.png"/>
          <h1>Resume</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </a>
        <a href="https://github.com/liaozhuzhu" target="_blank" class="container-flex" @mouseover="handleHover(5)" @mouseleave="handleLeave(5)">
          <img src="../../static/images/github.png"/>
          <h1>Github</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </a>
        <a href="https://www.linkedin.com/in/liao-zhu/" target="_blank" class="container-flex" @mouseover="handleHover(6)" @mouseleave="handleLeave(6)">
          <img src="../../static/images/linkedin.png"/>
          <h1>Linkedin</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        document.title = "Liao Zhu - Web Player"
        const today = new Date();
        const timeString = today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false });
        this.timestamp = parseInt(timeString);
        if (this.timestamp >= 6 && this.timestamp < 12) {
          this.greeting = "Good morning";
        } else if (this.timestamp >= 12 && this.timestamp < 18) {
          this.greeting = "Good afternoon";
        } else {
          this.greeting = "Good evening";
        }
    },
    data() {
      return {
        accountIsShowing: false,
        timestamp: 0,
        greeting: "",
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
      handleHover(card) {
        for (let i = 0; i < document.getElementsByClassName("play-icon").length; i++) {
          if (card-1 == i) {
            document.getElementsByClassName("play-icon")[i].style.opacity=1;
          }
        }
      },
      handleLeave(card) {
        for (let i = 0; i < document.getElementsByClassName("play-icon").length; i++) {
          if (card-1 == i) {
            document.getElementsByClassName("play-icon")[i].style.opacity=0;
          }
        }
      }
    },
}
</script>

<style scoped>
.container-grid a h1 {
  padding-left: 20px;
}
</style>
