<template>
  <div>
    <Header />
    <Breadcrumbs title="Blog" />
    <section class="blog-detail-page section-b-space ratio2_3">
      <div class="container">
        <section class="section-b-space blog-page ratio2_3">
          <div class="row">
          <div class="col-md-7 blog-detail">
            <div class="container">
              <div class="row">
              <div class="col-sm-1">
              </div>
              <div class="col-sm-10">
                <img :src='blog.image' class="img-fluid" alt="blog" />
              </div>
              </div>
            </div>
            <h3 class="text-center mt-2">{{ blog.display_title }}</h3>
            <ul class="post-social">
              <li>{{ blog.date }}</li>
              <li>Posted By : {{ blog.author_name }}</li>
              <li>
                <i class="fa fa-comments"></i>  Comment(s) {{ blog.comment_count }}
              </li>
            </ul>
            <div v-html="blog.content.rendered"></div>
          </div>
          <BlogSidebar :showPopularTags="false" />
        </div>
        </section>


        <div class="row section-b-space" style="display: none;">
          <div class="col-sm-12">
            <ul class="comment-section">
              <li>
                <div class="media">
                  <img :src='"@/assets/images/avtar.jpg"' alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Mark Jecno
                      <span>( 12 Jannuary 2018 at 1:30AM )</span>
                    </h6>
                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <img :src='"@/assets/images/2.jpg"' alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Mark Jecno
                      <span>( 12 Jannuary 2018 at 1:30AM )</span>
                    </h6>
                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <img :src='"@/assets/images/20.jpg"' alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Mark Jecno
                      <span>( 12 Jannuary 2018 at 1:30AM )</span>
                    </h6>
                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row blog-contact" style="display: none;">
          <div class="col-sm-12">
            <h2>Leave Your Comment</h2>
            <form class="theme-form">
              <div class="form-row">
                <div class="col-md-12">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your name"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" required />
                </div>
                <div class="col-md-12">
                  <label for="exampleFormControlTextarea1">Comment</label>
                  <textarea
                    class="form-control"
                    placeholder="Write Your Comment"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-solid" type="submit">Post Comment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  
import Header from '../../components/header/header2'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import BlogSidebar from './widgets/blog-sidebar'
import { mapState } from 'vuex';
import axios from 'axios';
import $ from 'jquery';

export default {
  components: {
    Header,
    Breadcrumbs,
    Footer,
    BlogSidebar
  },

  computed: mapState({
    current: state => state.blog.current
  }),

  data() {
    return {
      blog: {
        content: {

        }
      },
    }
  },

  async mounted() {

    this.initScrollToDiv();

    let params = {
      params : {
        per_page: 30,
        slug: this.$route.params.id,
      },
      type: 'single'
    };
    this.$store.dispatch('blog/fetchBlogs', params).then( ()=>{
      let blog = [];
      blog.push(this.current);
      this.fetchCompeteData(blog);
    });

  },
  
  methods: {
    async fetchCompeteData(current_blogs) {
      let blog = {};
    
      await Promise.all(current_blogs.map(item => 
        axios.get(item.image_link).then( response =>{
          item.image = response.data.guid.rendered;
          item.thumbnail = response.data.media_details.sizes.thumbnail.source_url;
        }).then(() =>{
          axios.get(item.author_link).then( response =>{
            item.author_name = response.data.name;
          }).then(() =>{
          axios.get(item.replies_link).then( response =>{
            item.comment_count = response.data.length;
            blog = item;

          console.log(item)
          this.blog = blog;
          })
        })
        })
      ));
    },
    initScrollToDiv() {
      $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
  }
  },
}
</script>

<style>

  .blog-detail {
    border-style: solid;
    border-width: 0px 1px 0px 0px;
    border-color: #D3D3D3ED;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  }

  .blog-detail img {
    height: auto;
    max-width: 100%;
    border: none;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  #toc_container {
    border: 1px solid #aaa;
    padding: 10px;
    margin-bottom: 1em;
    width: auto;
    display: table;
    font-size: 95%;
}
#toc_container p.toc_title {
    text-align: center;
    font-weight: 700;
    margin: 0;
    padding: 0;
}

#toc_container.no_bullets li, #toc_container.no_bullets ul, #toc_container.no_bullets ul li, .toc_widget_list.no_bullets, .toc_widget_list.no_bullets li {
    background: 0 0;
    list-style-type: none;
    list-style: none;
}

#toc_container ul ul {
    margin-left: 1.5em;
}

#toc_container li {
    display: list-item;
    text-align: -webkit-match-parent;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: #c36;
}

p {
    margin-top: 0;
    margin-bottom: 0.9rem;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.wp-block-image figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
}

.wp-block-image .aligncenter {
    margin-left: auto;
    margin-right: auto;
}



.wp-block-image.aligncenter, .wp-block-image .aligncenter, .wp-block-image.alignleft, .wp-block-image .alignleft, .wp-block-image.alignright, .wp-block-image .alignright {
    display: table;
}

.wp-block-image.aligncenter>figcaption, .wp-block-image .aligncenter>figcaption, .wp-block-image.alignleft>figcaption, .wp-block-image .alignleft>figcaption, .wp-block-image.alignright>figcaption, .wp-block-image .alignright>figcaption {
    display: table-caption;
    caption-side: bottom;
}

.blog-detail-page .blog-detail img {
    margin-bottom: 5px;
}
.wp-block-image.aligncenter>figcaption, .wp-block-image .aligncenter>figcaption, .wp-block-image.alignleft>figcaption, .wp-block-image .alignleft>figcaption, .wp-block-image.alignright>figcaption, .wp-block-image .alignright>figcaption {
    display: table-caption;
    caption-side: bottom;
}
.wp-block-image figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
}
.elementor *, .elementor :after, .elementor :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
figcaption {
    font-size: 16px;
    color: #333;
    line-height: 1.4;
    font-style: italic;
    font-weight: 400;
}

.red-line {
  color: #F40847;
  padding-right: 10px;
}

</style>