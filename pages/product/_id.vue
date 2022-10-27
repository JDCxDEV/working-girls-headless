<template>
  <div v-if="getDetail.id">
    <Header />
    <Breadcrumbs :title="getDetail.title" />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
            <productSidebar />
            </div>
            <div class="col-lg-9 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div
                          class="swiper-slide"
                          v-for="(product,index) in getDetail.images"
                          :key="index"
                        >
                          <img
                            :src="getImgUrl(product.src.full, true)"
                            :id="product.image_id"
                            class="img-fluid bg-img custom-img-lg"
                            :alt="product.alt"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 slider-nav-images">
                        <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="(product,index) in getDetail.images"
                              :key="index"
                            >
                              <img
                                :src="getImgUrl(product.src.woocommerce_thumbnail, true)"
                                :id="product.image_id"
                                class="img-fluid bg-img custom-img"
                                alt="product.alt"
                                @click="slideTo(index)"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="swiper-button-prev nav-cstm" slot="button-prev">
                          <i class="fa fa-angle-left" aria-hidden="true"></i>
                        </div>
                        <div class="swiper-button-next nav-cstm" slot="button-next">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h3>{{ getDetail.title }}</h3>
                      <h4 v-if="getDetail.sale">
                        <del>{{ getDetail.price * curr.curr | currency(curr.symbol) }}</del>
                        <span>{{ getDetail.discount }}% off</span>
                      </h4>
                      <h3 v-if="getDetail.sale">{{ discountedPrice(getDetail) * curr.curr | currency(curr.symbol) }}</h3>
                      <h3 v-else>{{ getDetail.price * curr.curr | currency(curr.symbol) }}</h3>
                      <ul class="color-variant">
                        <li
                          v-bind:class="{ active: activeColor == variant}"
                          v-for="(variant,variantIndex) in Color(getDetail.variants)"
                          :key="variantIndex"
                        >
                          <a
                            :class="[variant]"
                            v-bind:style="{ 'background-color' : parseColor(variant)}"
                            @click="sizeVariant(getDetail.variants[variantIndex].image_id, variantIndex, variant)"
                          ></a>
                        </li>
                      </ul>
                      <div class="pro_inventory" v-if="getDetail.stock">
                        <p class="active" v-if="getDetail.stock"> Hurry! We have only {{ getDetail.stock }} product in stock. </p>
                      </div>
                      <div class="product-description border-product">
                        <!-- <h6 class="product-title size-text">
                          select size
                          <span>
                            <a href="javascript:void(0)" v-b-modal.modal-1>size chart</a>
                          </span>
                        </h6> -->
                        <div class="size-box">
                          <ul>
                            <li
                              class="product-title"
                              v-bind:class="{ active: selectedSize == current.id}"
                              v-for="(current,index) in size"
                              :key="size.id"
                            >
                              <a
                                v-if="current.id"
                                href="javascript:void(0)"
                                @click="changeSizeVariant(current)"
                              >{{ getSize(current) }}</a>
                            </li>
                          </ul>
                        </div>
                        <h5 class="avalibility" v-if="counter <= getDetail.stock || getDetail.is_in_stock">
                          <span>In Stock</span>
                        </h5>
                        <h5 class="avalibility" v-if="counter > getDetail.stock && !getDetail.is_in_stock">
                          <span>Out of Stock</span>
                        </h5>
                        <h6 class="product-title">quantity</h6>
                        <div class="qty-box">
                          <div class="input-group">
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-left-minus"
                                data-type="minus"
                                data-field
                                @click="decrement()"
                              >
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              name="quantity"
                              class="form-control input-number"
                              :disabled="counter > getDetail.stock && !getDetail.is_in_stock"
                              v-model="counter"
                            />
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-right-plus"
                                data-type="plus"
                                data-field
                                @click="increment()"
                              >
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="product-buttons">
                        <button
                          class="btn btn-solid"
                          title="Add to cart"
                          @click="addToCart(getDetail, counter)"
                          :disabled="!getDetail.is_in_stock"
                        >
                          Add To Cart
                        </button>
                        <button
                            class="btn btn-solid"
                            title="buy now"
                            @click="buyNow(getDetail, counter)"
                            :disabled="!getDetail.is_in_stock"
                          >Buy Now</button>
                      </div>
                      <div class="border-product">
                        <h4 class="product-title mb-2">product details</h4>
                        <p class="short-description" v-html="getDetail.short_description "></p>
                      </div>
                      <div class="border-product">
                        <h6 class="product-title">share it</h6>
                        <div class="product-icon">
                          <ul class="product-social">
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-google-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i class="fa fa-rss"></i>
                              </a>
                            </li>
                          </ul>
                          <!-- <form class="d-inline-block">
                            <button class="wishlist-btn" @click="addToWishlist(product)">
                              <i class="fa fa-heart"></i>
                              <span class="title-font">Add To WishList</span>
                            </button>
                          </form> -->
                        </div>
                      </div>
                      <!-- <div class="border-product">
                        <h6 class="product-title">Time Reminder</h6>
                        <Timer date="December 20, 2020" />
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <section class="tab-product m-0">
                <div class="row">
                  <div class="col-sm-12 col-lg-12">
                    <b-tabs card>
                      <b-tab title="Description" active>
                        <b-card-text>
                          <p  class="product-description-cstm" v-html="getDetail.description"></p>
                        </b-card-text>
                      </b-tab>
                      <!-- <b-tab title="Video">
                        <b-card-text>
                          <div class="mt-3 text-center">
                            <iframe
                              width="560"
                              height="315"
                              src="https://now4.cdn.spotlightr.com/watch/MjUwOTY3"
                              allow="autoplay; encrypted-media"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </b-card-text>
                      </b-tab> -->
                      <!-- <b-tab title="Write Review">
                        <b-card-text>
                          <form class="theme-form">
                            <div class="form-row">
                              <div class="col-md-12">
                                <div class="media">
                                  <label>Rating</label>
                                  <div class="media-body ml-3">
                                    <div class="rating three-star">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <label for="name">Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="name"
                                  placeholder="Enter Your name"
                                  required
                                />
                              </div>
                              <div class="col-md-6">
                                <label for="email">Email</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="email"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                              <div class="col-md-12">
                                <label for="review">Review Title</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="review"
                                  placeholder="Enter your Review Subjects"
                                  required
                                />
                              </div>
                              <div class="col-md-12">
                                <label for="review">Review Title</label>
                                <textarea
                                  class="form-control"
                                  placeholder="Wrire Your Testimonial Here"
                                  id="exampleFormControlTextarea1"
                                  rows="6"
                                ></textarea>
                              </div>
                              <div class="col-md-12">
                                <button class="btn btn-solid" type="submit">Submit Your Review</button>
                              </div>
                            </div>
                          </form>
                        </b-card-text>
                      </b-tab> -->
                    </b-tabs>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <relatedProduct :productTYpe="productTYpe" :productId="productId" />
      <b-modal id="modal-1" size="md" centered hide-footer>
        <template v-slot:modal-title>{{getDetail.title}}</template>
        <img src="../../assets/images/size-chart.jpg" alt="size-chart" class="img-fluid" />
      </b-modal>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Header from '../../components/header/header2'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import Timer from '../../components/widgets/timer'
