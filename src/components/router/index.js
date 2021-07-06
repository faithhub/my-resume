import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            name: 'Home',
            path: '/',
            component: () =>
                import ('../home.vue'),
        },
        {
            name: 'About',
            path: '/about',
            component: () =>
                import ('../about.vue'),
        },
        {
            name: 'Resume',
            path: '/resume',
            component: () =>
                import ('../resume.vue'),
        },
        {
            name: 'Projects',
            path: '/projects',
            component: () =>
                import ('../projects.vue'),
        },
        {
            name: 'Contact',
            path: '/contact',
            component: () =>
                import ('../contact.vue'),
        },
        {
            name: 'Portfolio',
            path: '/portfolio',
            component: () =>
                import ('../portfolio.vue'),
        },
        {
            name: 'Services',
            path: '/services',
            component: () =>
                import ('../services.vue'),
        },
    ]
});