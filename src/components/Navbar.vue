<template>
    <div class="navbar">
        <RouterLink to="/" class="container-flex justify-content-left" id="home-logo"><img src="../../static/images/sig.png"/> <h1 class="container-flex">Liao Zhu<p style="font-size: 0.3rem">®</p></h1></RouterLink>
        <ul class="navbar-list">
            <RouterLink to="/" class="container-flex justify-content-left active"><fa class="sidebar-icon" icon="fa-solid fa-home"/> <p class="sidebar-link">Home</p></RouterLink>
            <RouterLink to="/user" class="container-flex justify-content-left"><fa class="sidebar-icon" icon="fa-solid fa-magnifying-glass"/> <p class="sidebar-link">Search</p></RouterLink>            
            <RouterLink to="/playlist/projects" class="container-flex justify-content-left"><fa class="sidebar-icon" icon="fa-solid fa-bars" /> <p class="sidebar-link">Your Library</p></RouterLink>
            <br/>
            <br/>   
            <div class="navbar-inner">
                <div class="container-flex justify-content-left extra-icon"><span class="container-flex extra-icon-bg" id="create-playlist"><fa class="fa-extra" icon="fa-solid fa-plus" /></span> Create Playlist</div>
                <div class="container-flex justify-content-left extra-icon"><span class="container-flex extra-icon-bg" id="liked-songs"><fa class="fa-extra" icon="fa-solid fa-heart" /></span> Liked Songs</div>
            </div>
        </ul>
        <br/>
        <div class="horizontal-line"></div>
        <br/>
        <ul class="navbar-list" id="playlist-list">
            <RouterLink to="/playlist/liao-zhu">Liao Zhu</RouterLink>
            <RouterLink to="/user">Profile</RouterLink>
            <RouterLink to="/playlist/projects">Projects</RouterLink>
            <a href="../liaozhu.pdf" target="_blank">Resume</a>
            <a href="https://github.com/liaozhuzhu" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/liao-zhu/" target="_blank">Linkedin</a>
        </ul>
    </div>
</template>
<script>

export default {
    name: "NavbarVue",
}
</script>

<style>
</style>