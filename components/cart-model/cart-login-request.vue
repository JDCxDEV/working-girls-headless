<template>
  <div>
    <b-modal
      id="modal-checkout"
      size="lg"
      centered
      title="Add-to-cart"
      :hide-footer="true"
      :hide-header="true"
    >
      <div class="row">
        <div class="col-lg-12">
          <div class="media">

          </div>
          <div class="product-section">
              <div class="col-12 product-upsell text-center">
                <h4>Redirecting to checkout</h4>
              </div>
              <div class="row">
              </div>
            </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: ['openCart'],
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: 'products/changeCurrency' 
    })
  },
  methods: {
    // Get Image Url
    getImgUrl(path) {
      return path.full
    },
    closeCart(val) {
      val = false
      this.$emit('closeCart', val)
    },
    cartRelatedProducts(collection, id) {
      return this.products.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          if (item.id !== id) {
            return item
          }
        }
      })
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount / 100)
    }
  }
}
</script>
