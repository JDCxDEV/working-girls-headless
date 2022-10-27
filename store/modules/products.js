import CoCartAPI from "@cocart/cocart-rest-api";
import formatHelper from './../../mixins/resuable/format'
import _ from 'lodash';
import { componentsPlugin } from "bootstrap-vue";

const CoCart = new CoCartAPI({
  url: process.env.VUE_APP_API_URL,
  version: 'cocart/v2'
});
const helper = new formatHelper;

const state = {
  productslist: [],
  products: [],
  pagination: {
    page: 0,
    total_pages: 0,
    total_products: 0,
    links: {},
  },
  wishlist: [],
  compare: [],
  currency: {
    curr: 'usd',
    symbol: '$'
  },
  order: [],
  locale: 'en',
  searchProduct: [],
  relatedProducts: [],
}
// getters
const getters = {
  getcollectionProduct: (state) => {
    return collection => state.products.filter((product) => {
      return collection === product.collection
    })
  },
  getProductById: (state) => {
    return id => state.products.find((product) => {
      return product.id === +id
    })
  },
  compareItems: (state) => {
    return state.compare
  },
  wishlistItems: (state) => {
    return state.wishlist
  },
  changeCurrency: (state) => {
    if (state.currency.curr === 'eur') {
      state.currency.curr = 0.90
      return state.currency
    } else if (state.currency.curr === 'inr') {
      state.currency.curr = 70.93
      return state.currency
    } else if (state.currency.curr === 'gbp') {
      state.currency.curr = 0.78
      return state.currency
    } else if (state.currency.curr === 'usd') {
      state.currency.curr = 1
      return state.currency
    }
  },
  getOrder: (state) => {
    return state.order;
  },
  getProductList: (state) => {
    return state.productslist;
  },
  getPagination: (state) => {
    return state.pagination;
  }
}
// mutations
const mutations = {
  changeCurrency: (state, payload) => {
    state.currency = payload
  },
  addToWishlist: (state, payload) => {
    const product = state.products.find(item => item.id === payload.id)
    const wishlistItems = state.wishlist.find(item => item.id === payload.id)
    if (wishlistItems) {
    } else {
      state.wishlist.push({
        ...product
      })
    }
  },
  removeWishlistItem: (state, payload) => {
    const index = state.wishlist.indexOf(payload)
    state.wishlist.splice(index, 1)
  },
  addToCompare: (state, payload) => {
    const product = payload;
    const compareItems = state.compare.find(item => item.id === payload.id)
    if (compareItems) {
    } else {
      state.compare.push({
        ...product
      })
    }
  },
  removeCompareItem: (state, payload) => {
    const index = state.compare.indexOf(payload)
    state.compare.splice(index, 1)
  },
  searchProduct: (state, payload) => {
    payload = payload.toLowerCase()
    state.searchProduct = []
    if (payload.length) {
      state.products.filter((product) => {
        if (product.title.toLowerCase().includes(payload)) {
          state.searchProduct.push(product)
        }
      })
    }
  },
  createOrder: (state, payload) => {
    state.order = payload
  },
  setProducts: (state, payload) =>{
    state.productslist = payload;
  },
  setPagination: (state, payload) =>{
    state.pagination = payload;
  },
  setRelatedProducts: (state, payload) =>{
    state.relatedProducts = payload;
  },
}
// actions
const actions = {
  changeCurrency: (context, payload) => {
    context.commit('changeCurrency', payload)
  },
  addToWishlist: (context, payload) => {
    context.commit('addToWishlist', payload)
  },
  removeWishlistItem: (context, payload) => {
    context.commit('removeWishlistItem', payload)
  },
  addToCompare: (context, payload) => {
    context.commit('addToCompare', payload)
  },
  removeCompareItem: (context, payload) => {
    context.commit('removeCompareItem', payload)
  },
  searchProduct: (context, payload) => {
    context.commit('searchProduct', payload)
  },
  createOrder: (context, payload) => {
    context.commit('createOrder', payload)
  },

  async fetchProducts({ commit }, payload) {
    try {

      let url = "products?";
    
      let params = {
        /* Default  number of product */
        per_page: 8,
      };
      
      params = {...params, ...payload?.params};
      
      if(!params.min_price) {
        params.min_price = 1;
      }

      if(params.category == 'all') {
        delete params.category; 
      }
      
      
      params = new URLSearchParams(_.pickBy(params)).toString();
  
      url += params + payload?.string_url;

      let products = [];
      const result = await CoCart.get(url);

      result.data.products.forEach((item) => {
        products.push(helper.formatProduct(item));
      });

      /* create pagination object */
      const pagination = {
        page: result.data.page,
        total_pages: result.data.total_pages,
        total_products: result.data.total_products,
        links: result.data._links,
      }

      commit('setProducts', products);
      commit('setPagination', pagination);

      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  },

  async fetchRelatedProducts({ commit }, payload) {
    try {

      let relatedProducts = [];

      await Promise.all(payload.map(id => 
        CoCart.get("products/" + id).then( response =>{
          relatedProducts.push(helper.formatProduct(response.data));
        })
      ));

      commit('setRelatedProducts', relatedProducts);

    }
    catch (error) {
        alert(error)
        console.log(error)
    }
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
