<template>
  <div class="top-header" style="background-color: #F40847;color: white !important;" >
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact text-white" >
            <ul>
              <li><a style="color: white !important;" href="collection/all">SHOP</a></li>
              <li><a style="color: white !important;" href="contact-us">CONTACT US</a></li>
              <li><a style="color: white !important;" href="faqs">FAQS</a></li>
              <li><a style="color: white !important;" href="privacy-and-security">PRIVACY & SECURITY</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown"   >
            <li class="text-white">
              <a href="https://www.facebook.com/MySecretDrawerOfficial/">
                <i  style="color: white !important;" class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.pinterest.ph/MySecretDrawer/">
                <i style="color: white !important;" class="fa fa-pinterest" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/_mysecretdrawers">
                <i style="color: white !important;" class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/mysecretdrawerco/">
                <i style="color: white !important;" class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCZSCmoSR7M-Ac7eVlbCDj9Q">
                <i  style="color: white !important;" class="fa fa-youtube" aria-hidden="true"></i>
              </a>       
            </li>
            <li class="mobile-wishlist"  style="color: white !important;">
              <nuxt-link :to="{ path: '/page/account/wishlist' }">
                <i   style="color: white !important;" class="fa fa-heart" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account"  style="color: white !important;">
              <i class="fa fa-user" aria-hidden="true"></i> 
              <template v-if="validated">
                {{ user.first_name }} {{ user.last_name}}
              </template>
              <template v-else>
                My Account
              </template>

              <ul class="onhover-show-div">
                <li v-if="validated">
                  <nuxt-link :to="{ path: '/page/account/dashboard' }">Dashboard</nuxt-link>
                </li>
                <li>
                  <a v-if="validated" @click="logout"> Logout </a>
                  <nuxt-link v-if="!validated" :to="{ path: '/page/account/login-firebase' }">Login</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import UserAuth from '../../pages/page/account/auth/auth'
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('user/unsetUserDetails').then(() =>{
        this.$router.push({path: '/page/account/login'});
      });
    },
  },
  computed: {
    ...mapGetters({
      validated: 'user/validated',
      user: 'user/user',
    }),
  },
}
</script>

<style>
.top-header .header-contact {
  padding: 10px 0;
}
.top-header .header-dropdown li {
  padding: 10px 25px;
  padding-right: 20px;
}
.top-header .header-dropdown li {
  padding: 10px 25px;
  padding-right: 20px;
}
.top-header .header-dropdown li a{
  padding-right: 10px;
}
</style>