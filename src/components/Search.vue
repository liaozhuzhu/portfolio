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
        <div class="search-card-container" v-if="searchText.length == 0" >
            <h1 class="section-title" id="search-all-title">All pages</h1>
            <div v-for="page in allPages" :key="page.url">
                <p>
                    <a v-if="'target' in page" target="_blank" :href="page.url" class="search-card">
                        {{ page.title }}
                    </a>
                    <RouterLink v-else :to="page.url" class="search-card">
                            {{page.title}}
                    </RouterLink>
                </p>
            </div>
        </div>
        <div class="search-card-container" v-else>
            <h1 class="section-title" id="search-all-title">Results</h1>
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
            pages: searchPages,
            allPages: [
                {
                    title: "Home",
                    url: "/"
                },
                {
                    title: "Profile",
                    url: "/user"
                },
                {
                    title: "Projects",
                    url: "/playlist/projects"
                },
                {
                    title: "Liao Zhu",
                    url: "/playlist/liao-zhu"
                },
                {
                    title: "Portfolio",
                    url: "/track/my-portfolio"
                },
                {
                    title: "Tiktok Video Generator Bot",
                    url: "/track/tiktok-video-generator"
                },
                {
                    title: "QiT",
                    url: "/track/qit"
                },
                {
                    title: "Statipy",
                    url: "/track/statipy"
                },
                {
                    title: "UIowa Course Search Clone",
                    url: "/track/uiowa-course-search-clone"
                },
                {
                    title: "Clask",
                    url: "/track/clask"
                },
                {
                    title: "Sorting Visualizer",
                    url: "/track/sorting-visualizer"
                },
                {
                    title: "Mathnasium Instructor",
                    url: "/experience/mathnasium-instructor"
                },
                {
                    title: "UIowa Web Intern",
                    url: "/experience/uiowa-web-intern"
                },
                {
                    title: "Incoming Collins SWE Intern",
                    url: "/experience/collins-software-engineer-intern"
                },
                {
                    title: "ACM",
                    url: "/playlist/acm"
                },
                {
                    title: "Robotics",
                    url: "/playlist/robotics"
                },
                {
                    title: "Resume",
                    url: "../liaozhu.pdf",
                    target: "blank"
                },
                {
                    title: "Github",
                    url: "https://github.com/liaozhuzhu",
                    target: "blank"
                },
                {
                    title: "Linkedin",
                    url: "https://www.linkedin.com/in/liao-zhu/",
                    target: "blank"
                },
                {
                    title: "Email",
                    url: "mailto:liao.zhu.cs@gmail.com",
                    target: "blank"
                }

            ]
        }
    },
    methods: {
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

#search-all-title {
    font-size: 3rem;
    margin-left: 0px;
    margin-top: 0px;
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
    padding-block: 25px;
    border-radius: 6px;
    padding-left: 5px;
    color: white;
}

.search-card:hover {
    background-color: #99999940 !important;
}
</style>