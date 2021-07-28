<template>
  <div>
  <header id="header" v-bind:class="header">
    <div class="container">
      <h1>
      <router-link v-bind:to="home"><a>{{name}}</a>
        </router-link>
      </h1>
      <h2>I'm a passionate <span>Back-end Developer</span> based in Nigeria</h2>

      <nav id="navbar" v-if="bool == true" class="navbar">
        <ul>
        <router-link v-for="link in links" :key="link.name"  :to="link.route" >
          <li>
          <a class="nav-link" v-bind:class="[{ 'active': $route.path == link.route }, link.class]" v-bind:href="link.route" style="cursor:pointer">{{ link.name }}</a>
          </li>
        </router-link>
        </ul>
        <!-- <i class="bi bi-list mobile-nav-toggle"  v-on:click="mobileMenu"></i> -->
        <i class="bi bi-list mobile-nav-toggle"  @click="bool ? one() : two()"></i>
      </nav><!-- .navbar -->
      <nav id="navbar" v-else class="navbar navbar-mobile" style="position: fixed !important">
        <ul>
        <router-link v-for="link in links" :key="link.name"  :to="link.route" >
          <li>
          <a class="nav-link" @click="bool ? one() : two()" v-bind:class="[{ 'active': $route.path == link.route }, link.class]" v-bind:href="link.route" style="cursor:pointer">{{ link.name }}</a>
          </li>
        </router-link>
        </ul>
        <i class="bi bi-x mobile-nav-toggle"  @click="bool ? one() : two()"></i>
      </nav><!-- .navbar -->

      <div class="social-links">
        <a v-for="social in socials" :key="social.name" target="blank"  v-bind:href="social.route" :class="social.name"><i :class="social.icon"></i></a>
      </div>
    </div>
  </header><!-- End Header -->
    <!-- <Main/> -->
    <router-view></router-view>
    
  <div class="credits">
    <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/personal-free-resume-bootstrap-template/ -->
    Designed by <a href="https://amaofaith.com/" target="blank">{{author}}</a>
  </div>
  </div>
</template>

<script>
    // import.meta; './assets/js/jquery.slimscroll.js';
    // import.meta; './assets/plugins/bootstrap/js/bootstrap.min.js';
// import Main from './components/home.vue'
const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)

        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }
export default {
  
  name: 'App',
  components: {
    // Main
  },
  data() {
    return {
      bool: true,
    isActive: false,      
      name:'Faith Oluwadara',
      author:'Faith',
      home: '/',
      header: '',
      links: [
        { name: "Home", route: "/", class:"lii" },
        { name: "About", route: "/about", class:"lii" },
        { name: "Resume", route: "/resume", class:"lii" },
        { name: "Projects", route: "/projects", class:"lii" },
        // { name: "Services", route: "/services", class:"lii" },
        // { name: "Portfolio", route: "/portfolio", class:"lii" },
        { name: "Contact", route: "/contact", class:"lii" },
      ],
    
    socials: [
        { name: "twitter", route: "https://twitter.com/Faith_Oluwadara", icon:"bi bi-twitter" },
        { name: "linkedin", route: "https://www.linkedin.com/in/faith-amao-25b304151/", icon:"bi bi-linkedin" },
        { name: "github", route: "https://github.com/faithhub", icon:"bi bi-github" },
      ],
    };
  },
  methods:{
    one(){
      console.log('one');
      this.bool = !this.bool;
    },
    two(){
      console.log('two');
      this.bool = !this.bool;
      },    
    mobileMenu(){
      // alert()
      this.isActive == !this.isActive
        // select('.navbar').classList.toggle('navbar-mobile')
        // this.classList.toggle('bi-list')
        // this.classList.toggle('bi-x')
    }
  },
  watch:{
    '$route' () {
      if (this.$route.
      path === '/') {
        this.header = 'header'
      }
      else {
        this.header = 'header-top'
      }  
    }
} ,
updated() {
  //  console.log(this.$route)
}
}
  </script>
<style>
@import '/assets/css/style.css';
@import '/assets/vendor/swiper/swiper-bundle.min.css';
@import '/assets/vendor/remixicon/remixicon.css';
@import '/assets/vendor/glightbox/css/glightbox.min.css';
@import '/assets/vendor/boxicons/css/boxicons.min.css';
@import '/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '/assets/vendor/bootstrap/css/bootstrap.min.css';
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /** text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
a {
color: #18d26e;
  text-decoration: none !important;
}
  a:hover {
color: #18d26e;
  text-decoration: none !important;
  }


.lii {
    position: relative !important;
    margin-left: 30px !important;
}
p{
color:white;
}

</style>
