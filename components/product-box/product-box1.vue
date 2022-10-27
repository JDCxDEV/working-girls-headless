<template>
  <div>
    <div class="img-wrapper">
      <div class="lable-block">
        <span class="lable3" v-if="product.new">new</span>
        <span class="lable4" v-if="product.on_sale">on sale</span>
      </div>
      <div class="front">
        <nuxt-link :to="{ path: '/product/'+product.slug}">
          <img
            :src='getImgUrl(imageSrc ? imageSrc : product.images[0].src.full, true)'
            :id="product.id"
            class="img-fluid bg-img custom-img-collection-all"
            :class="{customImgCollection : singleProduct }"
            :alt="product.title"
            :key="index"
          />
        </nuxt-link>
      </div>
      <ul class="product-thumb-list">
        <li
          class="grid_thumb_img"
          :class="{active: imageSrc === image.src.full}"
          v-for="(image,index) in product.images.slice(0,4)"
          :key="index"
          @click="productVariantChange(image.src.full)"
        >
          <a href="javascript:void(0);">
            <img :src="getImgUrl(image.src.full, true)" />
          </a>
        </li>
      </ul>
      <div class="cart-info cart-wrap">
          <!-- <button
            data-toggle="modal"
            data-target="#addtocart"
            title="Add to cart"
            @click="addToCart(product)"
            v-b-modal.modal-cart
            variant="primary"
          >
            <i class="ti-shopping-cart"></i>
          </button> -->
        <!-- <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
        </a> -->
        <a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" v-b-modal.quickview-modal variant="primary">
          <i class="ti-search" aria-hidden="true"></i>
        </a>
        <!-- <a href="javascript:void(0)" title="Compare" @click="addToCompare(product)" v-b-modal.modal-compare variant="primary">
          <i class="ti-reload" aria-hidden="true"></i>
        </a> -->
      </div>
    </div>
    <div class="product-detail">
      <div>
        <template v-for="rating in Math.round(product.average_rating)">
          <i class="fa fa-star" style="color: #ffd200;"></i>
        </template>
        <template v-for="rating in (5 - Math.round(product.average_rating))">
          <i class="fa fa-star" style="color: gray;"></i>
        </template>
      </div>
      <nuxt-link :to="{ path: '/product/'+product.slug}">
        <h6>{{ product.title }}</h6>
      </nuxt-link>
      <p v-html="product.short_description"></p>
      <h4 v-if="product.on_sale">
        {{ product.price | currency(curr.symbol) }}
        <del>{{ product.regular_price }}</del>
      </h4>
      <h4 v-else>{{ product.price | currency(curr.symbol) }}</h4>
      <ul class="color-variant" v-if="product.variants">
        <li v-for="(variant,variantIndex) in Color(product.variants)" :key="variantIndex">
          <a
            @click="productColorchange(variant, product)"
            :class="[variant]"
            v-bind:style="{ 'background-color' : parseColor(variant)}"
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { log } from 'util'
export default {
  props: ['product', 'index', 'singleProduct'],
  data() {
    return {
      imageSrc: '',
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: '',
        image: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path, isUrl = false) {
      const lightCache = process.env.VUE_APP_LIGHT_CACHE != 'false'? process.env.VUE_APP_API_URL : '';
      return isUrl ? lightCache + path : require('@/assets/images/' + path) 
    },
    addToCart: function (product) {
      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)
      this.$store.dispatch('cart/addToCart', product)
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs
      this.$emit('showalert', this.dismissCountDown)
      this.$store.dispatch('products/addToWishlist', product)
    },
    showQuickview: function (productData) {
      this.showquickview = true
      this.quickviewProduct = productData
      this.$emit('openquickview', this.showquickview, this.quickviewProduct)
    },
    addToCompare: function (product) {
      this.showCompareModal = true
      this.compareProduct = product
      this.$emit('showCompareModal', this.showCompareModal, this.compareProduct)
      this.$store.dispatch('products/addToCompare', product)
    },
    Color(variants) {
     const uniqColor = []
      let color = '';
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (variants[i].attributes.attribute_colors) {
          color = variants[i].attributes.attribute_colors.toLowerCase()
          uniqColor.push(color)
        }
        if(variants[i].attributes.attribute_pa_color) {
          color = variants[i].attributes.attribute_pa_color.toLowerCase()
          uniqColor.push(color)
        }
      }

      return [... new Set(uniqColor)];
    },
    productColorchange(color, product) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.imageSrc = img.src
            }
          })
        }
      })
    },
    productVariantChange(imgsrc) {
      this.imageSrc = imgsrc
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    parseColor(color) {
      let colors = {
        'dark-red' : '#790606', 
        'dark-blue' : '#06038D',
        'bright-red' : '#EE4B2B',
        'apricot' : '#FBCEB1',
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
@media only screen and (min-width: 500px) {
  .custom-img-collection {
    min-height: 400px;
    max-height: 400px;
  }

  .custom-img-collection-all {
    min-height: 300px;
    max-height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}


</style>