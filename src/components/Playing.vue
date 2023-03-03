<template>
    <div class="currently-playing-container">
        <div class="playing-container">
        <div class="playing-header">
            <span class="song-image-container" id="song-image-small">
                <img :src="`${src}`"/>
                <fa icon="fa-solid fa-angle-up" id="expand-song-image" class="toggle-song-image" @click="toggleLarge"/>
            </span>
            <span class="song-image-container-large" id="song-image-large">
                <img :src="`${src}`"/>
                <fa icon="fa-solid fa-angle-down" id="shrink-song-image" class="toggle-song-image" @click="toggleSmall"/>
            </span>
            <div class="container-flex column">
                <a target="_blank" :href="url"><h1>{{title}}</h1></a>
                <p><a target="_blank" :href="'https://www.last.fm/music/' + artist">{{ artist }}</a></p>
            </div>
            <fa icon="fa-regular fa-heart"></fa>
        </div>
        <div class="playing-body">
            <fa icon="fa-solid fa-shuffle"/>
            <fa class="icon-settings select-icon" icon="fa-solid fa-backward-step" />
            <fa class="icon-settings" icon="fa-solid fa-pause" v-if="isPlaying"/>
            <fa v-else class="icon-settings" icon="fa-solid fa-play"/>
            <fa class="icon-settings select-icon" icon="fa-solid fa-forward-step" />
            <fa icon="fa-solid fa-repeat" />
        </div>
        <div class="playing-footer">
            <fa icon="fa-solid fa-bars" class="select-icon-small select-icon" />
            <fa icon="fa-solid fa-headphones" />
            <fa id="volume-high" icon="fa-solid fa-volume-high" class="select-icon-small select-icon" @mouseover="toggleCircle" @mouseout="hideCircle"/>
            <div class="volume" id="volume-slider">
                <div id="volume-circle"></div>
            </div>
            <fa icon="fa-solid fa-up-right-and-down-left-from-center" class="select-icon select-icon-small"/>
        </div>
        </div>
        <div class="currently-playing" v-if="isPlaying">
            <p><fa icon="fa-solid fa-volume-high" /> Listening live</p>
        </div>
        <div class="navbar-mobile container-flex" style="display: none">
            <RouterLink to="/"><fa icon="fa-solid fa-home"></fa></RouterLink>
            <RouterLink to="/search"><fa icon="fa-solid fa-magnifying-glass"></fa></RouterLink>
            <RouterLink to="/playlist/content"><fa icon="fa-solid fa-bars"></fa></RouterLink>
        </div>
    </div>
</template>
<script>
import axios from "axios";
let tempTitle;
let tempArtist;
let tempSrc;
let tempUrl;
export default {
    name: "PlayingVue",
    data() {
        return {
            title: "",
            artist: "",
            src: "",
            url: "",
            isPlaying: true,
            volumeIsGreen: false,
        }
    },
    methods: {
        toggleCircle() {
            document.getElementById("volume-circle").style.opacity="1";
        },
        hideCircle() {
            document.getElementById("volume-circle").style.opacity = "0";
        },
        toggleLarge() {
            document.getElementById("song-image-small").style.display = "none";
            document.getElementById("song-image-large").style.display = "block";
        },
        toggleSmall() {
            document.getElementById("song-image-small").style.display = "block";
            document.getElementById("song-image-large").style.display = "none";
        },
        async getPlaying() {
            try {
                const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=liaozhuzhu&limit=5&extended=1&api_key=25edc6c4efea0c062a69a540f974de60&format=json');
                let track = response.data["recenttracks"]["track"];
                if ("@attr" in track[0]) {
                    this.title = track[0]['name'];
                    this.artist = track[0]['artist']['name'];
                    this.src = track[0]['image'][3]['#text'];
                    this.url = track[0]['url'];
                    this.isPlaying = true;
                    tempTitle = this.title;
                    tempArtist = this.artist;
                    tempSrc = this.src;
                    tempUrl = this.url;
                } else {
                    if (tempTitle == null) {
                        tempTitle = track[0]['name'];
                        tempArtist = track[0]['artist']['name'];
                        tempSrc = track[0]['image'][3]['#text'];
                        tempUrl = track[0]['url'];
                    }
                    this.title = tempTitle;
                    this.artist = tempArtist;
                    this.src = tempSrc;
                    this.url = tempUrl;
                    this.isPlaying = false;
                }
                
            } catch (error) {
                console.error(error);
            } 
        },     
    },
    created: function () {
        this.getPlaying();
        window.setInterval(() => {
            this.getPlaying();
        }, 1000);
    }
}
</script>
<style scoped>
a {
    color: white;
}
.currently-playing-container {
    color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 2;
}

