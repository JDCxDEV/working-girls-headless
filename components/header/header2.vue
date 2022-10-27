<template>
  <!-- header start -->
  <header class="header-2">
    <div class="mobile-fix-option"></div>
    <TopBar/>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="main-menu border-section border-top-0 p-0">
            <div class="menu-left">
              <div class="navbar">
                <a @click="left_sidebar" >
                  <img :src='"../../assets/images/custom/icons/menu.png"' class="img-fluid" style="height:50px;cursor: pointer;" alt>
                </a>
                <LeftSidebar :leftSidebarVal="leftSidebarVal" @closeVal="closeBarValFromChild" />
              </div>
            </div>
            <div class="brand-logo layout2-logo">
              <a href="#">
                <img :src='"../../assets/images/custom/logo/logo.png"' class="img-fluid" style="height:50px;" alt>
              </a>
            </div>
            <div class="menu-right pull-right">
              <HeaderWidgets/>
            </div>
          </div>
        </div>
      </div>
    </div>

     <div  style="display: none" class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-nav-center">
            <Nav :leftSidebarVal="leftSidebarVal"/>
          </div>
        </div>
      </div>
    </div> 
    
  </header>
  <!-- header end -->
</template>

<script>
import TopBar from '../widgets/topbar'
import LeftSidebar from '../widgets/left-sidebar'
import Nav from '../widgets/navbar'
import HeaderWidgets from '../widgets/header-widgets'
import CoCartAPI from "@cocart/cocart-rest-api";
const CoCartV1 = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v1'
});
export default {
  data() {
    return {
      leftSidebarVal: false
    }
  },

  mounted() {
    this.$store.dispatch('cart/fetchCartInformation');
    this.applyCoupon(this.$route.query.affliate);
  },
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets
  },
  methods: {
    left_sidebar() {
      this.leftSidebarVal = true
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    },
    applyCoupon(coupon) {
      if(coupon) {
        let data = {
          "coupon": coupon
        };

        CoCartV1.post("coupon", data)
        .then((response) => {
          this.$toast.open({
              message: 'Thank for using affiliate link!',
              type: 'success',
              position: 'top-right',
          });
        })
        .catch((error) => {
          this.$toast.open({
              message: 'Expired or Invalid Affiliate Link',
              type: 'error',
              position: 'top-right',
          });
        })
        .finally(() => {
          this.$store.dispatch('cart/fetchCartInformation');
        }); 
      }
    }
  }
}
</script>
