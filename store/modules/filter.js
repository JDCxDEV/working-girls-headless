import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
  url: process.env.VUE_APP_API_URL,
});

const state = {
  productslist: [],
  products: [],
  tagItems: [],
  filteredProduct: [],
  paginate: 12,
  pages: [],
  priceArray: [],
  filterItems: [],
}
// getters
const getters = {
  filterbyCategory: (state) => {
    const category = [...new Set(state.products.map(product => product.type))]
    return category
  },
  filterbyBrand: (state) => {
    const brands = [...new Set(state.filteredProduct.map(product => product.brand))]
    return brands
  },
  filterbycolor: (state) => {
    let colors = []
    if(state.filterItems.length) {
      state.filterItems.filter((item) => {
        if(item.slug == 'pa_color') {
          colors = item.terms.map(term => {
            term.parent_slug = item.slug;
            return term;
          });
        }
      });
    }

    return colors;
  },
  filterbysize: (state) => {
    let size = []
    if(state.filterItems.length) {
      state.filterItems.filter((item) => {
        if(item.slug == 'pa_product-size') {
          size = item.terms.map(term => {
            term.parent_slug = item.slug;
            return term;
          });
        }
      });
    }

    return size.sort(function(a, b){return a.description - b.description});
  },

  tagItems: (state) => {
    return state.tagItems;
  },
  filterProducts: (state) => {
    return state.filteredProduct.filter((product) => {
      if (!state.tagItems.length) return true
      const Tags = state.tagItems.some((prev) => { // Match Tags
        if (product.tags) {
          if (product.tags.includes(prev)) {
            return prev
          }
        }
      })
      return Tags
    })
  },
  getPriceRange: (state) => {
    let priceRange = {};
    
    if(state.priceArray) {
      priceRange = {
        min_price : state.priceArray[0],
        max_price : state.priceArray[1]
      };
    }
    return priceRange;
  },
}
// mutations
const mutations = {
  getCategoryFilter: (state, payload) => {
    state.filteredProduct = []
    state.tagItems = []
    state.products.filter((product) => {
      if (payload === product.type) {
        state.filteredProduct.push(product)
        state.priceArray = state.filteredProduct
      }
      if (payload === 'all' || payload === undefined) {
        state.filteredProduct.push(product)
        state.priceArray = state.filteredProduct
      }
    })
  },
  getCategoryFilter: (state, payload) => {
    state.filteredProduct = []
    state.tagItems = []
    state.products.filter((product) => {
      if (payload === product.type) {
        state.filteredProduct.push(product)
        state.priceArray = state.filteredProduct
      }
      if (payload === 'all' || payload === undefined) {
        state.filteredProduct.push(product)
        state.priceArray = state.filteredProduct
      }
    })
  },
  priceFilter: (state, payload) => {
    state.priceArray = payload;
  },
  setTags: (state, payload) => {
    state.tagItems = payload
  },
  sortProducts: (state, payload) => {
    if (payload === 'a-z') {
      state.filteredProduct.sort(function (a, b) {
        if (a.title < b.title) {
          return -1
        } else if (a.title > b.title) {
          return 1
        }
        return 0
      })
    } else if (payload === 'z-a') {
      state.filteredProduct.sort(function (a, b) {
        if (a.title > b.title) {
          return -1
        } else if (a.title < b.title) {
          return 1
        }
        return 0
      })
    } else if (payload === 'low') {
      state.filteredProduct.sort(function (a, b) {
        if (a.price < b.price) {
          return -1
        } else if (a.price > b.price) {
          return 1
        }
        return 0
      })
    } else if (payload === 'high') {
      state.filteredProduct.sort(function (a, b) {
        if (a.price > b.price) {
          return -1
        } else if (a.price < b.price) {
          return 1
        }
        return 0
      })
    }
  },
  setFilterItems: (state, payload) => {
    state.filterItems = payload
  },
}
// actions
const actions = {
  getpaginate: (context, payload) => {
    context.commit('getpaginate', payload)
  },
  getCategoryFilter: (context, payload) => {
    context.commit('getCategoryFilter', payload)
  },
  priceFilter: (context, payload) => {
    context.commit('priceFilter', payload)
  },
  setTags: (context, payload) => {
    context.commit('setTags', payload)
  },
  sortProducts: (context, payload) => {
    context.commit('sortProducts', payload)
  },
  async fetchFilterItems({ commit }) {
    try {
      let filters = [];
      const result = await CoCart.get("products/attributes");
    

      const registers = await Promise.all(result.data.map(item => 
        CoCart.get("products/attributes/" + item.id + '/terms?per_page=100&exclude=1091&hide_empty=true&orderby=description').then( response =>{
          item.terms = response.data;
          filters.push(item);
        })
      ));

      commit('setFilterItems', filters);
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
