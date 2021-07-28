import Vue from 'vue'
import App from './App.vue'
import router from './components/router/index'
import VueAnalytics from 'vue-analytics';

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(BootstrapVue);

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'G-V1C2TTDB2L',
    router
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')