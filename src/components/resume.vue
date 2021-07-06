<template>
  <div>
  <!-- ======= Resume Section ======= -->
  <section id="resume" class="resume section-show">
    <div class="container">
      <div class="section-title">
        <h2>Resume</h2>
      </div>

      <div class="row">
          <h3 class="resume-title">Experience</h3>
        <div class="col-lg-6" v-for="portfolio in portfolios" v-bind:key="portfolio.title">
          <div class="resume-item">
            <h4>{{portfolio.title}} - {{portfolio.org}}</h4>
            <h5><i class="bx bx-calendar"></i>&nbsp; {{portfolio.date}}</h5>
            <p><i class="bx bx-location-plus"></i>&nbsp;<em>{{portfolio.location}}</em></p>
            <p><a v-bind:href="portfolio.link" target="blank"><i class="bx bx-link"></i>&nbsp;{{portfolio.web}}</a></p>
            <p class="text-justify">{{portfolio.about}}</p>
            <p>
            <ul v-for="role in portfolio.roles" v-bind:key="role.role">
              <li>{{role.role}}</li>
            </ul>
            </p>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Resume Section -->


  </div>
</template>

<script>
export default { 
  name: "Resume",
  components: {
    // Main
  },
  data() {
    return {
      myName: "Amao Faith Oluwadara",
      profession: "Back-End Developer",
      portfolios: [
      { title: "Software Developer", org:"Enblar Software Consult", date:"April 2020 - Febuary 2021", web:"Enblar.net", link:"https://enblar.net/", about:"Enblar is a Software Development company established in 2010, They have been focusing on bringing business value into their products for nearly 9 years. Enblar has extensive experience in creating high-performing, digitally transformative, and feature-packed native mobile applications for Android and iOS devices. They provide design and software development services for startups and enterprise-level companies. Here are my responsibilities.", location:"Eleyele- Ologuneru Rd, Ibadan, Oyo State, Nigeria", roles:[{role:"Integration of user-facing elements developed by a front-end team with server-side logic"}, {role:"API development and integration"}, {role:"Database creation, integration, and management"}, {role:"Implementation of security and data protection"}, {role:"Backup and restore technologies for a link’s files and DB"}] },
      { title: "Full Stack Developer", org:"Schoollite", date:"January 2020 - Febuary 2021", web:"Schoolliteportal.com", link:"https://home.schoolliteportal.com/", about:"Schoollite is a leading IT company determined to provide school portal IT Solutions. They are passionate about the possibilities that IT can bring to educational institutions. They provide school management software, link hosting, and IT consultancy services to educational institutions. Here are my responsibilities.", location:"OAU New Market, OAU, Ile-Ife, Osun State, Nigeria", roles:[{role:"Implemented back-end features of a web application using Laravel Framework"}, {role:"Helped in doing responsively designed intuitive dashboard."}, {role:"Integrate internally developed new system, as well as implementing 3rd party modules into an existing system."}, {role:"Design and built a school portal system."}, {role:"Helping to create APIs for school management integration solutions."}] },
      { title: "Customer Support", org:"OAU Computer Center", date:"September 2018 - December 2019", web:"Computercentre.oauife.edu.ng", link:"http://computercentre.oauife.edu.ng/", about:"Obafemi Awolowo University Computer Center is the arm of the University responsible for the design, development, and implementation of appropriate software systems to support data processing and computing applications, as well as to provide computing facilities for the entire Obafemi Awolowo University community. Here are my responsibilities.", location:"OAU Computer Center, Ile-Ife, Osun State, Nigeria", roles:[{role:"Respond to students queries in a timely and accurate way, via phone, email, and in-person"}, {role:"Identify student needs and help students use specific features"}, {role:"Analyze and report issues with the school portal (for example, by filling a complaint form for different scenarios or impersonating students)"}, {role:"Assist in training faculty secretaries"}, {role:"Assist in registration and coordinating UTME exam"}] },
      { title: "Technical Support", org:"Intecu OAU", date:"May 2017 - August 2018", web:"Intecu.oauife.edu.ng", link:"https://intecu.oauife.edu.ng/", about:"The information technology and communication unit (INTECU) was established in 1995 as an initiative to establish academic networks for the University. INTECU is responsible for conceiving, designing, and implementing ICT strategies for the university via the development of human capacity and the provision of critical infrastructure and network services.", location:"INTECU OAU, Ile-Ife, Osun State, Nigeria", roles:[{role:"Worked with the team that designs and deployed network Infrastructure and network security system"}, {role:"Was part of ICT Research and Development R&D, and training team"}] },
        
      ],
    };
  }, 
}
</script>

<style scoped>
.text-justify {
  text-align: justify !important;
}
</style>