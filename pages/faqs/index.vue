<template>
    <div>
      <Header />
        <div class="container mb-5 mt-5">
            <div class="row">
                <div class="col-md-12 text-center">         
                <div class="title2 section-t-space" style="padding-top: 30px;">
                    <div class="title1 mt-5">
                        <h2 class="title-inner1 v2" style="margin-top: -50px;"></h2>
                        <h2 class="title-inner1" style="margin-top: -20px;">FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-1 @click="faq_visible_1 = faq_visible_1 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHY DO YOU HAVE A SUBSCRIPTION PROGRAM?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-1 @click="faq_visible_1 = faq_visible_1 == false ? true : false;">
                    <button  v-if="!faq_visible_1" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_1" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-1">
                        <b-card>Our subscription program allows us to buy in quantity so as to get the best quality product at the lowest possible price. This saving is then passed on to our members..</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-2 @click="faq_visible_2 = faq_visible_2 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">CAN I BUY FROM YOU IF I AM NOT A MEMBER?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_2 = faq_visible_2 == false ? true : false;">
                    <button  v-if="!faq_visible_2" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_2" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-2">
                        <b-card>Absolutely! The prices you see displayed here are our standard prices. When you become a member you get a minimum 25% discount as well as FREE standard shipping on all orders over $25! Members see special pricing when logged in.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-3 @click="faq_visible_3 = faq_visible_3 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">HOW CAN I CANCEL MY SUBSCRIPTION?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_3 = faq_visible_3 == false ? true : false;">
                    <button  v-if="!faq_visible_3" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_3" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-3">
                        <b-card>With a single click 🙂 All you need to do is log in to your Member Page and click the ‘Cancel My Subscription” button. You can also put your subscription on hold just as easily.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-4 @click="faq_visible_4 = faq_visible_4 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHEN WILL I BE BILLED FOR MY SUBSCRIPTION?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_4 = faq_visible_4 == false ? true : false;">
                    <button  v-if="!faq_visible_4" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_4" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-4">
                        <b-card>Our billing is done on a calendar monthly cycle. If you join on the 10th of the month, your subscription will renew on the 10th of each month.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-5 @click="faq_visible_5 = faq_visible_5 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHAT CURRENCY ARE YOUR PRICES IN?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_5 = faq_visible_5 == false ? true : false;">
                    <button  v-if="!faq_visible_5" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_5" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-5">
                        <b-card>All our prices are quoted in USD.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-6 @click="faq_visible_6 = faq_visible_6 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHAT SIZES DO YOU STOCK?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_6 = faq_visible_6 == false ? true : false;">
                    <button  v-if="!faq_visible_6" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_6" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-6">
                        <b-card>We try hard to meet the needs of every buyer by going all the way from XS to 6XL. Of course some designs are simply not suitable for every size so you will not always find your size in a particular outfit.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-7 @click="faq_visible_7 = faq_visible_7 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHAT IF I AM UNSURE ABOUT MY SIZE?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_7 = faq_visible_7 == false ? true : false;">
                    <button  v-if="!faq_visible_7" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_7" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-7">
                        <b-card>Our size charts include UK/AU, Euro, USA and Asian sizes. If in doubt, we recommend you go up one size rather than down. Members are able to easily change their size preference on their Member Page. For example, if you joined as a 2XL but lose weight, you can change to an XL subscription with just one mouse click. That change will reflect in your next delivery.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-8 @click="faq_visible_8 = faq_visible_8 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHERE DO YOU SHIP FROM?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_8 = faq_visible_8 == false ? true : false;">
                    <button  v-if="!faq_visible_8" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_8" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-8">
                        <b-card>We hold stock in Australia, China and the USA. However, not all designs and sizes are stocked in each country. Depending on your location, it can take anything between 3 and 20 days for delivery to occur. Your tracking code will allow you to monitor the progress of your order.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-9 @click="faq_visible_9 = faq_visible_9 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHEN WILL MY LINGERIE BE SENT?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_9 = faq_visible_9 == false ? true : false;">
                    <button  v-if="!faq_visible_9" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_9" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-9">
                        <b-card>The monthly selection is sent to subscribers on the 20th of each month. Individual purchases are usually sent within 24 hours of your order. If there is any delay, you will be notified immediately. A tracking number is issued within 24 hours of posting. </b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-10 @click="faq_visible_10 = faq_visible_10 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">WHAT IF I DON’T LIKE THE PRODUCT?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_10 = faq_visible_10 == false ? true : false;">
                    <button  v-if="!faq_visible_10" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_10" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-10">
                        <b-card>We’ll be terribly disappointed but you can rely 100% on our “love it or return” policy. If you’re not happy, we’re not happy. Please note that for health reasons, returns must be unworn and in the original packaging. Please contact us within 14 days of receipt for a return authorisation.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-11 @click="faq_visible_10 = faq_visible_10 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">CAN I PURCHASE A SUBSCRIPTION AS A GIFT?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_11 = faq_visible_11 == false ? true : false;">
                    <button  v-if="!faq_visible_11" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_11" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-11">
                        <b-card>You most certainly can. Lingerie is the gift that keeps giving so don’t wait for a special occasion. Note that the subscription will remain in your name but the actual membership will be in your gift recipient’s name.</b-card>
                    </b-collapse>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-4 text-left" v-b-toggle.collapse-12 @click="faq_visible_12 = faq_visible_12 == false ? true : false;">
                    <b-button  class="m-1 text-dark bg-white border-0">CAN I INCLUDE A PERSONAL MESSAGE?</b-button>
                </div>
                <div class="col-md-4 text-right" v-b-toggle.collapse-2 @click="faq_visible_11 = faq_visible_12 == false ? true : false;">
                    <button  v-if="!faq_visible_12" class="m-1 text-dark bg-white border-0"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    <button v-if="faq_visible_12" class="m-1 text-dark bg-white border-0"><i class="fa fa-minus text-danger" aria-hidden="true"></i></button>
                </div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-2 text-left" ></div>
                <div class="col-md-8">
                    <b-collapse id="collapse-12">
                        <b-card>Not at this time but it is something we are working on.</b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  </template>
  <script>
  import Header from '../../components/header/header2'
  import Footer from '../../components/footer/footer1'

  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        faq_visible_1: false,
        faq_visible_2: false,
        faq_visible_3: false,
        faq_visible_4: false,
        faq_visible_5: false,
        faq_visible_6: false,
        faq_visible_7: false,
        faq_visible_8: false,
        faq_visible_9: false,
        faq_visible_10: false,
        faq_visible_11: false,
        faq_visible_12: false,
      }
    }
  }
  </script>
  