import productSidebar from '../../components/widgets/product-sidebar'
import relatedProduct from '../../components/widgets/related-products'
import cocart from '../../mixins/cocart';


export default {
  mixins: [cocart],
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
    productSidebar,
    relatedProduct
  },
  data() {
    return {
      counter: 1,
      activeColor: '',
      selectedSize: '',
      qty: '',
      size: [],
      productTYpe: '',
      productId: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      getDetail : {
        id: null,
        title: '',
      },

      loadColor: false,
      loadSizeWithColor: false,
    }
  },
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: 'products/changeCurrency',
      cart_key: 'user/cart_key'
    }),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  beforeMount() {
    this.fetchSingleProduct(this.$route.params.id);
  },
  methods: {
    priceCurrency: function () {
      this.$store.dispatch('products/changeCurrency')
    },
    addToWishlist: function (product) {
      this.$store.dispatch('products/addToWishlist', product)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100);
      return price;
    },
    // Related Products display
    relatedProducts() {
      this.productTYpe = this.getDetail.type
      this.productId = this.getDetail.id
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      let color = '';
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (variants[i].attributes.attribute_colors) {
          color = variants[i].attributes.attribute_colors.toLowerCase()
          uniqColor.push(color)
        }
        if(variants[i].attributes.attribute_pa_colors) {
          color = variants[i].attributes.attribute_pa_colors.toLowerCase()
          uniqColor.push(color)
        }
        if(variants[i].attributes.attribute_pa_color) {
          color = variants[i].attributes.attribute_pa_color.toLowerCase()
          uniqColor.push(color)
        }
        if(variants[i].attributes.attribute_color) {
          color = variants[i].attributes.attribute_color.toLowerCase()
          uniqColor.push(color)
        }

        if(!this.loadSizeWithColor) {
          this.sizeVariant(null ,null, color)
          this.loadSizeWithColor = true;
        }
      }

      if(!uniqColor.length) {
        if(this.getDetail.attributes.attribute_pa_colors) {
          Object.getOwnPropertyNames(this.getDetail.attributes.attribute_pa_colors.options).forEach(color => {
            uniqColor.push(color);
          });
         
        }
        if(this.getDetail.attributes.attribute_pa_color) {
          Object.getOwnPropertyNames(this.getDetail.attributes.attribute_pa_color.options).forEach(color => {
            uniqColor.push(color);
          });   
        }
        if(this.getDetail.attributes.attribute_color) {
          Object.getOwnPropertyNames(this.getDetail.attributes.attribute_color.options).forEach(color => {
            uniqColor.push(color);
          });   
        }
        if(!this.loadColor) {
          this.getDetail.variants.filter((item) => {
            this.size.push(item)
          })
          this.loadColor = true;
        }
      }

      this.size.reverse();
      return [... new Set(uniqColor)];
    },
  
    addToCart (product, qty) {
      /* Set cart key for session */
      product.cart_key = this.cart_key;
      if(!this.getDetail.variants.length) {
        product.quantity = qty || 1
        this.$store.dispatch('cart/addToCart', product)
        this.$router.push({
            path: '/page/account/cart'
        })
      }

      /* Add to cart with variations */
      if(this.getDetail.variants.length && this.selectedSize) {
        product.quantity = qty || 1
        product.color = this.activeColor;
        this.getDetail.variants.filter((item) => {
          if(item.id == this.selectedSize && item.attributes['attribute_pa_product-size']) {
            product.size = item.attributes['attribute_pa_product-size'];
            product.variation = item;
          } 
          if(item.id == this.selectedSize && item.attributes['attribute_product-size']) {
            product.size = item.attributes['attribute_product-size'];
            product.variation = item;
          }
          if(item.id == this.selectedSize && item.attributes['attribute_pa_product-sizes']) {
            product.size = item.attributes['attribute_pa_product-sizes'];
            product.variation = item;
          } 
        })
        this.$store.dispatch('cart/addToCart', product)
        this.$router.push({
            path: '/page/account/cart'
        })
      }else {
        this.$toast.open({
            message: 'Please select size and color!',
            type: 'error',
            position: 'top-right',
        });
      }
    },
    buyNow: function (product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
      this.$router.push('/page/account/checkout')
    },
    increment() {
      this.counter++
    },
    decrement() {
      if (this.counter > 1) this.counter--
    },
    changeSizeVariant(variant) {
      this.selectedSize = variant.id
      this.size.reverse();
    },
    getImgUrl(path, isUrl = false) {
      return isUrl ? path : require('@/assets/images/' + path)
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    sizeVariant(id, slideId, color) {
      // this.swiper.slideTo(slideId, 1000, false)
      if(!this.loadColor) {
        this.size = []
        this.activeColor = color
        this.getDetail.variants.filter((item) => {
          if(item.attributes.attribute_colors) {
            if (this.activeColor == item.attributes.attribute_colors.toLowerCase()) {
                this.size.push(item)
            }
          }
          if(item.attributes.attribute_pa_colors) {
            if (this.activeColor == item.attributes.attribute_pa_colors.toLowerCase()) {
                this.size.push(item)
            }
          }
          if(item.attributes.attribute_pa_color) {
            if (this.activeColor == item.attributes.attribute_pa_color.toLowerCase()) {
                this.size.push(item)
            }
          }
          if(item.attributes.attribute_color) {
            if (this.activeColor == item.attributes.attribute_color.toLowerCase()) {
                this.size.push(item)
            }
          }
        })
      }
    },

    getSize(variant) {
      if(variant.attributes['attribute_pa_product-size']) {
        return variant.attributes['attribute_pa_product-size'].toUpperCase();
      }
      if(variant.attributes['attribute_size']) {
        return variant.attributes['attribute_size'].toUpperCase();
      }
      if(variant.attributes['attribute_product-size']) {
        return variant.attributes['attribute_product-size'].toUpperCase();
      }
      if(variant.attributes['attribute_pa_product-sizes']) {
        return variant.attributes['attribute_pa_product-sizes'].toUpperCase();
      }
    },
    parseColor(color) {
      let colors = {
        'dark-red' : '#790606', 
        'dark-blue' : '#06038D',
        'bright-red' : '#EE4B2B',
        'apricot' : '#FBCEB1',
        'light green': '#b7dacb',
      }

      if(colors[color]) {
        return colors[color];
      } 

      return color;
    },
  }
}
</script>

  <style>
  .product-description-cstm li {
    display: list-item;
    margin-left : 2.5em;
  }

  .product-description-cstm h5 {
    margin-top: 20px;
  }


  .product-description-cstm  ul {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .product-description-cstm a {
    color: red;
  }

  .product-description-cstm p strong {
    font-size: 20px;
  }

  .product-description-cstm p b {
    font-size: 20px;
  }


  .nav-cstm {
    margin: -20px;
    font-size: 40px;
    color: black;
  }
  .v-toast__text {
    color: white !important;
  }

@media only screen and (max-width: 500px) {
  .size-full {
    height:  200px;
    width: 350px;
    margin-bottom: 40px;
  }
}
@media only screen and (min-width: 500px) {
  .size-full {
    height: 400px;
    width: 650px;
    margin-bottom: 40px;
  }
}

.short-description {
  font-size: 16px;
}

.product-description-cstm .last-section h5{
  font-size: 14px !important;
  margin-top: 10px;
}

.short-description br{
  display: block; /* makes it have a width */
  content: ""; /* clears default height */
  margin-top: 10px; /* change this to whatever height you want it */
}
</style>