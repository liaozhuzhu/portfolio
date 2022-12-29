<template>
  <div>
    <Playing/>
    <Navbar v-if="!$route.meta.hideNav"/>
    <!-- <Topbar/> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Playing from "@/components/Playing.vue";
export default {
  name: 'App',
  components: {
    Navbar, 
    Playing
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    console.log(this.$route.meta.hideNav);
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

.container-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
}

.full-height {
  min-height: 100vh;
}

.evenly {
  justify-content: space-evenly;
}

.section {
  margin-left: 300px;
  background-image: linear-gradient(to bottom right, rgb(34, 18, 54), rgb(17, 11, 20),rgb(10, 10, 10));
  color: white;
  padding-bottom: 130px;
}

.justify-content-left {
  justify-content: left;
}

.navbar {
  list-style-type: none;
  min-width: 300px;
  background-color: black;
  position: fixed;
  height: 100%;
  overflow: auto;
  color: white;
}

.navbar-inner {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

#home-logo {
  color: white;
  margin: 30px;
  gap: 4px;
}

.navbar-list {
  margin-inline: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navbar img {
  width: 37.5px;
}

.navbar-list a {
  color: white;
  opacity: 0.8;
  transition: 0.2s;
}

.navbar-list a:hover {
  opacity: 1;
}

.navbar-list a.active {
  opacity: 1;
}

.navbar-list a p{
  display: block;
  padding: 8px 16px;
}

.extra-icon-bg {
    background-color: lightgrey;
    width: 25px;
    height: 25px;
    border-radius: 2px;
}

#liked-songs {
    background-image: linear-gradient(to bottom right, rgb(45, 29, 188), rgb(171, 174, 250), rgb(186, 223, 231));
}

.fa-extra {
    color: black;
    font-size: .9rem;
}

.sidebar-icon {
    font-size: 1.4rem;
    opacity: 0.8;
}

.sidebar-link {
    font-size: 0.9rem;
}

.extra-icon {
    gap: 15px;
    cursor: pointer;
    opacity: 0.75;
    transition: 0.2s ease-in;
}

.extra-icon:hover {
    opacity: 1;
}

.fa-heart {
    color: white;
}

.horizontal-line {
    background-color: rgb(68, 68, 68);
    height: 0.04px;
    margin-inline: 30px;
}

#playlist-list {
  font-size: 0.85rem;
  gap: 20px;
}

#playlist-list a {
  opacity: 0.8;
  transition: none;
}

#playlist-list a:hover {
  opacity: 1;
}

/* ==== Top Nav Bar ===== */
.topbar {
  position: sticky;
  z-index: 1030;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, rgb(68, 41, 98), rgb(2, 0, 4),rgb(61, 27, 74));
  color: white;
  padding: 15px;
  padding-inline: 20px;
}

.topbar ul {
  margin-left: auto;
}

#account-dropdown-menu {
  font-size: 0.4rem;
  gap: 10px;
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 4px;
  padding-left: 3px;
  padding-right: 8px;
  cursor: pointer;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
}

#account-dropdown-menu img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}

.account-dropdown {
  position: absolute;
  background-color: rgb(30, 30, 30);
  top: 100%;
  right: 0;
  width: 200px;
  border-radius: 6px;
  align-items: baseline;
  padding: 5px;
  justify-content: space-evenly;
  font-size: 0.9rem;
  cursor: default;
  height: 200px;
  display: none;
}

.account-dropdown li {
  width: 100%;
  opacity: 0.8;
}

.account-dropdown li:hover {
  background-color: #99999940 !important;
  opacity: 1;
}

.account-dropdown a {
  display: flex;
  gap: 8px;
  height: 40px;
  justify-content: space-between;
  padding: 12px;
  padding-inline-end: 8px;
  position: relative;
  text-align: start;
  cursor: default;
  color: white;
  width: 100%;
}

.ex-account-dropdown {
  top: 50px;
  right: 20px;
}

.fa-caret-up {
  font-size: 1rem;
}

.fa-caret-down {
  font-size: 1rem;
}

.angle-container {
  gap: 20px;
}

.fa-angle {
  background-color: black;
  height: 20px;
  width: 20px;
  padding: 5px;
  border-radius: 16px;
  cursor: pointer;
}

/* ===== Home Body ===== */

