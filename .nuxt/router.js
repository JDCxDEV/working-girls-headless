import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b610530 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _476b0402 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _32e16be6 = () => interopDefault(import('..\\pages\\faqs\\index.vue' /* webpackChunkName: "pages/faqs/index" */))
const _de18a80c = () => interopDefault(import('..\\pages\\our-models-sizes\\index.vue' /* webpackChunkName: "pages/our-models-sizes/index" */))
const _292d26cf = () => interopDefault(import('..\\pages\\privacy-and-security\\index.vue' /* webpackChunkName: "pages/privacy-and-security/index" */))
const _7438e9c4 = () => interopDefault(import('..\\pages\\your-size-chart\\index.vue' /* webpackChunkName: "pages/your-size-chart/index" */))
const _652def6a = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _bd293dbe = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _5411ce5e = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _731f848e = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _c08bec9a = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _106918a6 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _5ac91376 = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _6d7a9495 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _b4706cb2 = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _43945ceb = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _a1ae2bfe = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _e6d76cd4 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _7d716ee5 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _0a458d10 = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _5b198cdf = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _ec0815e2 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _a3d463e6 = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _424b7a1f = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _ee117f22 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _14daf614 = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _8e3b0cea = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _f0112f4a = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _5c12e76e = () => interopDefault(import('..\\pages\\shop\\bags\\index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _b7c14bd0 = () => interopDefault(import('..\\pages\\shop\\beauty\\index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _1aab2245 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _1e88fb70 = () => interopDefault(import('..\\pages\\shop\\fashion\\index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _a3f6d7fa = () => interopDefault(import('..\\pages\\shop\\fashion-2\\index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _94938d3c = () => interopDefault(import('..\\pages\\shop\\fashion-3\\index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _e013424e = () => interopDefault(import('..\\pages\\shop\\flower\\index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _c2685b64 = () => interopDefault(import('..\\pages\\shop\\furniture\\index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _5c92f965 = () => interopDefault(import('..\\pages\\shop\\gym\\index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _95277546 = () => interopDefault(import('..\\pages\\shop\\jewellery\\index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _3e128207 = () => interopDefault(import('..\\pages\\shop\\kids\\index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _6014d6e0 = () => interopDefault(import('..\\pages\\shop\\pets\\index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _019f0c98 = () => interopDefault(import('..\\pages\\shop\\shoes\\index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _44740076 = () => interopDefault(import('..\\pages\\shop\\tools\\index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _a209993c = () => interopDefault(import('..\\pages\\shop\\vegetables\\index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _4a936451 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _24f141b4 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _23f30c94 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _1c4c2016 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _0899df88 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _7308bf9a = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _775d08e4 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _c62dab16 = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _06a8e23a = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _ed69943e = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _7b3038a3 = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _3eb9fb19 = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _da35bd8a = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _da6d5bea = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _da512ce8 = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _2656f4f1 = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _1c936283 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _49c00306 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _221e539a = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _3f6a4b4e = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _035e010c = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _c0abda78 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _61caada1 = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _b441f980 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _1d7f5d05 = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _0ed7592e = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _0ebb2a2c = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _0e9efb2a = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _7eea1e1f = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _132e8d20 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _b11a07be = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _95ccd856 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _302b0e94 = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _763cb738 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _ae2a2f58 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _9c9187c2 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _f3b784c0 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _80210210 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _592d42d2 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _035330ee = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _5bbed1db = () => interopDefault(import('..\\pages\\shop\\bags\\components\\banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _548a1dde = () => interopDefault(import('..\\pages\\shop\\bags\\components\\blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _d110a626 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _57959a15 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _7c7fed90 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _2fbd2fd3 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _da1ddaa2 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _4527b331 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _d6dd5f66 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _49a82de0 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _0effbc06 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _14a4bbe2 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _1bf300bc = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _476e9f3f = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _06ce43a1 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _5913f292 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _544cb7b0 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _2397c8ec = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _df2b38bc = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _78b826d8 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _3218a861 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _5cee3853 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _c08e6cd4 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _7048838d = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _2c5c170a = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _9cf480d4 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _936e153c = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _b7080832 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _39cacd7f = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _35b60c97 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _cd485b88 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _41ae95b2 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _3db5628d = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _62333ed1 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\countdown.vue' /* webpackChunkName: "pages/shop/fashion/components/countdown" */))
const _312c47d2 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _7ae422d6 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _67395ec1 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _5021e8e5 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _42208724 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _18c8e971 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _801e36fe = () => interopDefault(import('..\\pages\\shop\\flower\\components\\blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _d12cdc9a = () => interopDefault(import('..\\pages\\shop\\flower\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _9f1047c4 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _71343b3a = () => interopDefault(import('..\\pages\\shop\\flower\\components\\instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _e3429260 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _7a7fe886 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _0fb2c080 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _33224e26 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _40ff8814 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\banner.vue' /* webpackChunkName: "pages/shop/furniture/components/banner" */))
const _4913b428 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _928f8fc4 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _2610feda = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _2cc27a52 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\countdown.vue' /* webpackChunkName: "pages/shop/furniture/components/countdown" */))
const _c660310c = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _5eed532b = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _4c767a75 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _a5b4ae10 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _2873e4ef = () => interopDefault(import('..\\pages\\shop\\gym\\components\\instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _1c906280 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _7e66858f = () => interopDefault(import('..\\pages\\shop\\gym\\components\\product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _ddaaad18 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _4e948529 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _77c3ad4e = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _d0337e32 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _f0f5a8d2 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _41fde11a = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _b371a5a8 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _7d90668e = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _2c42df08 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _25c8d54c = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _b59426fe = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _7561e991 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _603bc6d8 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _69311673 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _7e4dfc62 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _1781b812 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _671a1bcc = () => interopDefault(import('..\\pages\\shop\\pets\\components\\blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _9954f51a = () => interopDefault(import('..\\pages\\shop\\pets\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _5e39637b = () => interopDefault(import('..\\pages\\shop\\pets\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _535c68da = () => interopDefault(import('..\\pages\\shop\\pets\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _350f2112 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _03e7cbd9 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _4a0f728e = () => interopDefault(import('..\\pages\\shop\\pets\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _6b88147d = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _00d70d3c = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _e716a112 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _a47ab684 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _0aa99c64 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _0ab7b3e5 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _6bf70dec = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _4971903f = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _4a9d5827 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _3a5d9bbc = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _34d45bc0 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _36f10da5 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _1676bdbe = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _ea3aa7ac = () => interopDefault(import('..\\pages\\shop\\tools\\components\\about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _5d1b51f1 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _41f6325c = () => interopDefault(import('..\\pages\\shop\\tools\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _699f909c = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _33e6c06a = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _1454af40 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _2bf723dc = () => interopDefault(import('..\\pages\\shop\\tools\\components\\service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _7e8601d8 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _fb2b893c = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _11711058 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _75f741e7 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _83ef17d8 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _01d75297 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _ceb5bc40 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _44b44409 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _731ec3e5 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _6dbf99e3 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _183d4612 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _6e0e104a = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _cc227f44 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _33364c58 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _70386745 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _711c5e08 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _2b0a00cd = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _21be3075 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _62248c60 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _871f6358 = () => interopDefault(import('..\\pages\\collection\\_id.vue' /* webpackChunkName: "pages/collection/_id" */))
const _46f89863 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _0816ec6c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _0b610530,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _476b0402,
    name: "contact-us"
  }, {
    path: "/faqs",
    component: _32e16be6,
    name: "faqs"
  }, {
    path: "/our-models-sizes",
    component: _de18a80c,
    name: "our-models-sizes"
  }, {
    path: "/privacy-and-security",
    component: _292d26cf,
    name: "privacy-and-security"
  }, {
    path: "/your-size-chart",
    component: _7438e9c4,
    name: "your-size-chart"
  }, {
    path: "/blog/blog-nosidebar",
    component: _652def6a,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _bd293dbe,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _5411ce5e,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _731f848e,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _c08bec9a,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _106918a6,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _5ac91376,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _6d7a9495,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _b4706cb2,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _43945ceb,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _a1ae2bfe,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _e6d76cd4,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _7d716ee5,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _0a458d10,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _5b198cdf,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _ec0815e2,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _a3d463e6,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _424b7a1f,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _ee117f22,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _14daf614,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _8e3b0cea,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _f0112f4a,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _5c12e76e,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _b7c14bd0,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _1aab2245,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _1e88fb70,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _a3f6d7fa,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _94938d3c,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _e013424e,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _c2685b64,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _5c92f965,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _95277546,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _3e128207,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _6014d6e0,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _019f0c98,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _44740076,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _a209993c,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _4a936451,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _24f141b4,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _23f30c94,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _1c4c2016,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _0899df88,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _7308bf9a,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _775d08e4,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _c62dab16,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _06a8e23a,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _ed69943e,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _7b3038a3,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _3eb9fb19,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _da35bd8a,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _da6d5bea,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _da512ce8,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _2656f4f1,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _1c936283,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _49c00306,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _221e539a,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _3f6a4b4e,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _035e010c,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _c0abda78,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _61caada1,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _b441f980,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _1d7f5d05,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _0ed7592e,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _0ebb2a2c,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _0e9efb2a,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _7eea1e1f,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _132e8d20,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _b11a07be,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _95ccd856,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _302b0e94,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _763cb738,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _ae2a2f58,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _9c9187c2,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _f3b784c0,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _80210210,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _592d42d2,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _035330ee,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _5bbed1db,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _548a1dde,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _d110a626,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _57959a15,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _7c7fed90,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _2fbd2fd3,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _da1ddaa2,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _4527b331,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _d6dd5f66,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _49a82de0,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _0effbc06,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _14a4bbe2,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _1bf300bc,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _476e9f3f,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _06ce43a1,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _5913f292,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _544cb7b0,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _2397c8ec,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _df2b38bc,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _78b826d8,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _3218a861,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _5cee3853,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _c08e6cd4,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _7048838d,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _2c5c170a,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _9cf480d4,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _936e153c,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _b7080832,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _39cacd7f,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _35b60c97,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _cd485b88,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _41ae95b2,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _3db5628d,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/countdown",
    component: _62333ed1,
    name: "shop-fashion-components-countdown"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _312c47d2,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _7ae422d6,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _67395ec1,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _5021e8e5,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _42208724,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _18c8e971,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/flower/components/blog",
    component: _801e36fe,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _d12cdc9a,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _9f1047c4,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _71343b3a,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _e3429260,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _7a7fe886,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _0fb2c080,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _33224e26,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/banner",
    component: _40ff8814,
    name: "shop-furniture-components-banner"
  }, {
    path: "/shop/furniture/components/blog",
    component: _4913b428,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _928f8fc4,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _2610feda,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/countdown",
    component: _2cc27a52,
    name: "shop-furniture-components-countdown"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _c660310c,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _5eed532b,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _4c767a75,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _a5b4ae10,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _2873e4ef,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _1c906280,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _7e66858f,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _ddaaad18,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _4e948529,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _77c3ad4e,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _d0337e32,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _f0f5a8d2,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _41fde11a,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _b371a5a8,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _7d90668e,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _2c42df08,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _25c8d54c,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _b59426fe,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _7561e991,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _603bc6d8,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _69311673,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _7e4dfc62,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _1781b812,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _671a1bcc,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _9954f51a,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _5e39637b,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _535c68da,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _350f2112,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _03e7cbd9,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _4a0f728e,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _6b88147d,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _00d70d3c,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _e716a112,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _a47ab684,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _0aa99c64,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _0ab7b3e5,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _6bf70dec,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _4971903f,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _4a9d5827,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _3a5d9bbc,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _34d45bc0,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _36f10da5,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _1676bdbe,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _ea3aa7ac,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _5d1b51f1,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _41f6325c,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _699f909c,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _33e6c06a,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _1454af40,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _2bf723dc,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _7e8601d8,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _fb2b893c,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _11711058,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _75f741e7,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _83ef17d8,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _01d75297,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _ceb5bc40,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _44b44409,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _731ec3e5,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _6dbf99e3,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _183d4612,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _6e0e104a,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _cc227f44,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _33364c58,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _70386745,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _711c5e08,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _2b0a00cd,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _21be3075,
    name: "shop-watch-components-top_products"
  }, {
    path: "/blog/:id",
    component: _62248c60,
    name: "blog-id"
  }, {
    path: "/collection/:id?",
    component: _871f6358,
    name: "collection-id"
  }, {
    path: "/product/:id?",
    component: _46f89863,
    name: "product-id"
  }, {
    path: "/",
    component: _0816ec6c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
