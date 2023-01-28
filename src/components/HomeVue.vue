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
          <li class="container-flex"><a href="https://github.com/liaozhuzhu" target="_blank">Github</a></li>
        </ul>
      </ul>
    </div>
    <div class="container-flex column" id="home-container">
      <h1 class="greeting">{{ greeting }}</h1>
      <div class="container-grid home-playlist-container">
        <RouterLink to="/playlist/content" class="container-flex" @mouseover="handleHover(1)" @mouseleave="handleLeave(1)">
          <img src="../../static/images/home.png"/>
          <h1 class="home-playlist-title">Content</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play"/>
        </RouterLink>
        <RouterLink to="/playlist/projects" class="container-flex" @mouseover="handleHover(2)" @mouseleave="handleLeave(2)">
          <img src="../../static/images/projects.png"/>
          <h1 class="home-playlist-title">Projects</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </RouterLink>
        <RouterLink to="/user" class="container-flex" @mouseover="handleHover(3)" @mouseleave="handleLeave(3)">
          <img src="../../static/images/profile.png"/>
          <h1 class="home-playlist-title">Profile</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </RouterLink>
        <a href="./liaozhu.pdf" target="_blank" class="container-flex" @mouseover="handleHover(4)" @mouseleave="handleLeave(4)">
          <img src="../../static/images/resume.png"/>
          <h1 class="home-playlist-title">Resume</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </a>
        <a href="https://github.com/liaozhuzhu" target="_blank" class="container-flex" @mouseover="handleHover(5)" @mouseleave="handleLeave(5)">
          <img src="../../static/images/github.png"/>
          <h1 class="home-playlist-title">Github</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </a>
        <a href="https://www.linkedin.com/in/liao-zhu/" target="_blank" class="container-flex" @mouseover="handleHover(6)" @mouseleave="handleLeave(6)">
          <img src="../../static/images/linkedin.png"/>
          <h1 class="home-playlist-title">Linkedin</h1>
          <fa class="play-icon container-flex" icon="fa-solid fa-play" />
        </a>
      </div>
    </div>
    <h1 class="section-title">Recently played</h1>
    <div class="container-grid profile-cards-container">
      <a :href="track.url" target="_blank" class="container-flex column justify-content-left profile-cards" v-for="track in recentTracks" :key="track.src">
        <img :src="`${ track.src }`"/>
        <div class="container-flex column justify-content-left">
          <h1>{{ track.title }}</h1>
          <p id="recent-artist">{{ track.artist }}</p>
        </div>
        <fa class="play-icon container-flex" id="track-play-icon" icon="fa-solid fa-play"/>
      </a>
    </div>
    <br/>
    <br/>
    <h1 class="section-title">Top Artists</h1>
    <div class="container-grid profile-cards-container">
      <a :href="artist.url" target="_blank" class="container-flex column justify-content-left profile-cards" v-for="artist in topArtists" :key="artist.src">
        <img :src="`${ artist.src }`"/>
        <div class="container-flex column justify-content-left">
          <h1>{{ artist.name }}</h1>
          <p id="recent-artist">Artist</p>
        </div>
        <fa class="play-icon container-flex" id="track-play-icon" icon="fa-solid fa-play"/>
       </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
        this.getAuth();
    },
    data() {
      return {
        accountIsShowing: false,
        timestamp: 0,
        greeting: "",
        recentTracks: [],
        topArtists: []
      }
    },
    methods: {
      async getAuth() {
      try {
        const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=liaozhuzhu&limit=6&api_key=25edc6c4efea0c062a69a540f974de60&format=json', {
          headers: {
            'Accept': 'application/json;odata=verbose',
        }
        });
        const artistResponse = await axios.get('https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=liaozhuzhu&limit=5&api_key=25edc6c4efea0c062a69a540f974de60&format=json', {
          headers: {
            'Accept': 'application/json;odata=verbose',
          }
        });
        let track = response.data["recenttracks"]["track"];
        let artist = artistResponse.data["topartists"]["artist"];
        for (let i = 1; i < track.length; i++) {
          this.recentTracks.push({
            title: track[i]['name'],
            artist: track[i]['artist']['#text'],
            src: track[i]['image'][3]['#text'], 
            url: track[i]['url'],
          }) 
        }
        for (let i = 0; i < artist.length; i++) {
          this.topArtists.push({
            name: artist[i]['name'],
            src: artist[i]['image'][3]['#text'],
            url: artist[i]['url']
          })
        }
      } catch (error) {
        console.error(error);
      }
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
.home-playlist-title {
  padding-left: 20px;
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
  width: 200px;
  margin-bottom: 20px;
}

.profile-cards h1 {
  width: 150px;
  display: inline-block;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-inline-start: 20px;
}

.profile-cards p {
  opacity: 0.6;
  font-size: 0.8rem;
  color: white;
}

#track-play-icon {
  position: absolute;
  opacity: 1;
  right: 0px;
  bottom: 100px;
  opacity: 0;
  transition: 0.2s ease-in;
}

.profile-cards:hover #track-play-icon {
  opacity: 1;
}

@media screen and (max-width: 1040px) {
  .home-playlist-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-right: 25px;
  }
}
</style>