.greeting {
  text-align: left;
  padding-left: 20px;
  width: 100%;
  margin-top: 20px;
  font-size: 1.8rem;
}

.container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 100px));
    grid-gap: 25px;
    margin: 25px;
    padding-left: 20px;
    justify-content: left;
    width: 100%;
}

.container-grid a {
  background-color: rgb(49,49,49);
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
}

.container-grid a:hover {
  background-color: rgb(92, 92, 92);
}

.container-grid a h1 {
  color: white;
  font-weight: 550;
  letter-spacing: 0.8px;
  font-size: 0.9rem;
}

.container-grid a img {
  width: 85px;
  height: 85px;
  object-fit: cover;
  border-radius: 6px 0px 0px 6px;
}

.play-icon {
  margin-left: auto;
  margin-right: 15px;
  background-color: rgba(27,215,96,255);
  color: black;
  padding: 17px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0;
  transition: 0.25s;
}

.play-icon:hover {
  transform: scale(1.02);
}

.section-title {
  margin: 25px;
  font-size: 1.4rem;
}

/* ===== Playlist ===== */
.playlist-header div{
  height: 230px;
  display: flex;
}

.playlist-category{
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.playlist-title {
  font-size: 6rem;
  margin-left: -7px;
}

.playlist-desc {
  font-size: 1rem;
  color: rgb(194, 194, 194);
  margin-top: auto;
}

.playlist-creator {
  font-size: 0.95rem;
  margin-top: 15px;
}

.playlist-header img{
  width: 230px;
  height: 230px;
  object-fit: cover;
  filter: drop-shadow(0rem 1rem 1rem rgb(21, 21, 23));
  margin: 30px;
}

.playlist-play {
  margin: 0;
}

.playlist-play:hover {
  transform: scale(1.02);
}

.playlist-settings {
  justify-content: flex-start;
  margin: 30px;
  gap: 30px;
}

.playlist-like {
  color: rgba(27,215,96,255);
  font-size: 2rem;
}

.playlist-like:hover {
  color: rgba(27, 250, 0, 10);
}

#elipsis {
  opacity: 0.5;
  width: 25px;
  height: 10px;
  position: relative;
  font-size: 0.3rem;
  gap: 5px;
}

#elipsis:hover {
  opacity: 1;
}

#playlist-popup{
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

.playlist-keys {
  margin-left: 40px;
  margin-right: 30px;
  justify-content: space-evenly;
  padding: 10px;
  padding-right: 30px;
  border-radius: 6px;
  opacity: 0.6;
  font-size: 0.8rem;
}

.playlist-keys div {
  margin-right: auto;
  gap: 15px;
  width: 370px;
  justify-content: left;
}

.key-album {
  margin-left: auto;
}

.key-time {
  margin-left: auto;
}

.playlist-hr {
  opacity: 0.2;
  margin-bottom: 10px;
  margin-left: 40px;
  margin-right: 30px;
}

.playlist-songs {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: left;
  width: 100%;
}

.song-container {
  margin-left: 40px;
  margin-right: 30px;
  justify-content: space-evenly;
  padding: 10px;
  padding-right: 30px;
  border-radius: 6px;
  position: relative;
}

.playlist-song-play {
  color: white;
  font-size: 0.8rem;
  position: absolute;
  top: 40%;
  left: 10px;
  display: none;
}

.song-header {
  margin-right: auto;
  gap: 15px;
}

.song-index {
  opacity: 0.6;
  font-size: 1.1rem;
}

.song-container:hover{
  background-color: #99999940!important;
}

.song-container:hover > * {
  opacity: 1;
}

.song-container:hover .song-info div > * {
  opacity: 1;
}

.song-info {
  width: 300px;
  align-items: baseline;
  gap: 10px;
}

.song-info div {
  gap: 5px;
}

.song-code {
  color: white;
  margin-left: auto;
  opacity: 0.6;
  font-size: 0.8rem;
}

.song-code:hover {
  opacity: 1;
  text-decoration: underline;
}

.song-header img {
  width: 45px;
  height: 45px;
  object-fit: cover;
}

.song-time {
  margin-left: auto;
  opacity: 0.6;
}

.song-title {
  color: white;
}

.song-languages {
  font-size: 0.8rem;
  margin-top: auto;
  opacity: 0.6;
  cursor: pointer;
}

.song-languages:hover {
  opacity: 1;
  text-decoration: underline;
}

