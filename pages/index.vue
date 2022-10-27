<template>
  <div>
    <Fashion />
  </div>
</template>

<script>
const Fashion = () => import('./shop/furniture');
import { mapGetters } from 'vuex';
export default {
  components: {
    Fashion
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      credential: 'user/credential',
      billing: 'user/billing',
      shipping: 'user/shipping',
      validated: 'user/validated',
    }),
  },

  mounted() {
    if(this.validated && this.user.id == 0) {
        this.$store.dispatch('user/fetchUserDetails').then(() =>{
          this.$router.push({path: '/page/account/dashboard'});
        });
    }
  }
}
</script>


