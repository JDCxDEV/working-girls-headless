<template>
  <div class="col-xl-3 col-lg-4 col-md-3">
    <div class="blog-sidebar">
      <div class="theme-card">
        <h4><b class="red-line">|</b>Recent Blog</h4>
        <ul class="recent-blog">
          <li v-for="(blog,index) in bloglist" :key="index">
            <nuxt-link :to="{ path: '/blog/' + blog.slug}">
              <div class="media">
                <img :src="blog.thumbnail" class="img-fluid" alt />
                <div class="media-body align-self-center">
                  <h6>{{ blog.date }}</h6>
                  <p>{{ blog.display_title }}</p>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="theme-card" v-if="showPopularTags">
        <h4>Popular Tags</h4>
        <ul class="popular-tag">
          <li v-for="(tag,index) in tags" :key="index">
            <span>{{ tag }}</span>
          </li>
        </ul>
      </div>
      <div class="theme-card">
        <h4><b class="red-line">|</b>Follow Us</h4>
        <ul class="siderbar-social-media">
          <li>
            <a href="https://www.facebook.com/MySecretDrawerOfficial/">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.ph/MySecretDrawer/">
              <i class="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_mysecretdrawers">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mysecretdrawerco/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCZSCmoSR7M-Ac7eVlbCDj9Q">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {

  data() {
    return {
      tags : [],
      bloglist: [],
    }
  },

  props : {
    showPopularTags: {
      default : true,
      type: String
    },
  },

  
  computed: mapState({
    bloglistRaw: state => state.blog.bloglist
  }),
  
  async mounted() {
    let params = {
      params: {
        per_page: 10 ,
        order: 'desc',
      },
    }
    this.$store.dispatch('blog/fetchBlogs', params).then( ()=>{
      this.fetchCompeteData(this.bloglistRaw);
    });
  },

  watch: {
    getblogtags: {
      handler: function (value) {
        let tags = this.getblogtags;
        if(value.length > 20) {
          tags = this.getblogtags.splice(0, 20);
        }

        this.fetchTags(tags);
      },
      deep: true,
    }
  },
  computed: {
    ...mapState({
      bloglistRaw: state => state.blog.recentBlogList
    }),
    getblogtags() {
      return this.$store.getters['blog/getblogTag']
    }
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },

    async fetchTags(item) {

      let url =  process.env.VUE_APP_BLOG_API_URL + "categories/";
      let tags = [];
      await Promise.all(item.map(item => 
        axios.get(url + item).then( response =>{
          tags.push(response.data.name);
        })
      ));
      this.tags = tags;  
    },

    async fetchCompeteData(item) {
      let blogs = [];
      await Promise.all(item.map(item => 
        axios.get(item.image_link).then( response =>{
          item.image = response.data.guid.rendered;
          item.thumbnail = response.data.media_details.sizes.thumbnail.source_url;
        }).then(() =>{
          axios.get(item.author_link).then( response =>{
            item.author_name = response.data.name;
          }).then(() =>{
          // axios.get(item.replies_link).then( response =>{
          //   item.comment_count = response.data.length;
          // })
          blogs.push(item);
        })
        })
  
      ));

      this.bloglist = blogs;
    }
  }
}
</script>


<style>
  .siderbar-social-media li:not(:first-child){
    margin-left: 20px;
  }
  .siderbar-social-media li {
    display:inline !important;
  }
</style>