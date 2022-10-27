<template>
<div>
  <div class="container mt-3 mb-3">
    <div class="row">
      <div class="col-md-6">
        <img  src="https://344800.smushcdn.com/915356/wp-content/uploads/sites/13/2021/04/blue-lingerie.png?lossy=0&strip=1&webp=1" class="img-fluid">
    </div>
    <div class="col-md-6">
      <div class="title2 section-t-space" style="padding-top: 30px;">
      <div class="title1 mt-5">
        <h2 class="title-inner1 v2" style="margin-top: -50px;"></h2>
        <h2 class="title-inner1" style="margin-top: -20px;">Our Story</h2>
      </div>
    <div>
      <div class="our-info">
        <p class="text-left">
          My Secret Drawer ® is a global lingerie brand based in Australia. Our goal is to design and make beautiful, affordable, quality lingerie for the beautiful you – no matter your age, your size, your gender or your location.
          We know that lovely lingerie titillates and excites. It stimulates the imagination and the body. It’s an aid to love-making bliss. Whether you wear it under your work clothes or under your bed covers, beautiful lingerie will always enhance the beautiful you!
        </p>
        <h3 class="text-left text-danger">Love it or return it!</h3>
        <p class="text-left">
          It’s simple. If you’re not happy, we aren’t happy. Return your selection unworn and in the original packaging and we will happily refund or replace at your choice.
        </p>
        <h3 class="text-left text-danger">Your Size</h3>
        <p class="text-left">
          ‘One Size’ might work for socks but it sure doesn’t work for lingerie! In fact, getting deliveries of ridiculously small outfits is the very reason My Secret Drawer® was born. We proudly make styles and sizes from XS to 6XL because we are all unique.
        </p>
        <h3 class="text-left text-danger">Free delivery</h3>
        <p class="text-left">
          All orders over $95 are delivered free anywhere in the world a courier can reasonably reach. Members get free delivery on all orders over $50 and get an automatic 10% discount on every item!
        </p>
        <h3 class="text-left text-danger">Secure Payment facilities</h3>
        <p class="text-left">
          All payments are handled externally by our payment partners, PayPal and Stripe. We do not see or store your credit card or account details.
        </p>
        <h3 class="text-left text-danger">Pay in 4</h3>
        <p class="text-left">
          You have the option of paying as you purchase or using our ‘Pay in 4’ options via either Wizpay or PayPal.
        </p>
        <a  href="collection/all" class="btn btn-solid btn-circle mt-2 text-left">shop now</a>
      </div>

      </div>
    </div>
    </div>
    </div>
  </div>
  <section class="blog blog-2 section-b-space mt-4" >
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="title1">
                    <!-- <h4>{{subtitle}}</h4> -->
                    <h2 class="title-inner1 v2" style="margin-top: -50px;"></h2>
                    <h2 class="title-inner1" style="margin-top: -20px;">{{title}}</h2>
                </div>
                <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(blog,index) in bloglist" :key="index">
                <a :href="'/blog/' + blog.slug">
                  <div class="classic-effect">
                    <div>
                      <img
                      
                        :src="blog.image"
                        class="collection-img "
                        alt
                      />
                    </div>
                    <span></span>
                  </div>
                </a>
                <div class="blog-details">
                  <h4>{{blog.date}}</h4>
                  <a :href="'/blog/' + blog.slug">
                    <p>{{blog.display_title}}</p>
                  </a>
                  <hr class="style1" />
                  <h6>by: {{ blog.author_name }} , {{ blog.comment_count}} Comment(s)</h6>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</section>
</div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
  data() {
    return {
      title: 'My Secret Stories',
      subtitle: 'My Secret Stories',
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          } 
        },
      },
      
      bloglist: [],
    }
  },
  computed: mapState({
    bloglistRaw: state => state.blog.recentBlogList
  }),
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    }
  },


  async mounted() {

    let params = {
      params: {
        per_page:4,
        order: 'desc',
      },
    }
    this.$store.dispatch('blog/fetchBlogs', params).then( ()=>{
      this.fetchCompeteData(this.bloglistRaw);
    });
  },

  methods: {
    async fetchCompeteData(item) {
      let blogs = [];
      await Promise.all(item.map(item => 
        axios.get(item.image_link).then( response =>{
          item.image = response.data.guid.rendered;
          item.thumbnail = response.data.media_details.sizes.thumbnail.source_url;
          item.medium = response.data.media_details.sizes.medium.source_url;
        }).then(() =>{
          axios.get(item.author_link).then( response =>{
            item.author_name = response.data.name;
          }).then(() =>{
          axios.get(item.replies_link).then( response =>{
            item.comment_count = response.data.length;
          })
          blogs.push(item);
        })
        })
  
      ));
      this.bloglist = blogs;
    }
  }
}
</script>


<style>
  .collection-img {
    display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;

  }

.title1 .title-inner1:after {
    position: absolute;
    height: 5px;
    width: 150px;
    background-color: #ff4c3b;
    background-color: var(--theme-deafult);
    content: "";
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
}

.our-info p {
  font-family: "Raleway", Sans-serif;
  font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
}

.our-info  h3{
  font-weight: bolder;
}
  </style>
  