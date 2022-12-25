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
      </ul>
    </div>

    <div class="container-flex justify-content-left" id="profile-header">
      <img src="../../static/images/pfp.jpeg"/>
      <div class="container-block">
        <p>PROFILE</p>
        <h1 class="section-title">liaozhuu</h1>
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
          and am an incoming software engineer at <a href="https://www.collinsaerospace.com/" target="_blank">Collins Aerospace</a>.
          <br/>
          <br/>
          Some of my most proficient skills include Java, Python, and JavaScript. I have experience with Vue, React, Node, and SQL but have much more to learn!
          Currently, I am getting more experienced with Vue and so far I love it ❤️. What I don't love is CSS 👎.
          <br/>
          <br/>
          When I'm not watching anime, or playing with my younger brother, I'm coding and listening to music (thus why this site is inspired by <a href="https://open.spotify.com/" target="_blank">Spotify</a>).
          If you came to this page from the playlist card or the sidebar playlist link, I apologize. I know it's weird to have my "Spotify" profile linked from a playlist.
        </p>
      </div>
    </div>
    
</div>
</template>

<script>
    export default {
        name: "ProfileVue",
        created(){
            document.title = "Liao Zhu - Profile"
        },
        data() {
          return {
            aboutShowing: true,
            aboutShowingText: "Hide about me"
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
            console.log(this.accountIsShowing);
            if (this.accountIsShowing) {
              document.getElementById("caret-up").style.display="flex";
              document.getElementById("caret-down").style.display="none";
            } else {
              document.getElementById("caret-up").style.display="none";
              document.getElementById("caret-down").style.display="flex";
            }
          },

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
  outline: 5px solid red;
}

#profile-header {
  background-image: linear-gradient(to bottom, rgba(51,57,76,255),rgba(51,57,76,255),rgba(47, 50, 70, 230));
}

#profile-header img{
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(0rem 1rem 1rem rgb(21, 21, 23));
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
</style>