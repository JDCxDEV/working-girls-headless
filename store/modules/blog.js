import formatHelper from './../../mixins/resuable/format'
import _ from 'lodash';
import axios from 'axios';

const helper = new formatHelper;

const state = {
  current: {},
  bloglist: [],
  recentBlogList: [],
}
// getters
const getters = {
  getblogTag: (state) => {
    const uniqueTag = []
    const blogTag = []
    state.bloglist.map((blog, index) => {
      
      if (blog.categories) {
          blog.categories.map((tag) => {
            blogTag.push(tag)
          })
      }
    }) 

    return Array.from(new Set(blogTag));
  }
}
// mutations
const mutations = {
  setBloglist: (state, payload) => {
    state.bloglist = payload
  },
  setRecentBloglist: (state, payload) => {
    state.recentBlogList = payload
  },
  setCurrentBlog: (state, payload) => {
    state.current = payload
  },  
}
// actions
const actions = {
  async fetchBlogs({ commit }, payload) {
    try {

      let url =  process.env.VUE_APP_BLOG_API_URL + "posts?";
      let params = {
        /* Default  number of blogs */
      };

      params = new URLSearchParams(_.pickBy(payload.params)).toString();
      
      let blogs = [];
      const result = await axios.get(url + params);

      if(result.data.length) {
        result.data.forEach((item) => {
          blogs.push(helper.formatBlog(item));
        });  
      }

      if(payload.type == 'list') {
        commit('setBloglist', blogs);
      }else if(payload.type == 'single'){
        commit('setCurrentBlog', blogs[0]);
      }else {
        commit('setRecentBloglist', blogs);
      }

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
