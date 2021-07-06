<template>
  <div>
  <!-- ======= Resume Section ======= -->
  <section id="resume" class="resume section-show">
    <div class="container">
      <div class="section-title">
        <h2>Products</h2>
      </div>

      <div class="row">
          <h3 class="resume-title">My Projects</h3>
        <div class="col-lg-6" v-for="portfolio in projects" v-bind:key="portfolio.name">
          <div class="resume-item">
            <h4>{{portfolio.name}}</h4>
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
  name: "Projects",
  components: {
    // Main
  },
  data() {
    return {
      myName: "Amao Faith Oluwadara",
      profession: "Back-End Developer",
      projects: [
      { name: "Flog App", link:"https://github.com/faithhub/flog-api", web:"Github Link", about:"Flog is an online logistic mobile application software (Android & IOS) that manages on-demand and scheduled deliveries for a variety of user segments, ranging from business. It allows riders across major cities to connect with users to deliver affordable delivery services with just a few clicks. I developed the software back-end API using Node.js (Express.Js) and MongoDB as the database. The app is still under development" },
      { name: "Techno", link:"https://github.com/adexsimply/techno", web:"Github Link (Private repo)", about:"Techno is a private hospital software running on windows at the moment but developing a web application version of it. It has a multi-level user, admin, doctor, receptionist, nurse, patient, etc. I’m part of the team developing the software using Laravel Framework. The software is still under development" },
      { name: "Pm247crypto", link:"http://pm247crypto.com/", web:"Pm247crypto.com", about:"Pm247crypto.com is a web application software, which allows users to buy and sell cryptocurrency, users register, get verified, and can buy and sell cryptocurrency of their choice. I developed the software with Laravel. I integrate payment APIs (Paystack, Flutterwave, Stripe) for depositing money on the software, and also integrate an API to validate their local bank account details whenever they want to withdraw" },
      {name:"Mercurialinvest", link:"https://www.mercurialinvest.net/", web:"Mercurialinvest.net", about:"Mercurialinvest.net is a capital management and investment company, established with the vision of managing and growing your wealth through sustainable minimal risk investments in online forex trading, Real estate, property, and general contracts. I developed the software dashboard system using Laravel, Bootstrap, and MySQL. It allows users to deposit money and invest it for a specific time and get a return on it based on the investment plan they’ve chosen."},
      {name:"Digitalxrapidfx", link:"https://digitalxrapidfx.com/", web:"Digitalxrapidfx.com", about:"Digitalxrapidfx.com is a cryptocurrency investment platform, which allows users to deposit cryptocurrency of their choice, invest their coins, and withdraw to their wallet after the investment, I worked as a back-end developer to integrate coins payment API for depositing and withdrawing of cryptocurrency. I integrate Paystack Bank API to validate their bank account details in the withdrawal process."},
      {name:"Digitalxremit", link:"https://digitalxremit.com/", web:"Digitalxremit.com", about:"Digitalxremit.com is a web application software that allows users to buy, sell and exchange cryptocurrency, I developed the software back-end using PHP, I integrate API for buying, selling, and exchanging cryptocurrency based on the current rate."},
      {name:"Incare", link:"https://incare.ng/", web:"Incare.ng", about:"Incare is a job posting web application software that has three levels of users (Admin, Employer, Employee). It allows all users to register and verified, users as an employer can post jobs in different categories, and users as an employee to request for the job and get paid after which the job has been done, logged, and confirmed based on the hourly used on the job. I developed the platform with PHP using Laravel Framework with Bootstrap and MySQL as the database."},
      {name:"Plantheus Website and Blog", link:"https://plantheus.com.ng/", web:"Pentheus.com.ng", about:"Pentheus is a web software application, designed to effectively run crop diseases diagnosis and suggests best management practices in real-time. Work as a back-end developer to re-developed the company website which was previously on WordPress. I also developed the back-end for the company blog."},
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