.playing-container {
    background-color: rgba(24,23,24,255);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    position: relative;
}

.playing-header {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 58px;
    gap: 15px;
}

.playing-header div {
    gap: 5px;
    min-width: 100px;
    align-items: baseline;
}

.song-image-container {
    position: relative;
    width: 55px;
}

.song-image-container img {
    width: 100%;
}

.toggle-song-image {
    position: absolute;
    padding: 2px;
    font-size: 1.25rem;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    background-color: black;
    color: white;
    border-radius: 50%;
    top: 3px;
    right: 3px;
    transition: 0.1s;
    display: none;
}

.toggle-song-image:hover {
    opacity: 1;
    transform:scale(1.05);
}

.song-image-container-large {
    position: absolute;
    bottom: 95%;
    left: 0;
    display: flex;
    justify-content: right;
    align-items: top;
    display: none;
}

.song-image-container-large img {
    max-width: 250px;
    max-height: 250px;
}

.song-image-container-large:hover #shrink-song-image {
    display: block;
}

.song-image-container:hover #expand-song-image {
    display: block;
}

.playing-header h1 {
    font-size: 0.9rem;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
}

.playing-header h1:hover {
    text-decoration: underline;
}

.playing-header p {
    font-size: 0.7rem;
    opacity: 0.6;
}

.playing-header .fa-heart {
    opacity: 0.6;
}

.playing-header .fa-heart:hover {
    opacity: 1;
}

.playing-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 1rem;
    color: rgba(27,216,96,255);
}

.icon-settings {
    color: white;
    font-size: 1.5rem;
}

.select-icon {
    opacity: 0.6;
    transition: 0.05s;
    font-size: 1.3rem;
}

.select-icon:hover {
    opacity: 1;
}

.select-icon-small {
    font-size: 1rem;
}

.fa-pause {
    background-color: white;
    color: black;
    padding: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.fa-play {
    background-color: white;
    color: black;
    padding: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.fa-pause:hover {
    transform: scale(1.05);
}

.playing-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    gap: 15px;
}

.fa-headphones {
    color: rgba(27,216,96,255);
}

.volume {
    background-color: white;
    width: 100px;
    border-radius: 16px;
    height: 5px;
}

#volume-slider {
    display: flex;
    align-items: center;
    justify-content: right;
}

#volume-circle {
    background-color: white;
    width: 13.5px;
    height: 13.5px;
    border-radius: 50%;
    opacity: 0;
    transition: 0.05s;
}

#volume-high:hover + .volume {
    background-color: rgba(27, 216, 96, 255);
}

.currently-playing {
    background-color: rgba(27,216,96,255);
    color: black;
    width: 100%;
    text-align: right;
    font-size: 0.85rem;
    letter-spacing: 0.5px;;
    font-weight: 500;
    padding: 5px;
    padding-inline-end: 50px;
}

.navbar-mobile {
    justify-content: space-around;
    background-color: black;
    padding-block: 10px;
}

.navbar-mobile a {
    opacity: 0.6;
}

/* ===== Media Queries ===== */
@media screen and (max-width: 750px) {
  .playing-footer {
    display: none;
  }

  .select-icon {
    display: none;
  }

  .fa-shuffle {
    display: none;
  }

  .fa-repeat {
    display: none;
  }

  .fa-pause {
    color: white;
    background-color: inherit;
    width: 25px;
    height: 25px;
  }

  .fa-play {
    color: white;
    background-color: inherit;
    width: 25px;
    height: 25px;
  }

  .playing-header {
    max-height: 30px;
  }

  .playing-header img {
    border-radius: 4px;
    }
}
@media screen and (max-width: 1000px) {
    .playing-header h1{
    max-width: 200px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>