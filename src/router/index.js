import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/HomeVue.vue"
import PageNotFound from "@/components/PageNotFound.vue"
import Profile from '@/components/ProfileVue.vue'
import Projects from "@/components/ProjectsVue.vue";
import LiaoZhu from "@/components/LiaoZhu.vue";

import TikTokVideoGenerator from "@/pages/TikTokVideoGenerator.vue";
import Clask from "@/pages/ClaskVue.vue";
import Portfolio from "@/pages/MyPortfolio.vue";
import Qit from "@/pages/QitVue.vue";
import UIowaCatalog from "@/pages/CatalogClone.vue";
import SortingVisualizer from "@/pages/SortingVisualizer.vue";
import Statipy from "@/pages/StatipyVue.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:catchAll(.*)*",
		name: "PageNotFound",
		component: PageNotFound,
	},
	{
		path: "/user",
		name: "Profile",
		component: Profile
	},
	{
		path: "/playlist/projects",
		name: "Projects",
		component: Projects
	},
	{
		path: "/playlist/liao-zhu",
		name: "LiaoZhu",
		component: LiaoZhu
	},
	// project indv pages (figure out dynamic routing)
	{
		path: "/track/tiktok-video-generator",
		name: "TikTokVideoGenerator",
		component: TikTokVideoGenerator
	},
	{
		path: "/track/clask",
		name: "Clask",
		component: Clask
	},
	{
		path: "/track/my-portfolio",
		component: Portfolio
	},
	{
		path: "/track/qit",
		component: Qit
	},
	{
		path: "/track/uiowa-course-search-clone",
		component: UIowaCatalog
	},
	{
		path: "/track/sorting-visualizer",
		component: SortingVisualizer
	},
	{
		path: "/track/statipy",
		component: Statipy
	},
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router