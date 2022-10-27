<template>
  <div>
    <Header />
    <Breadcrumbs title="Cart" />
    <section class="cart-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs" v-if="cart.length">
              <thead>
                <tr class="table-head">
                  <th scope="col">image</th>
                  <th scope="col">product name</th>
                  <th scope="col">price</th>
                  <th scope="col">quantity</th>
                  <th scope="col">action</th>
                  <th scope="col">total</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in cart" :key="index">
                <tr>
                  <td>
                    <a class="link" @click="redirect(item)">
                      <img :src="getImgUrl(item.featured_image)" alt />
                    </a>
                  </td>
                  <td>
                    <span class="link" @click="redirect(item)">{{ item.title }}</span>
                    <div class="mobile-cart-content row">
                      <div class="col-xs-3">
                        <div class="qty-box">
                          <div class="input-group">
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-left-minus"
                                data-type="minus"
                                data-field
                                @click="decrement(item)"
                              >
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              name="quantity"
                              class="form-control input-number"
                              v-model="counter"
                            />
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-right-plus"
                                data-type="plus"
                                data-field
                                @click="increment(item)"
                              >
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">{{ item.price * curr.curr | currency(curr.symbol) }}</h2>
                      </div>
                      <div class="col-xs-3">
                        <h2 class="td-color">
                          <a href="#" class="icon">
                            <i class="ti-close"></i>
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div class="mt-2 row">
                      <div class="col-md-6">Size : 
                        <template v-if="item.meta.variation['Product Size']">
                          {{ item.meta.variation['Product Size'].toUpperCase() }}
                        </template>
                        <template v-else>
                          ---
                        </template>
                      </div>
                      <div class="col-md-6">
                        Color: 
                        <template v-if="item.meta.variation['Color']">
                          <span class="color-variant">
                            <li>
                              <a
                                :class="item.color"
                                class="mt-1"
                                v-bind:style="{ 'background-color':  item.meta.variation['Color'] }"
                              ></a>
                            </li>
                          </span>
                        </template>
                        <template v-else>
                          <b> none </b>
                        </template>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2>{{ (item.price / 100) * curr.curr | currency(curr.symbol) }}</h2>
                  </td>
                  <td>
                    <div class="qty-box">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <button
                            type="button"
                            class="btn quantity-left-minus"
                            data-type="minus"
                            data-field
                            @click="decrement(item)"
                            :disabled="item.cart_item_data.wdr_free_product == 'Free'"
                          >
                            <i class="ti-angle-left"></i>
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          class="form-control input-number"
                          v-model="item.quantity.value"
                          @change="changeQuantity(item)"
                          :disabled="item.cart_item_data.wdr_free_product == 'Free'"
                        />
                        <span class="input-group-prepend">
                          <button
                            type="button"
                            class="btn quantity-right-plus"
                            data-type="plus"
                            data-field
                            @click="increment(item)"
                            :disabled="item.cart_item_data.wdr_free_product == 'Free'"
                          >
                            <i class="ti-angle-right"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a class="icon" @click="removeToCart(item)">
                      <template v-if="item.cart_item_data.wdr_free_product == 'Free'">
                        <h4>
                          <span class="badge badge-info">Free Item</span>
                        </h4>
                      </template>
                      <template v-else>
                        <i class="ti-close"></i>
                      </template>
                    </a>
                  </td>
                  <td>
                    <h2
                      class="td-color"
                    > $ {{ getProductTotalPrice(item)}}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row">
              <div class="col-md-3">
                <div class="input-group mt-3">
                  <span class="input-group-prepend">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-type="minus"
                      data-field
                      @click="applyCoupon()"
      
                    >
                      Apply Coupon
                    </button>
                  </span>
                    <input
                      type="text"
                      name="quantity"
                      class="form-control input-number"
                      v-model="coupon"
                    />
                </div>
              </div>
              <div class="col-md-5">

              </div>
              <div class="col-md-4"  v-if="cart.length">
                <h3 class="mt-4">Cart totals</h3>
                <table class="table table-striped mt-4">
                  <tbody>
                    <tr>
                      <th scope="row">Subtotal</th>
                      <td>${{ computeTotal(cart, 'subtotal') }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Shipping</th>
                      <td v-if="this.cartTotal.shipping_total > 0">
                        ${{ (this.cartTotal.shipping_total ?  (this.cartTotal.shipping_total / 100) : 0) }}
                      </td>
                      <td v-else>
                        <span class="badge badge-info">free shipping</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <td><b>${{ computeTotal(cart, 'total') }} AUD </b>(includes ${{ computeTotal(cart, 'total_tax')  }} Tax)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
              <img :src='"@/assets/images/icon-empty-cart.png"' class="img-fluid" alt="empty cart" />
              <h3 class="mt-3">
                <strong>Your Cart is Empty</strong>
              </h3>
              <h4 class="mb-3">Add something to make me happy :)</h4>
              <div class="col-12">
                <nuxt-link :to="{ path: '/collection/all' }" class="btn btn-solid">continue shopping</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row cart-buttons" v-if="cart.length">
          <div class="col-6">
            <nuxt-link :to="{ path: '/collection/all'}" :class="'btn btn-solid'">continue shopping</nuxt-link>
          </div>
          <div class="col-6">
            <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'btn btn-solid'">check out</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '../../../components/header/header2';
import Footer from '../../../components/footer/footer1';
import Breadcrumbs from '../../../components/widgets/breadcrumbs';
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v2'
});

const CoCartV1 = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v1'
});

export default {
  data() {
    return {
      counter: 1,
      coupon: '',
    }
  },
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  computed: {
    ...mapGetters({
      cart: 'cart/cartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency',
      cartTotal: 'cart/cartTotal',
      hasCoupon: 'cart/cartHasCoupon',
    })
  },
  methods: {
    getImgUrl(path) {
      return path
    },
    removeCartItem: function (product) {
      this.$store.dispatch('cart/removeCartItem', product)
    },
    increment(item) {
      item.quantity.value += 1;
      this.$store.dispatch('cart/updateProductQuantity', {vm: this, payload: item})
    },
    decrement(item) {
      item.quantity.value -= 1;
      this.$store.dispatch('cart/updateProductQuantity', {vm: this, payload: item})
    },
    removeToCart (product) {
      this.$store.dispatch('cart/removeToCart', product)
    },
    getProductTotalPrice(item) {
      let price = (item.price / 100) * item.quantity.value;

      return price.toFixed(2);
    },
    changeQuantity(item){
      this.$store.dispatch('cart/updateProductQuantity', {vm: this, payload: item})
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
    },

    applyCoupon() {
      let data = {
        "coupon": this.coupon
      };

      CoCartV1.post("coupon", data)
      .then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
        this.$toast.open({
            message: 'Coupon has been successfully added!',
            type: 'success',
            position: 'top-right',
        });
      })
      .catch((error) => {
        this.$toast.open({
            message: 'Expired or Invalid Coupon',
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
</script>


<style>
.color-variant a{
  height: 20px !important;
  width: 20px !important;
}

.link{
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 600;
}
.link:hover{
  cursor: pointer;
  color: #ff4c3b !important;
}
.v-toast__text {
  color:white !important;
}
</style>