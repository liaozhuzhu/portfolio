<template>
    <div class="section full-height">
        <div class="container-flex topbar">
            <div class="container-flex angle-container">
                <fa class="fa-angle" icon="fa-solid fa-angle-left" @click="this.$router.go(-1)"/>
                <fa class="fa-angle" icon="fa-solid fa-angle-right" @click="this.$router.go(1)"/>
            </div>
            <div class="container-flex search-input-container">
                <fa icon="fa-solid fa-magnifying-glass"></fa>
                <input v-model="searchText" placeholder="What do you want to view?" autofocus class="search-input"/>
            </div>
            <ul class="container-flex search-account-dropdown" id="account-dropdown-menu" @click="toggleAccountDropdown">
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
        <h1 v-if="searchText.length > 0" class="section-title" id="search-section-title">Results</h1>
        <div class="search-card-container">
            <div v-for="page in pages" :key="page.href">
                <p v-if="page.pageTitle.includes(searchText.replace(/\s/g, '')) && searchText != ''">
                    <a v-if="'target' in page.href[0]" target="_blank" :href="page.href[0].url" class="search-card">
                        {{ page.href[0].title }}
                    </a>
                    <RouterLink v-else :to="key.url" v-for="key in page.href" :key="key.url" class="search-card">
                            {{key.title}}
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {searchPages} from "../searchPages.js";
export default {
    name: "LiaoZhu",
    created(){
        document.title = "Liao Zhu - Search"
    },
    data() {
        return {
            searchText: "",
            pages: searchPages
        }
    }
}
</script>
<style scoped>
.topbar {
    background-image: none;
    background-color: rgb(15, 15, 15);
}

.section {
    background-image: none;
    background-color: rgb(15, 15, 15);
}

#search-section-title {
    font-size: 3rem;
}

.search-input-container {
    background-color: white;
    color: black;
    margin-left: 25px;
    padding-left: 15px;
    border-radius: 16px;
    font-size: 1.5rem;
}

.search-input:focus {
  outline: none;
  box-shadow: none;
}

.search-input {
    border: none;
    padding: 10px;
    width: 250px;
    border-radius: 0px 16px 16px 0px;
    line-height: 10px;
}
    
.search-card {
    color: white;
}

.search-card-container {
    margin: 25px;
    display: flex;
    flex-direction: column;
}

.search-card {
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.5rem;
    margin-block: 25px;
    padding-block: 10px;
    border-radius: 6px;
    padding-left: 5px;
}

.search-card:hover {
    background-color: #99999940 !important;
}
</style>