<template>
    <div class="section full-height">
        <div class="container-flex">
            <fa icon="fa-solid fa-magnifying-glass"></fa>
            <input v-model="searchText" placeholder="What do you want to view?"/>
        </div>
        <div v-for="page in pages" :key="page.href">
            <p v-if="page.pageTitle.includes(searchText.replace(/\s/g, ''))">{{ page.href }}</p>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "LiaoZhu",
    created(){
        document.title = "Liao Zhu - Search"
    },
    data() {
        return {
            searchText: "",
            pages: [
                {
                    pageTitle: "home",
                    href: "/"
                },
                {
                    pageTitle: "liaozhu",
                    href: "/playlist/liao-zhu"
                },
                {
                    pageTitle: "profile",
                    href: "/user"
                },
                {
                    pageTitle: "projects",
                    href: ["/playlist/projects", "/uiowacatalogclone", "clask", "qit", "sortingvisualizer", "statipy", "tiktokvideobot"]
                },
                {
                    pageTitle: "playlists",
                    href: ["/playlist/projects", "/playlist/liao-zhu", "/playlist/acm", "/playlist/robotics"]
                },
                {
                    pageTitle: "extracurriculars",
                    href: ["/playlist/acm", "/playlist/robotics"]
                },
                {
                    pageTitle: "acm",
                    href: "/playlist/acm"
                },
                {
                    pageTitle: "robotics",
                    href: "/playlist/robotics"
                },
                {
                    pageTitle: "resume",
                    href: "../liaozhu.pdf"
                },
                {
                    pageTitle: "github",
                    href: "https://github.com/liaozhuzhu"
                },
                {
                    pageTitle: "linkedin",
                    href: "https://www.linkedin.com/in/liao-zhu/"
                },
                {
                    pageTitle: "email",
                    href: "mailto:liao.zhu.cs@gmail.com"
                },
                {
                    pageTitle: "tiktokvideobot",
                    href: "/playlist/tiktok-video-generator"
                },
                {
                    pageTitle: "clask",
                    href: "/playlist/clask"
                },
                {
                    pageTitle: "portfolio",
                    href: "/playlist/my-portfolio"
                },
                {
                    pageTitle: "qit",
                    href: "/playlist/qit"
                },
                {
                    pageTitle: "uiowacoursesearchclone",
                    href: "/playlist/uiowa-course-search-clone"
                },
                {
                    pageTitle: "sortingvisualizer",
                    href: "/playlist/sorting-visualizer"
                },
                {
                    pageTitle: "statipy",
                    href: "/playlist/statipy"
                },
                {
                    pageTitle: "experiences",
                    href: "/experience/mathnasium-instructor"
                },
                {
                    pageTitle: "experiences",
                    href: "/experience/uiowa-web-intern"
                },
                {
                    pageTitle: "experiences",
                    href: "/experience/collins-software-engineer-intern"
                },
                {
                    pageTitle: "mathnasiuminstructor",
                    href: "/experience/mathnasium-instructor"
                },
                {
                    pageTitle: "uiowawebintern",
                    href: "/experience/uiowa-web-intern"
                },
                {
                    pageTitle: "collinssoftwareengineerintern",
                    href: "/experience/collins-software-engineer-intern"
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>