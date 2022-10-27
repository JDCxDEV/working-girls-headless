<template>
  <div>
     <div class="row">
        <div class="col-xl-12">
          <div class="filter-main-btn"  @click="filter = !filter">
            <span class="filter-btn btn btn-theme">
              <i class="fa fa-filter" aria-hidden="true"></i> Filter
            </span>
          </div>
        </div>
      </div>
      <div class="collection-filter" :class="{ 'openFilterbar' : filter }">
     <div class="collection-filter-block">
      <!-- brand filter start -->
      <div class="collection-mobile-back">
        <span class="filter-back" @click="filter = !filter">
          <i class="fa fa-angle-left" aria-hidden="true"></i> back
        </span>
      </div>
      <div class="collection-collapse-block open">
       <h3 class="collapse-block-title" v-b-toggle.category>Category</h3>
        <b-collapse id="category" visible accordion="myaccordion" role="tabpanel">
          <div class="collection-collapse-block-content">
          <div class="collection-brand-filter">
            <ul class="category-list">
              <li
              @click="getCategoryFilter(category)"
              v-for="(category,index) in filterbyCategory"
              :key="index">
                <nuxt-link :to="{ path: category.path }" >{{ category.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </b-collapse>
      </div>
    </div>
    <!-- side-bar colleps block stat -->
    <div class="collection-filter-block">
      <!-- color filter start here -->
      <div class="collection-collapse-block open" v-if="filterbycolor.length">
        <h3 class="collapse-block-title" v-b-toggle.colors>colors</h3>
          <b-collapse id="colors" visible accordion="myaccordion2" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter color-filter">
            <div
              class="custom-control custom-checkbox collection-filter-checkbox"
              v-for="(color,index) in filterbycolor"
              :key="index"
              v-if="color.name != 'Color'"
            >
              <input
              type="checkbox"
              class="custom-control-input"
              :value="color"
              :id="color.id"
              v-model="applyFilter"
              @change="appliedFilter(color.id)" />
              <span :class="color" v-bind:style="{ 'background-color' : parseColor(color.slug) }"></span>
              <label class="custom-control-label" :class="{selected: isActive(color.name)}" v-bind:for="color.id">{{color.name}}</label>
            </div>
          </div>
        </div>
        </b-collapse>
      </div>
      <!-- size filter start here -->
      <div class="collection-collapse-block open" v-if="filterbysize.length">
        <h3 class="collapse-block-title" v-b-toggle.size>Size</h3>
         <b-collapse id="size" visible accordion="myaccordion3" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="color-selector">
            <div class="collection-brand-filter">
              <div
                class="custom-control custom-checkbox collection-filter-checkbox"
                v-for="(size,index) in filterbysize"
                :key="index"
              >
                <input
                type="checkbox"
                class="custom-control-input"
                :value="size"
                :id="size.id"
                v-model="applyFilter"
                @change="appliedFilter(size.id)" />
                <label class="custom-control-label" v-bind:for="size.id">{{size.name}}</label>
              </div>
            </div>
          </div>
        </div>
         </b-collapse>
      </div>
      <!-- price filter start here -->
      <div class="collection-collapse-block border-0 open">
        <h3 class="collapse-block-title" v-b-toggle.price>price</h3>
         <b-collapse id="price" visible accordion="myaccordion4" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter price-rangee-picker">
            <vue-slider
            v-model="value"
            :min="1"
            :max="100"
            ref="slider"
            @change="bridgeMethod($refs.slider.getValue())">
            </vue-slider>
          </div>
        </div>
         </b-collapse>
      </div>
    </div>
              <!-- side-bar single product slider start -->
        <div class="theme-card">
          <h5 class="title-border">new products</h5>
          <div class="offer-slider slide-1">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div>
                    <div class="media" v-for="(product,index) in getCategoryProduct('new products').splice(0,3)" :key="index">
                      <nuxt-link :to="{ path: '/product/'+product.slug}">
                        <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                      </nuxt-link>
                      <div class="media-body align-self-center">
                        <div class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <nuxt-link :to="{ path: '/product/'+product.slug}">
                          <h6>{{product.title}}</h6>
                        </nuxt-link>
                        <h4 v-if="product.sale">
                          {{ discountedPrice(product) * currency.curr | currency(currency.symbol) }}
                          <del>{{ product.price * currency.curr | currency(currency.symbol) }}</del>
                        </h4>
                        <h4 v-else>{{ product.price * currency.curr | currency(currency.symbol) }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="swiper-slide" v-if="getCategoryProduct('new products').length >= 4">
                  <div>
                    <div class="media" v-for="(product, index) in getCategoryProduct('new products').splice(3,3)" :key="index">
                      <nuxt-link :to="{ path: '/product/'+product.slug}">
                        <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                      </nuxt-link>
                      <div class="media-body align-self-center">
                        <div class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <h6>{{product.title}}</h6>
                        </nuxt-link>
                        <h4 v-if="product.sale">
                          {{ discountedPrice(product) * currency.curr | currency(currency.symbol) }}
                          <del>{{ product.price * currency.curr | currency(currency.symbol) }}</del>
                        </h4>
                        <h4 v-else>{{ product.price * currency.curr | currency(currency.symbol) }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="swiper-button-prev" slot="button-prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="swiper-button-next" slot="button-next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            </div>
          </div>
        </div>
            <!-- side-bar single product slider end -->
            <!-- side-bar banner start here -->

            <!-- side-bar banner end here -->
    </div>
    <!-- silde-bar colleps block end here -->
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import _ from 'lodash';

export default {
  data() {
    return {
      bannerimagepath: require('@/assets/images/side-banner.png'),
      value: [1, 50],
      selectedcolor: [],
      selectedbrand: [],
      selectedsize: [],
      applyFilter: [],
      activeItem: 'category',
      filter: false,
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    VueSlider
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      currency: state => state.products.currency
    }),
    ...mapGetters({
      filterbyCategory: 'menu/getCategories',
      filterbyBrand: 'filter/filterbyBrand',
      filterbycolor: 'filter/filterbycolor',
      filterbysize: 'filter/filterbysize'
    })
  },
  mounted() {
    
  },
  methods: {
    parseColor(color) {
      let colors = {
        'dark-red' : '#790606', 
        'dark-blue' : '#06038D',
        'bright-red' : '#EE4B2B',
        'apricot' : '#FBCEB1',
        'light-brown' : '#C4A484',
        'light-pink' : '#FFB6C1',
        'navy-blue': '#000080',
        'navyblue': '#000080',
        'purple-black': '#301934',
        'red-black': '#8B0000',
        'skintone': '#f1c27d',
      }

      if(colors[color]) {
        return colors[color];
      } 

      return color;
    },
    getCategoryProduct(collection) {
      return this.productslist.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    },
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    isActive(filterItem) {
      return this.applyFilter.indexOf(filterItem) > -1
    },
    appliedFilter(val) {
      this.$emit('allFilters', this.applyFilter)
    },
    bridgeMethod(event) {
      this.sliderChange(event, this);
    },
    sliderChange: _.debounce((event, vm) => {
        vm.$emit('priceVal', event)
    }, 1500),
    toggleSidebarBlock() {
      this.openBlock = !this.openBlock
    },
    getCategoryFilter(category) {
      this.$store.dispatch('menu/setSelectedCategory', category);
      this.$store.dispatch('filter/getCategoryFilter', category);
    }
  }
}
</script>