<template>
    <div class="container-flex justify-content-left playlist-settings">
        <a target="_blank" href="https://acm.org.uiowa.edu/"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
        <fa v-if="liked" class="playlist-like" icon="fa-solid fa-heart" />
        <fa v-else class="song-like" icon="fa-regular fa-heart" />
        <div class="container-flex justify-content-left" id="elipsis">
            <fa icon="fa-solid fa-circle"/>
            <fa icon="fa-solid fa-circle"/>
            <fa icon="fa-solid fa-circle"/>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        liked: Boolean
    }
}
</script>