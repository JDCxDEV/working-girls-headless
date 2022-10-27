import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
  url: process.env.VUE_APP_API_URL,
  version: 'cocart/v2'
});

const state = {
  products: [],
  cart: [],
  cart_key: '',
  cart_json: {}
}
// getters
const getters = {
  cartItems: (state) => {
    return state.cart
  },
  cartTotal: (state) => {
    return state.cart_json.totals
  },
  cartKey: (state) => {
    return state.cart_key
  },
  cartHasCoupon: (state) => {
    return state.cart_json.coupons.length ? true : false;
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + (product.price * product.quantity)
    }, 0)
  }
}
// mutations
const mutations = {
  updateCartQuantity: (state, payload
    
    
     ) => {
    // Calculate Product stock Counts
    function calculateStockCounts(item, quantity) {
      const qty = item.quantity + quantity
      const stock = item.stock
      if (stock < qty && !item.is_in_stock) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty;
        console.log(state.cart[index])
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {
          state.cart.push({
            ...product,
            quantity: qty
          })
        }
        return true
      }
    })
  },
  removeCartItem: (state, payload) => {
    const index = state.cart.indexOf(payload)
    state.cart.splice(index, 1)
  },
  setCartInformation: (state, payload) => {
    state.cart_key = payload.cart_key;
    state.cart = payload.items;
    state.cart_json = payload;
  },
}
// actions
const actions = {
  addToCart: ({ dispatch, state }, payload) => {
    const product = payload
    CoCart.post("cart/add-item?" + 'cart_key=' + state.cart_key, {
      id: product.variation.id.toString(),
      quantity: product.quantity.toString(),
    })
    .then((response) => {
      // Successful request
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      console.log("Response Data:", response.data);
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      dispatch('fetchCartInformation')
    });
  },
  async fetchCartInformation({ dispatch, state, commit }, payload) {
    try {
      
      const CoCartPro = new CoCartAPI({
        url: process.env.VUE_APP_API_URL,
        version: 'cocart/v2',
      });

      let params = state.cart_key ? '?cart_key=' + state.cart_key : '';
      const result = await CoCartPro.get('cart' + params);
      commit('setCartInformation', result.data);
    }
    catch (error) {
      console.log(error)
    }
  },
  async updateProductQuantity({ dispatch, state, commit }, {vm, payload}) {
    try {
      const product = payload;
      CoCart.post("cart/item/" + product.item_key + '?cart_key=' + state.cart_key, {
        "quantity": payload.quantity.value
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        let error_message = '';
        
        if(error.response.data.code == 'cocart_quantity_invalid_amount') {
          if(payload.quantity.value <= 0) {
            error_message = 'Invalid quantity - '
          }else {
            error_message = 'Low on stock - '
          }
        }

        vm.$toast.open({
          message: error_message + error.response.data.message,
          type: 'error',
          position: 'top-right',
        });
      })
      .finally((error) => {
        dispatch('fetchCartInformation')
      });
    }
    catch (error) {
      console.log(error)
    }
  },
  removeToCart: ({ dispatch, state }, payload) => {
    const product = payload
    CoCart.delete("cart/item/" + product.item_key + '?cart_key=' + state.cart_key)
    .then((response) => {
      // Successful request
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      console.log("Response Data:", response.data);
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      dispatch('fetchCartInformation')
    });
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
    context.commit('removeCartItem', payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
