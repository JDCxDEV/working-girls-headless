<template>
  <div>
    <Header />
    <Breadcrumbs />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{logintitle}}</h3>
            <div class="theme-card">
              <form class="theme-form" method="post">
                <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <h6 class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</h6>
                  </ul>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <a class="btn-solid btn" href="javascript:void(0)" @click="signUp"> Login </a>

                <!-- Social Media -->
                <div class="social mt-3">
                  <div class="form-group btn-showcase d-flex">
                    <button type="button"
                      @click="socialLoginFacebook"
                      class="btn social-btn btn-fb d-inline-block"
                    >
                      <i class="fa fa-facebook"></i>
                    </button>
                    <button type="button" @click="socialLogin" class="btn social-btn btn-twitter d-inline-block">
                      <i class="fa fa-google"></i>
                    </button>
                    <button type="button"
                      @click="socialLoginTwitter"
                      class="btn social-btn btn-google d-inline-block"
                    >
                      <i class="fa fa-twitter"></i>
                    </button>
                    <button type="button"
                      @click="socialLoginGit"
                      class="btn social-btn btn-github d-inline-block"
                    >
                      <i class="fa fa-github"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{registertitle}}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Create A Account</h6>
              <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
              <a href="/pages/account/register" class="btn btn-solid">Create an Account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import firebase from 'firebase'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import Userauth from './auth/auth'
// define a mixin object
import CoCartAPI from "@cocart/cocart-rest-api";

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      logintitle: 'Login',
      registertitle: 'New Customer',
      errors: [],
      email: '',
      password: ''
    }
  },
  methods: {
    checkForm() {
      this.errors = []
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.password) {
        this.errors.push('Password required.')
      }
      if (!this.errors.length) return true
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    signUp: function () {
      if(this.checkForm()) {
        const CoCart = new CoCartAPI({
          url: process.env.VUE_APP_API_URL,
          version: 'cocart/v2',
          consumerKey: this.email,
          consumerSecret: this.password,
          timeout: 5000,
        });
        CoCart.post("login", { })
        .then((response) => {
          if(response.status == 200) {
              const credential = {
                email: this.email,
                password: this.password,
              };

            this.$store.dispatch('user/setCredential', credential);
            this.$store.dispatch('user/fetchUserDetails').then(() =>{
              this.$router.push({path: '/page/account/dashboard'});
            });
          }
        })
        .catch((error) => {
          this.errors.push('Invalid Username & Password')
        })
        .finally(() => {
          // Always executed.
        });
      }
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
       firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          Userauth.localLogin(result)
          this.$router.replace('/page/account/dashboard')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    socialLoginFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/page/account/checkout')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    socialLoginTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/page/account/checkout')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    },
    socialLoginGit() {
      const provider = new firebase.auth.GithubAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Result', result)
          Userauth.localLogin(result)
          this.$router.replace('/page/account/checkout')
        })
        .catch((err) => {
          alert('Oops. ' + err.message)
        })
    }
  }
}
</script>