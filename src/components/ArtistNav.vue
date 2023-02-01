<template>
    <div class="container-flex justify-content-left playlist-settings">
            <a target="_blank" :href="link"><fa class="play-icon container-flex playlist-play" icon="fa-solid fa-play" style="opacity: 1"/></a>
            <div class="artist-follow">FOLLOW</div>
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
        link: String
    }
}
</script>
<style>
</style>