<template>
  <div>
    <Navbar/>
    <!-- <Topbar/> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar, 
  },
  data() {
    return {
    }
  },
  methods: {
  },
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
}

#account-dropdown-menu img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
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
  padding-left: 20px;
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
</style>