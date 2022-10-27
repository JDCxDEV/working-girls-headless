import Menu from '../../data/menu';
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
  url: process.env.VUE_APP_API_URL,
});

const state = {
  data: Menu.data,
  selected_category: {
    product_id: null,
  },
  categories: [],
}

// getters
const getters = {
  getMenus: (state) => state.data,
  getCategoryId: (state) => state.selected_category.product_id,
  getCategories: (state) => state.categories,
}

// mutations
const mutations = {
  setMenus(state, data) {
    state.data = data
  },
  setSelectedCategory(state, data) {
    state.selected_category = data
  },
  setCategories(state, data) {
    state.categories = data
  }         
}

// actions
const actions = {
  async fetchCategories({ commit }) {
    try {

      const params = new URLSearchParams({
        exclude: [30, 866, 149, 198, 829, 830, 785],
        per_page: 100,
      }).toString();

      const result = await CoCart.get("products/categories?"+params);

      let categories = [];
      categories.push({ "path": "/collection/" + 'all', "title": 'All Products', "type": "link", product_id: null });
      result.data.forEach((item) => {
        let category = { "path": "/collection/" + item.slug, "title": item.name.replace("&amp;", "&") , "type": "link", product_id: item.id, image: item.image?.src };
        categories.push(category);
      });

      let home_tab = {
        title: "Home", "type": "sub", "badgeValue": "new", "active": false
      };

      let categories_tab = {
        title: "Shop", "type": "sub", "active": false, 
        children: categories
      };

      let blogs_tab = {
        title: "Blog", "type": "link", "active": false,  path: "/blog",
      }

      let temp_data = Menu.data;

      temp_data = [
        home_tab,
        categories_tab,
        blogs_tab,
      ];

      commit('setMenus', temp_data);
      commit('setCategories', categories);

      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  },
  
  setSelectedCategory: (context, payload) => {
    context.commit("setSelectedCategory", payload);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
