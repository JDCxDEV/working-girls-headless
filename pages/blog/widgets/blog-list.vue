<template>
<div>
  <div
      class="row"

    >
      <div class="col-xl-12">
        <div class="row">
          <div class="col-sm-4 mb-2 text-center"
            v-for="(blog,index) in bloglist"
            :key="index"
            v-show="setPaginate(index)"
          >
            <div class="card card-blog">
              <img class="card-img-top collection-img" :src="blog.image"  alt="Card image cap">
              <div class="card-body text-center">
                <h5 class="card-title">{{ blog.display_title}}</h5>
                <div v-html="parseBlog(blog.description)"></div>
               
              </div>
              <div class="card-footer">
                <a :href="'/blog/' + blog.slug" class="btn btn-danger">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="row blog-media"
      v-for="(blog,index) in bloglist"
      :key="index"
      v-show="setPaginate(index)"
    >
      <div class="col-xl-6">
        <div class="blog-left">
          <nuxt-link :to="{ path: '/blog/' + blog.slug}">
            <img :src="blog.image" class="img-fluid" alt />
          </nuxt-link>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="blog-right">
          <div>
            <h6>{{ blog.date }}</h6>
            <nuxt-link :to="{ path: '/blog/' + blog.slug}">
              <h4>{{blog.display_title}}</h4>
            </nuxt-link>
            <ul class="post-social">
              <li>Posted By : {{blog.author_name}}</li>
              <li>
                <i class="fa fa-comments"></i> {{ blog.comment_count }} Comment(s)
              </li>
            </ul>
            <div v-html="blog.description"></div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="product-pagination border-cls-blog mb-0" v-if="bloglist.length > this.paginate">
      <div class="theme-paggination-block">
        <div class="row">
          <div class="col-sm-12">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current-1)" :class="{'disabled' : pages[0]  == 1}">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="(page_index, index) in this.pages"
                  :key="index"

                >
                  <a
                    class="page-link"
                    href="javascrip:void(0)"
                    :class="{'active-btn' : page_index == current }"
                    @click.prevent="updatePaginate(page_index)"
                  >{{ page_index }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" :class="{'disabled' : pages.slice(-1)[0]  == paginates}" @click="updatePaginate(current+1)">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
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
      current: 1,
      paginate: 12,
      paginateRange: 3,
      pages: [],
      paginates: '',
      bloglist: [],
    }
  },

  watch: {
    bloglist: {
      handler: function (after, before) {
        this.getPaginate();
        this.updatePaginate(1);
      },
      deep: true,
    }
  },

  computed: mapState({
    bloglistRaw: state => state.blog.bloglist
  }),

  async mounted() {
    let params = {
      params : {
        per_page: 100
      },
      type: 'list'
    }
    this.$store.dispatch('blog/fetchBlogs', params).then( ()=>{
      this.fetchCompeteData(this.bloglistRaw).then(() =>{

      });
    });
  },
  methods: {
    getImgUrl(path) {
      return path;
    },
    getPaginate() {
      this.paginates = Math.round(this.bloglist.length / this.paginate)
      this.pages = []
      for (let i = 0; i < this.paginates; i++) {
        this.pages.push(i + 1)
      }
    },
    setPaginate(i) {
      if (this.current === 1) {
        return i < this.paginate
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        )
      }
    },
    updatePaginate(i) {
      this.current = i
      let start = 0
      let end = 0
      if (this.current < this.paginateRange - 1) {
        start = 1
        end = start + this.paginateRange - 1
      } else {
        start = this.current - 1
        end = this.current + 1
      }
      if (start < 1) {
        start = 1
      }
      if (end > this.paginates) {
        end = this.paginates
      }
      this.pages = []
      for (let i = start; i <= end; i++) {
        this.pages.push(i)
      }
      return this.pages
    },
    async fetchCompeteData(item) {
      let blogs = [];
      await Promise.all(item.map(item => 
        axios.get(item.image_link).then( response =>{
          item.image = response.data.guid.rendered;
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
    },
    parseBlog(text) {
      if(text.length > 120) {
        return text.slice(0, 120) + '...';
      }

      return text;
    }
  }
}
</script>


<style>
.disabled {
  pointer-events: none;
  background-color: lightgray;
}

.active-btn {
  pointer-events: none;
  background-color: #ececee;
}

.collection-img {
  height: 200px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
}

.card-title {
  font-weight: 600 !important;
  line-height: 14px;
  font-size: 14px;
}

.card-blog {
  height: 400px;
}

.card-footer {
  background-color: white;
  border-top: 0px solid rgba(0, 0, 0, 0.125);
}
</style>