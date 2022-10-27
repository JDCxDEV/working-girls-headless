<template>

  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
        </div>
      </a>
      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">For Her
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }" style="width:250px;">
            <template v-for="category in categories">
              <li>
                <a :href="category.path">{{ category.title }}</a>
              </li>
            </template>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">For Him
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }" style="width:250px;">
            <li>
              <a href="/collection/men">Men</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">THE PLAYGROUND
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }" style="width:250px;">
              <li>
                <a href="/collection/bdsm">BDSM</a>
              </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">YOUR SIZE?
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }" style="width:250px;">
            <li>
              <a href="/your-size-chart/">OUR SIZE CHART</a>
            </li>
            <li>
              <a href="/our-models-sizes/">OUR MODELS’ SIZES</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/blog">stories</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['leftSidebarVal'],
  data() {
    return {
      activeItem: 'clothing'
    }
  },
  computed: {
    ...mapState({
      categories: state => state.menu.categories,
    }),
  },
  mounted() {
    this.$store.dispatch('menu/getCategories')
  },
  methods: {
    closeLeftBar(val) {
      val = false
      this.$emit('closeVal', val)
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    }
  }
}
</script>
