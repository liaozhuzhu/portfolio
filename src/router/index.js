import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/HomeVue.vue"
import PageNotFound from "@/components/PageNotFound.vue"
import Profile from '@/components/ProfileVue.vue'
import Projects from "@/components/ProjectsVue.vue";
import LiaoZhu from "@/components/LiaoZhu.vue";

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
	}
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router