import Vue from 'vue'
import App from './App.vue'
import './assets/js/main.js';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendor/glightbox/js/glightbox.min.js';
import './assets/vendor/isotope-layout/isotope.pkgd.min.js';
import './assets/vendor/php-email-form/validate.js';
import './assets/vendor/purecounter/purecounter.js';
import '.assets/vendor/waypoints/noframework.waypoints.js';
import '.assets/vendor/swiper/swiper-bundle.min.js';
// import BootstrapVue from "bootstrap-vue";
import router from './components/router/index'

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')