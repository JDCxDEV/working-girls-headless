<template>
    <div>
      <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="text-center landing-image"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain text-white" >
                        <div class="slider-banner-text text-right">
                            <h4 class="text-white mb-4">{{ item.subtitle_top }}</h4>
                            <div class="text-white"  style="text-transform: none; font-family: Allura !important; font-size: 76px; max-width: 75%; line-height: 65px;">{{ item.title }}</div>
                            <h4 class="text-white mt-4" style="text-transform: none;">{{ item.subtitle }}</h4>
                            <a  v-if="item.hasButton" href="collection/all" style="margin-top: 200px !important" class="pull-right text-right btn btn-solid btn-circle">shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/custom/banner/landing.jpg'),
          title: '',
          subtitle_top:'',
          alignclass: 'p-left',
          hasButton: false,
        },
        {
          imagepath: require('@/assets/images/custom/banner/landing-2.jpeg'),
          title: '',
          subtitle: '',
          alignclass: 'p-right',
          hasButton: true,
        }
      ]
    }
  }
}
</script>

<style>
.slider-banner-text {
  text-align: initial;
  font-family: "Raleway", Sans-serif  ;
}
.slider-banner-text h4{
  margin-top: 10px;
  max-width: 70%;
  font-size: 18px;
  font-weight: 400 !important;
  line-height: 25px;
  letter-spacing: 0.10em !important;
}

.btn-circle {
  border-radius: 20px !important;
}

.center-slider .home, .home-slider .home {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    height: 87vh !important;
}

.landing-image {
  background-size: cover; 
  background-size: 100% 100% !important; 
  height: 86.5vh !important;
}

@media only screen and (max-width: 1745.5px) {
  .landing-image {
    background-size: cover; 
    background-size: 100% 100% !important; 
    height: 85vh !important;
  }
}

@media only screen and (max-width: 1536.5px) {
  .landing-image {
    background-size: cover; 
    background-size: 100% 100% !important; 
    height: 83vh !important;
  }
}

@media only screen and (max-width: 1280.5px) {
  .landing-image {
    background-size: cover; 
    background-size: 100% 100% !important; 
    height: 75vh !important;
  }
}

@media only screen and (max-width: 600px) {
  .landing-image {
    background-size: cover; 
    background-size: 100% 100% !important; 
    height: 40.5vh !important;
  }
}

</style>
