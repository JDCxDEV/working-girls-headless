<template>
  <div>
    <Header />
    <!-- <Breadcrumbs title="Checkout" /> -->
     <LoginModal :openCart="showLoginModal"  @closeCart="closeModal" />
    <Footer />
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
import { mapGetters } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import LoginModal from '../../../components/cart-model/cart-login-request'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
    LoginModal
  },
  computed: {
    ...mapGetters({
      cart: 'cart/cartItems',
      cartTotal: 'cart/cartTotalAmount',
      curr: 'products/changeCurrency',
      cart_key: 'cart/cartKey'
    })
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
      },
      isLogin: false,
      paypal: {
         sandbox: 'Your_Sendbox_Key'
      },
      payment: false,
      environment: 'sandbox',
      button_style: {
        label: 'checkout',
        size: 'medium', // small | medium | large | responsive
        shape: 'pill', // pill | rect
        color: 'blue' // gold | blue | silver | black
      },
      amtchar: '',
      showLoginModal: false,
    }
  },
  mounted() {
    this.$bvModal.show('modal-checkout');
    setTimeout(
      () => {
        window.location.replace("https://mysecretdrawer.com/au/api-checkout/?cocart-load-cart=" + this.cart_key);
      },
      3000
    );
    
  },
  methods: {
    order() {
      this.isLogin = localStorage.getItem('userlogin')
      if (this.isLogin) {
        this.payWithStripe()
      } else {
        this.$router.replace('/page/account/login-firebase')
      }
    },
    payWithStripe() {
      const handler = (window).StripeCheckout.configure({
          key: 'PUBLISHBLE_KEY', // 'PUBLISHBLE_KEY'
        locale: 'auto',
        closed: function () {
          handler.close()
        },
        token: (token) => {
          this.$store.dispatch('products/createOrder', {
            product: this.cart,
            userDetail: this.user,
            token: token.id,
            amt: this.cartTotal
          })
          this.$router.push('/page/order-success')
        }
      })
      handler.open({
        name: 'Multikart ',
        description: 'Reach to your Dream',
        amount: this.cartTotal * 100
      })
    },
    getamt() {
      return this.cartTotal.toString()
    },
    onPaymentComplete: function (data) {
      this.$store.dispatch('products/createOrder', {
        product: this.cart,
        userDetail: this.user,
        token: data.orderID,
        amt: this.cartTotal
      })
      this.$router.push('/page/order-success')
    },
    onCancelled() {
      console.log('You cancelled a window')
    },
    onSubmit() {
      console.log('Form has been submitted!')
    },
    closeModal(item) {
      this.showLoginModal = item;
    },
  }
}
</script>
