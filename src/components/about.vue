<template>
  <div>
    <!-- ======= About Section ======= -->
    <section id="about" class="section-show">
      <!-- ======= About Me ======= -->
      <div class="about-me container">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="assets/img/me.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{{ myName }}</h3>
            <p class="text-justify">{{ about1 }}{{ about2 }}</p>
            <p class="text-justify">
              {{ about3 }}
            </p>
            <!-- <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>
                    <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span>30</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>PhEmailone:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div> -->
            

      <!-- ======= Skills  ======= -->
      <div class="skills container">
        <div class="section-title">
          <h2>Stacks</h2>
        </div>

        <div class="row skills-content">
          <div class="col-lg-4 col-md-4 col-sm-4" v-for="stack in stacks" :key="stack.name">
            <div class="progress">
              <span class="skill">{{ stack.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End Skills -->
          </div>
        </div>
      </div>
      <!-- End About Me -->
    </section>
    <!-- End About Section -->
  </div>
</template>

<script>
export default {
  name: "About",
  components: {
    // Main
  },
  data() {
    return {
      myName: "Amao Faith Oluwadara",
      profession: "Back-End Developer",
      about1:
        "I am a Software developer, both driven and self-motivated. My interest in software development started back in 2017 when I decided to try web based tutorial app using PHP with Bootstrap. I am constantly experimenting with new technologies and techniques. I am very passionate about development and strive to better myself as a developer. I am always curious about advancing knowledge and I enjoy work that challenges me to",
      about2:
        "learn something new and stretches in a different direction. I do my best to stay on top of changes in the field of computing and technology so that I can meet challenges with tools well suited to the job at hand.",
      about3:
        "I have always supported the idea of a minimalistic and user-focused approach to design and development, which I indeed imbibe when building scalable and fully responsive web applications.",
      stacks: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript (ES6+)" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "Codeigniter" },
        { name: "Git" },
        { name: "Node" },
        { name: "Express" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "HarperBD" },
      ],
    };
  },
};
</script>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>
