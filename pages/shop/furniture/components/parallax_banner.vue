<template>
    <div>
<section class="p-0">
    <div class="full-banner parallax text-center parallax-banner p-left" v-bind:style="{ 'background-image': `url(${imagepath})` }">
         <img :src="imagepath" alt class="bg-img d-none" />
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="banner-contain" style="text-shadow: 6px 6px 0px rgba(0,0,0,0.2);">
                        <!-- <h2>{{title}}</h2>
                        <h3 style="color:whitesmoke">{{subtitle}}</h3> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      imagepath: require('@/assets/images/custom/banner/parallax.jpg'),
      title: '2022',
      subtitle: 'My Secret Drawer',
    }
  }
}
</script>

<style>

.parallax-banner {
    background-size: cover;
    background-size: 100% 100% !important;
    height: 70vh !important;
}
@media only screen and (max-width: 600px) {
  .parallax-banner {
    background-size: cover;
    background-size: 95% 40% !important;
    height: 40vh !important;
  }
}
</style>
