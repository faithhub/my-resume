<template>
  <div>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact section-show">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div class="row mt-2">
          <!-- <div class="col-md-6 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-map"></i>
            <h3>My Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div> -->

          <div class="col-md-4 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div class="social-links">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  target="blank"
                  v-bind:href="social.route"
                  :class="social.name"
                  ><i :class="social.icon"></i
                ></a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>{{ email }}</p>
            </div>
          </div>
          <div class="col-md-4 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>{{ mobile }}</p>
            </div>
          </div>
        </div>

        <b-form @submit.stop.prevent="onSubmit" class="php-email-form mt-4">
          <div class="row">
            <div class="col-md-6 form-group">
              <input
                type="text"
                name="name"
                v-model="$v.form.name.$model"
                :state="validateState('name')"
                class="form-control"
                id="name"
                placeholder="Your Name"
              />
              <!-- <span id="input-1-live-feedback">This is a required field and must be at least 3 characters</span> -->
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              
            />
          </div>
          <div class="form-group mt-3">
            <textarea
              class="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              
            ></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div class="text-center">
            <button type="submit">Send Message</button>
          </div>
        </b-form>
      </div>
    </section>
    <!-- End Contact Section -->
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Contact",
  components: {
    // Main
  },
  mixins: [validationMixin],
  data() {
    return {
      mobile: "+234 806 037 3371",
      email: "amaofaith.o@gmail.com",
      socials: [
        {
          name: "twitter",
          route: "https://twitter.com/Faith_Oluwadara",
          icon: "bi bi-twitter",
        },
        {
          name: "linkedin",
          route: "https://www.linkedin.com/in/faith-amao-25b304151/",
          icon: "bi bi-linkedin",
        },
        {
          name: "github",
          route: "https://github.com/faithhub",
          icon: "bi bi-github",
        },
      ],

      form: {
        name: null,
        food: null,
      },
    };
  },

  validations: {
    form: {
      food: {
        required,
      },
      name: {
        required,
        minLength: minLength(3),
      },
    },
  },

  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    },
  },
};
</script>
