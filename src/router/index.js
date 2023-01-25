import {createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import ArticleDetail from "../components/ArticleDetail.vue";
import Login from "../views/Login.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/article/:id",//路径参数设置
        name: "ArticleDetail",
        component: ArticleDetail,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;