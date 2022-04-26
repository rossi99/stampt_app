// imports
import {createRouter, createWebHistory} from "vue-router";

// components for routes
import testLoadingComponent from "@/components/loading/test-loading-component";

// route defined
const routes = [
    {
        path: "/",
        component: testLoadingComponent
    }
];

// create router
const router = createRouter({
    history: createWebHistory(), // removes # that vue adds to URL
    routes,
});

export default router;