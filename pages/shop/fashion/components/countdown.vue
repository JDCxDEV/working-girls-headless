<template>
  <div>
    <section class="p-4 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div
                        class="full-banner text-center"
                        v-bind:style="{ 'background-image': `url(${imagepath})` }"
                    >
                        <img :src="imagepath" alt class="bg-img d-none" />
                        <div class="container">
                        <div class="row">
                            <div class="col">
                                <productBox1
                                    @opencartmodel="showCartModal"
                                    @showCompareModal="showcomparemodal"
                                    @openquickview="showquickview"
                                    @showalert="alert"
                                    @alertseconds="alert"
                                    :product="product"
                                    :index="index"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-center mt-5">
                    <h1>Deal of the day</h1>
                    <div class="row text-center ml-5 mr-5 mb-3 mt-5">
                        <div class="col-md-3">
                            <h3>DAYS</h3>
                        </div>
                        <div class="col-md-3">
                            <h3>HOURS</h3>
                        </div>
                    </div>
                    <div class="row text-center ml-5 mr-5 mt-3">
                        <div class="col-md-3">
                            <h3>{{ days }}</h3>
                        </div>
                        <div class="col-md-3">
                            <h3>{{ hours }}</h3>
                        </div>
                        <div class="col-md-3">
                            <h3>{{ minutes }}</h3>
                        </div>
                        <div class="col-md-3">
                            <h3>{{ seconds }}</h3>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-solid btn-danger btn-round mt-3 mb-3">Shop Now</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import Banner from './banner'
export default {
    components: {
        Banner
    },
  data() {
    return {
      imagepath: require('@/assets/images/parallax/1.jpg'),
      title: '2022',
      subtitle: 'fashion trends',
      text: 'special offer',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }, 

  mounted() {
    this.initTimer();
  },

  methods: {
    initTimer() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;
    
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }

    
        const countDown = new Date(birthday).getTime(),
        x = setInterval(()=> {    

            const now = new Date().getTime(),
                distance = countDown - now;

            this.days = Math.floor(distance / (day)),
            this.hours = Math.floor((distance % (day)) / (hour)),
            this.minutes = Math.floor((distance % (hour)) / (minute)),
            this.seconds = Math.floor((distance % (minute)) / second);

        }, 0)
    }
  }
}
</script>
