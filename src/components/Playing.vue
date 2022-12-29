<template>
    <div class="currently-playing-container">
        <div class="playing-container">
        <div class="playing-header">
            <img :src="`${ src }`"/>
            <div class="container-flex column">
                <a target="_blank" href="url"><h1>{{title}}</h1></a>
                <p>{{ artist }}</p>
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
            <fa icon="fa-solid fa-bars" />
            <fa icon="fa-solid fa-headphones" />
            <fa id="volume-high" icon="fa-solid fa-volume-high"/>
            <div class="volume" id="volume-slider"></div>
            <fa icon="fa-solid fa-up-right-and-down-left-from-center"/>
        </div>
        </div>
        <div class="currently-playing" v-if="isPlaying">
            <p><fa icon="fa-solid fa-volume-high" /> Listening live on Liao's Headphones</p>
        </div>
        <div class="navbar-mobile container-flex" style="display: none">
            <RouterLink to="/"><fa icon="fa-solid fa-home"></fa></RouterLink>
            <RouterLink to="/user"><fa icon="fa-solid fa-magnifying-glass"></fa></RouterLink>
            <RouterLink to="/playlist/projects"><fa icon="fa-solid fa-bars"></fa></RouterLink>
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
        async getPlaying() {
            try {
                const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=liaozhuzhu&api_key=25edc6c4efea0c062a69a540f974de60&format=json');
                let track = response.data["recenttracks"]["track"];
                if ("@attr" in track[0]) {
                    this.title = track[0]['name'];
                    this.artist = track[0]['artist']['#text'];
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
                        tempArtist = track[0]['artist']['#text'];
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
        }, 500);
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
}

.playing-header {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    gap: 15px;
}

.playing-header div {
    gap: 5px;
    min-width: 100px;
    align-items: baseline;
}

.playing-header img {
    width: 55px;
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
    transition: 0.2s;
    font-size: 1.3rem;
}

.select-icon:hover {
    opacity: 1;
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