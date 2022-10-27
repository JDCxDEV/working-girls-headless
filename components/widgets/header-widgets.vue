<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-search">
          <div>
            <img
              alt
              :src='"@/assets/images/icon/layout4/search.png"'
              @click="openSearch()"
              class="img-fluid"
            >
            <i class="ti-search" @click="openSearch()"></i>
          </div>
          <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
            <div>
              <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input
                            type="text"
                            class="form-control"
                            v-model="searchString"
                            @keyup="searchProduct"
                            placeholder="Search a Product"
                          >
                        </div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                      <ul class="search-results" v-if="searchItems.length">
                        <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                          <div class="img-wrapper">
                            <img
                              :src='getImgUrl(product)'
                              class="img-fluid bg-img"
                              :key="index"
                            />
                          </div>
                          <div class="product-detail">
                            <a class="link" @click="redirect(product)">
                              <h6>{{ product.title }}</h6>
                            </a>
                            <h4>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="onhover-div mobile-setting">
          <div>
            <img alt :src='"@/assets/images/icon/layout4/setting.png"' class="img-fluid">
            <i class="ti-settings"></i>
          </div>
          <div class="show-div setting">
            <h6>currency</h6>
            <ul class="list-inline">
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('eur', '€')">eur</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('inr', '₹')">inr</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('gbp', '£')">gbp</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('usd', '$')">usd</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="onhover-div mobile-cart">
          <div>
            <img alt :src='"@/assets/images/icon/layout4/cart.png"' class="img-fluid">
            <i class="ti-shopping-cart"></i>
            <span class="cart_qty_cls">{{cart.length}}</span>
          </div>
          <ul class="show-div shopping-cart" v-if="!cart.length">
            <li>Your cart is currently empty.</li>
          </ul>
          <ul class="show-div shopping-cart" v-if="cart.length">
            <li v-for="(item,index) in cart" :key="index">
              <div class="media">
                <a class="link" @click="redirect(item)">
                  <img alt class="mr-3" :src='getImgUrl(item.featured_image)'>
                </a>
                <div class="media-body">
                  <a class="link" @click="redirect(item)">
                    <h4>{{item.title}}</h4>
                  </a>
                  <h4>
                    <span>{{item.quantity.value }} x {{ (item.price / 100) | currency }}</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle" v-if="item.cart_item_data.wdr_free_product != 'Free'">
                <a href="#" @click='removeCartItem(item)'>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h5>
                  subtotal :
                  <span>{{  computeTotal(cart, 'subtotal') | currency }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link :to="{ path: '/page/account/cart'}" :class="'view-cart'">
                  view cart
                </nuxt-link>
                <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'checkout'">
                  checkout
                </nuxt-link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v2'
});

export default {
  data() {
    return {
      currencyChange: {},
      search: false,
      searchString: ''
    }
  },
  computed: {
    ...mapState({
      searchItems: state => state.products.searchProduct
    }),
    ...mapGetters({
      cart: 'cart/cartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return path;
    },
    openSearch() {
      this.search = true
    },
    closeSearch() {
      this.search = false
    },
    searchProduct() {
      this.$store.dispatch('products/searchProduct', this.searchString)
    },
    removeCartItem: function (product) {
      this.$store.dispatch('cart/removeCartItem', product)
    },
    updateCurrency: function (currency, currSymbol) {
      this.currencyChange = { curr: currency, symbol: currSymbol }
      this.$store.dispatch('products/changeCurrency', this.currencyChange)
    },
    computeTotal(items, label = 'subtotal') {
      let total = 0;
      let total_tax = 0;
      if(items.length > 0) {
      
        items.forEach(item => {
          total += item.totals.total;
          total += item.totals.tax;
          total_tax += item.totals.tax;
        });
      }

      if(label == 'subtotal') {
        return total.toFixed(2);
      }
      if(label == 'total_tax') {
        return total_tax.toFixed(2);
      }
      if(label == 'total') {
        total = total + (this.cartTotal.shipping_total ?  (this.cartTotal.shipping_total / 100) : 0)
        return total.toFixed(2);
      }
    },
    redirect(item) {
      this.$router.push({
        path: '/product/' + item.slug
      })
    }
  }
}
</script>

<style>
.link{
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 600;
}
.link:hover{
  cursor: pointer;
  color: #ff4c3b !important;
}
</style>