.song-title:hover {
  text-decoration: underline;
}

/* ===== Song Pages ===== */
.song-topbar {
  background-image: none;
  background-color: black;
}

.song-page-header div{
  height: 230px;
  display: flex;
}

.song-page-header div p{
  margin-top: auto;
}

.song-page-header img{
  width: 230px;
  height: 230px;
  object-fit: cover;
  filter: drop-shadow(0rem 0rem 1rem rgb(21, 21, 23));
  margin: 30px;
}

.song-like {
  color: white;
  opacity: 0.6;
  font-size: 2rem;
}

.song-like:hover {
  opacity: 1;
}

.song-desc {
  font-size: 1.1rem;
  margin: 25px;
}

.song-desc a {
  color: white;
  text-decoration:underline;
  transition: 0.2s;
}

.song-desc a:hover {
  color: lightblue;
}

/* ===== Artist Pages ===== */
.artist-intro-header {
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.artist-intro-header div {
  margin-top: auto;
  gap: 10px; 
}

.fa-square-check {
  color: rgba(62,145,244,255);
  font-size: 1.5rem;
}

.artist-intro-header div p{
  font-size: 0.9rem;
}

.artist-title {
  font-size: 6rem;
  margin-left: -7px;
  margin-bottom: 15px;
}

.artist-listeners {
  margin-bottom: 30px;
}

.artist-header {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 25px;
}

.artist-header .topbar {
    width: 100%;
}

.artist-header .topbar {
    background-color: transparent;
}

.artist-follow {
  border: 1px solid grey;
  padding: 9px;
  padding-inline: 15px;
  font-size: 0.7rem;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: default;
}

.artist-follow:hover {
  border: 1px solid white;
}

/* ===== Media Queries ===== */
@media screen and (max-width: 1050px) {
  .song-info {
    width: 200px;
  }
  .playlist-keys div {
    width: 270px;
  }
  #profile-header h1 {
    font-size: 4rem !important;
    letter-spacing: 0px !important;
  }

  #profile-header img {
    width: 200px !important;
    height: 200px !important;
  }

  .song-page-header .playlist-category {
    display: none;
  }

  .song-page-header h1 {
    font-size: 4rem !important;
    width: 400px;
  }
}

@media screen and (max-width: 850px) {
  .navbar {
    display: none;
  }

  .navbar-mobile {
    display: flex !important;
  }

  .currently-playing {
    display: none;
  }

  .section {
    width: 100%;
    margin: 0;
  }

  .profile-cards-container {
    display: flex !important;
    overflow: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  .profile-cards-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  .song-page-header {
    flex-direction: column;
    padding: 25px;
  }

  .artist-header {
    background-attachment: scroll !important;
  }
}

@media screen and (max-width: 700px) {
  .playlist-header {
    flex-direction: column !important;
  }

  .playlist-title {
    font-size: 5rem;
    width: 330px;
  }

  .playlist-desc {
    display: none;
  }

  .playlist-category {
    display: none;
  }

  .song-time {
    display: none;
  }

  .playlist-keys {
    display: none;
  }

  .playlist-hr {
    display: none;
  }

  .song-index {
    display: none;
  }
  
  .playlist-song-play {
    display: none !important;
  }

  .song-container {
    margin: 0 !important;
  }

  /* .song-header {
    max-width: 50%;
  } */

  .song-info {
    max-width: 100px;
  }

  .song-info a {
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .song-info div {
    overflow: scroll;
    text-decoration: none;
    text-overflow: ellipsis;
    justify-content: left;
    width: 200px;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  .song-info div::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  .song-info div p {
    white-space: nowrap;
    font-size: 0.7rem;
  }

  .artist-title {
    font-size: 4rem !important;
  }

  /* ==== Profile ===== */

  .profile-cards-container {
    overflow: scroll;
  }

  #profile-header p {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  #profile-header img {
    width: 100px !important;
    height: 100px !important;
    border-radius: 0px !important;
    object-fit: cover !important;
    border-radius: 50% !important;
    margin-right: 0px !important;
  }

  #profile-header h1 {
    font-size: 1.5rem !important; 
    letter-spacing: 0px !important;
    margin: 25px !important;
  }

  .song-page-header h1 {
    font-size: 3.5rem !important;
    width: 300px;
  }
}
</style>