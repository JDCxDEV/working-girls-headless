import CoCartAPI from "@cocart/cocart-rest-api";

const state = {
  user: {},
  billing: {},
  shipping: {},
  has_calculated_shipping: true,
  is_vat_exempt: false,
  validated: false,
  credential: {},
  guest: true,
}
// getters
const getters = {
  user: (state) => {
    return state.user
  },
  billing: (state) => {
    return state.billing
  },
  shipping: (state) => {
    return state.shipping
  },
  has_calculated_shipping: (state) => {
    return state.has_calculated_shipping
  },
  is_vat_exempt: (state) => {
    return state.is_vat_exempt
  },
  credential: (state) => {
    return state.credential
  },
  validated: (state) => {
    return state.validated
  },
  cart_key: (state) => {
    return state.cart_key
  },
}
// mutations
const mutations = {
  setCredential: (state, payload) => {
    state.credential = payload;
  },
  setUserDetails: (state, payload) => {
    state.user = payload.user;
    state.billing = payload.billing;
    state.shipping = payload.shipping;
    state.has_calculated_shipping = payload.has_calculated_shipping;
    state.is_vat_exempt = payload.is_vat_exempt;
    state.validated = true;
    state.guest = false;
  },
  unsetUserDetails: (state, payload) => {
    state.user = {};
    state.billing = {};
    state.shipping = {};
    state.has_calculated_shipping = {};
    state.is_vat_exempt = {};
    state.validated = false;
    state.credential = {};
    state.guest = true;
  },
}
// actions
const actions = {
  async fetchUserDetails({ state, commit }, payload) {
      try {
        const CoCartPro = new CoCartAPI({
          url: process.env.VUE_APP_API_URL,
          version: 'cocart/v1',
          consumerKey: state.credential.email,
          consumerSecret: state.credential.password,
          timeout: 5000,
        });
    
        const result = await CoCartPro.get('customer');
        commit('setUserDetails', result.data);

      }
      catch (error) {
        console.log(error)
      }
  }, 
  unsetUserDetails({ state, commit }, payload) {
    try {
      commit('unsetUserDetails', {});
    }
    catch (error) {
      console.log(error)
    }
}, 
  setCredential: (context, payload) => {
    context.commit('setCredential', payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
