<template>
  <div>
    <section class="p-4 mt-5 deal-of-day-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-1">
                </div>
                <div class="col-md-3">
                    <div class="product-box" v-if="product_first.id">
                        <productBox1
                            :singleProduct="true"
                            @opencartmodel="showCart"
                            @showCompareModal="showCoampre"
                            @openquickview="showQuickview"
                            @showalert="alert"
                            @alertseconds="alert"
                            :product="product_first"
                        />
                    </div>
                </div>
                <div class="col-md-4 text-center mt-5">
                    <div class="title3">
                        <h4>{{subtitle}}</h4>
                        <h2 class="title-inner3">Deal of the day</h2>
                        <div class="line"></div>
                    </div>
                    <h3 class="deal-of-day"></h3>
                    <div class="row text-center ml-5 mr-5 mb-3 mt-5">
                        <div class="col-md-6">
                            <h5>HOURS</h5>
                        </div>
                        <div class="col-md-6">
                            <h5>MINS</h5>
                        </div>
                    </div>
                    <div class="row text-center ml-5 mr-5 mt-3">
                        <div class="col-md-6">
                            <h3>{{ hours }}</h3>
                        </div>
                        <div class="col-md-6">
                            <h3>{{ minutes }}</h3>
                        </div>
                        <div class="col-md-12">
                            <a  href="collection/all" class="btn btn-solid btn-danger btn-round mt-3 mb-3">Shop Now</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="product-box" v-if="product_second.id">
                        <productBox1
                            :singleProduct="true"
                            @opencartmodel="showCart"
                            @showCompareModal="showCoampre"
                            @openquickview="showQuickview"
                            @showalert="alert"
                            @alertseconds="alert"
                            :product="product_second"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import Banner from './banner';
import cocart from '../../../../mixins/cocart';
import productBox1 from '../../../../components/product-box/product-box1.vue';
import moment from 'moment';
import 'moment-timezone';
export default {
    mixins: [cocart],
    components: {
        Banner,
        productBox1
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
            seconds: 0,
            product_first: {},
            product_second: {},
        }
    }, 

    mounted() {
        this.initTimer();
        this.fetchSingleProductWithParams({ tag:  1132});
    },

    methods: {
        initTimer() {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            const countDown =  moment().add(1,'days').startOf('day');

            var duration = moment.duration(countDown.diff(moment()));
            var hours = duration.asHours();
            var minutes = this.getDecimal(hours);

            const x = setInterval(()=> {    

            const now = moment().unix(),
      
            distance = countDown - now;
    
            this.hours = Math.trunc(hours);
            this.minutes = Math.round(minutes);


            }, 0)
        },

        getDecimal(num) {
            if (Number.isInteger(num)) {
                return 0;
            }

            const decimalStr = num.toString().split('.')[1];
            const minutesToDecimal = '0.' + Number(decimalStr);
            const minutes = Number(minutesToDecimal) * 60;
            return minutes;
        },
        alert(item) {
            this.dismissCountDown = item
        },
        showQuickview(item, productData) {
            this.showquickviewmodel = item
            this.quickviewproduct = productData
        },
        showCoampre(item, productData) {
            this.showcomparemodal = item
            this.comapreproduct = productData
        },
        closeCompareModal(item) {
            this.showcomparemodal = item
        },
        showCart(item, productData) {
            this.showcartmodal = item
            this.cartproduct = productData
        },
        closeCartModal(item) {
            this.showcartmodal = item
        }
    }
}
</script>

<style>
.deal-of-day {
    font-size: 35px;
    font-weight: 700;
    text-transform: uppercase;
}

.deal-of-day-bg {
    background: #f7f2f2;
}
</style>