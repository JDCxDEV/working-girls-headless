<template>
    <div>
      <b-modal
        id="subscribe-modal"
        size="lg"
        centered
        title="Quickview"
        :hide-footer="true"
        :hide-header="true"

      >
        <div class="row text-center">
            <div class="col-md-6">
              <img src="https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/06/R80759-1-3-flipped.jpg"  class="img-fluid" alt="">
            </div>
            <div class="col-md-6">
                <img :src='"@/assets/images/custom/logo/logo.png"' style="height:50px;" alt="logo" />
                <h2 class="text-danger mt-5">Subscribe!</h2>
                <h4 class="mt-2"> We will Brighten Up Your Sundays!</h4>
                <h6 class="mt-4">The latest outfits, special offers and new stories delivered to your inbox every Sunday morning.</h6>
                <button class="btn btn-solid btn-danger btn-round mt-4" @click="$emit('hideModal')"> Close</button>
                <hr class="mt-5">
                Relax... we hate SPAM even more then you do!
            </div>    
        </div>
      </b-modal>
    </div>
  </template>
  <script>
  export default {
    props: ['openModal'],
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {

    }
  }
  </script>
  
  <style>
    #subscribe-modal .modal-content {
      padding: 0px;
    }
  </style>