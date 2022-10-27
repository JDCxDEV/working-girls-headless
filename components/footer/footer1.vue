<template>
  <div>
    <subscribe @hideModal="hideModal"></subscribe>
    <footer class="footer-light">
      <div class="light-layout">
        <div class="container">
          <section class="small-section border-section border-top-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="subscribe">
                  <div>
                    <h4>BRIGHTEN UP YOUR SUNDAYS!</h4>
                    <p>Get our latest styles and stories delivered to your inbox!</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <form
                  class="form-inline subscribe-form auth-form needs-validation"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  @submit.prevent="subscribe"
                >
                  <div class="form-group mx-sm-3">
                    <input
                      type="email"
                      class="form-control"
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="Enter your email"
                      required="required"
                      v-model="email"
                    />
                  </div>
                  <button type="submit" class="btn btn-solid" id="mc-submit">subscribed</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-5 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div class="footer-contant">
                <div class="footer-logo">
                  <img :src='"@/assets/images/custom/logo/logo.png"' style="height:50px;" alt="logo" />
                </div>
                <p>
                  A life without lingerie would be a dull life indeed! Lingerie adds spark and excitement to any relationship. Lingerie enhances, intrigues, titillates and invites! Beautiful lingerie for the beautiful you!<br><br>

                  We believe that quality lingerie, well designed and made with lovely, soft, sensual fabrics should always be affordable. At My Secret Drawer® we keep prices low by selling our beautiful lingerie direct to you, our valued customer.<br><br>

                  You have one life to live. We invite you to add excitement with beautiful, sensual lingerie from My Secret Drawer®.
                </p>
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/MySecretDrawerOfficial/">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.ph/MySecretDrawer/">
                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/_mysecretdrawers">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/mysecretdrawerco/">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCZSCmoSR7M-Ac7eVlbCDj9Q">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col offset-xl-1">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>Fast Links</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="/collection/for-her">For Her</a>
                    </li>
                    <li>
                      <a href="/collection/for-him">For Him</a>
                    </li>
                    <li>
                      <a href="/collection/bdsm">Playground - BDSM</a>
                    </li>
                    <li>
                      <a href="/collection/accessories">accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>&nbsp;</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <a href="/our-size-chart">Our Size Chart</a>
                    </li>
                    <li>
                      <a href="/our-models-sizes">Our Model's Sizes</a>
                    </li>
                    <li>
                      <a href="/affiliates">affiliates</a>
                    </li>
                    <li>
                      <a href="/testimonials">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>store information</h4>
                </div>
                <div class="footer-contant">
                  <ul class="contact-list">
                    <li>
                      <i class="fa fa-map-marker"></i>Bannockburn, Queensland 4207, Australia
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>123-456-7898
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i>
                      <a href="mailto:help@mysecretdrawer.co">Help@MySecretDrawer.Co</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i> 2022 All Rights Reserved - Now4Group
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="payment-card-bottom">
                <ul>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/visa.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/mastercard.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/paypal.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/american-express.png"' alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src='"@/assets/images/icon/discover.png"' alt />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Subscribe from '../widgets/subscribe.vue';
export default {
    components: {
      Subscribe
    },
    data() {
        return {
            email: "",
        };
    },
    methods: {
        subscribe() {
            axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
            axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Requested-With";
            axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
            const headers = {
                "Authorization": `Bearer ${process.env.VUE_APP_SEND_FOX_KEY}`,
            };
            const lists = [361222];
            const formData = new FormData();
            formData.set("email", this.email);
            lists.forEach(function (value) {
                formData.append("lists[]", value); // you have to add array symbol after the key name
            });
            axios.post("/api/contacts", formData, {
                headers: headers
            }).then((response) => {
              this.openModal();    
            })
                .catch((error) => {
            });
        },

        openModal() {
          this.$bvModal.show('subscribe-modal')
        },
        hideModal() {
          this.$bvModal.hide('subscribe-modal')
        }
    },

}
</script>

<style>
footer p {
  line-height: 20px !important;
}

body {
  overflow-x: hidden;
}
</style>
