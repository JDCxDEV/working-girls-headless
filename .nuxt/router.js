import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b528595e = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _599f0128 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _dca8c014 = () => interopDefault(import('..\\pages\\faqs\\index.vue' /* webpackChunkName: "pages/faqs/index" */))
const _08796c63 = () => interopDefault(import('..\\pages\\our-models-sizes\\index.vue' /* webpackChunkName: "pages/our-models-sizes/index" */))
const _24caea90 = () => interopDefault(import('..\\pages\\privacy-and-security\\index.vue' /* webpackChunkName: "pages/privacy-and-security/index" */))
const _4ddf9995 = () => interopDefault(import('..\\pages\\your-size-chart\\index.vue' /* webpackChunkName: "pages/your-size-chart/index" */))
const _32f92fa1 = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _18f1218a = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _47e44656 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _5ebc4b37 = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _1d0e8cdc = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _cf35b1c6 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _7fb2c06e = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _1a91debe = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _739309de = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _68df293c = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _b3f8b3ac = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _37b09f7f = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _05493ac8 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _f0cbdf8e = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _51f44908 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _3f252af4 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _28562af6 = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _0a8c3d54 = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _4165a7a6 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _757c78ad = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _306839f4 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _0237c544 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _4f4b0f72 = () => interopDefault(import('..\\pages\\shop\\bags\\index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _1e5fb701 = () => interopDefault(import('..\\pages\\shop\\beauty\\index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _107d1d3c = () => interopDefault(import('..\\pages\\shop\\electronics-1\\index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _82f27b02 = () => interopDefault(import('..\\pages\\shop\\fashion\\index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _3600a27a = () => interopDefault(import('..\\pages\\shop\\fashion-2\\index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _3db247d9 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _0a36bbc2 = () => interopDefault(import('..\\pages\\shop\\flower\\index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _26c7e0c5 = () => interopDefault(import('..\\pages\\shop\\furniture\\index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _470625c8 = () => interopDefault(import('..\\pages\\shop\\gym\\index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _3d6853d4 = () => interopDefault(import('..\\pages\\shop\\jewellery\\index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _8931f5a0 = () => interopDefault(import('..\\pages\\shop\\kids\\index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _452d4bee = () => interopDefault(import('..\\pages\\shop\\pets\\index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _2edaee8f = () => interopDefault(import('..\\pages\\shop\\shoes\\index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _0b01e1bc = () => interopDefault(import('..\\pages\\shop\\tools\\index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _2680f3cb = () => interopDefault(import('..\\pages\\shop\\vegetables\\index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _77cf4648 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _c3b8e32a = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _9b1844c2 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _d2e70602 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _7338d0a5 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _09f663de = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _3d83c845 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _12c6d1ec = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _6b1261cc = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _302178ec = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _032c471a = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _938088fc = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _0a6ae1a4 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _0bfb9ec2 = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _0c09b643 = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _11f3bb9a = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _d7cdba28 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _825cae86 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _17f04e91 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _353c4645 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _7a83393a = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _0363bf26 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _2638118a = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _2ddb11b7 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _e3ba7024 = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _6da5f920 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _6db410a1 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _6dc22822 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _18087854 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _ef7f9a52 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _1c84a1d8 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _7e58ad0c = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _2dc1c01f = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _8022f4be = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _7e5f3cfd = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _ea6506d4 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _6053e7ee = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _63b9712f = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _ae449980 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _7788b440 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _5cc70d5c = () => interopDefault(import('..\\pages\\shop\\bags\\components\\banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _c20beb70 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _0c8952a4 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _f68ea984 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _32637421 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _5ce040fc = () => interopDefault(import('..\\pages\\shop\\bags\\components\\instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _09feae58 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _1a9c07da = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _09a2f604 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _51099087 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _3e576966 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _eafb394e = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _62a9ea8b = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _33f69df6 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _7bdfe958 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _29e1d1ee = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _40d4b667 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _76d26181 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _3253a24e = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _0d55bafd = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _ba87d96c = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _b2bff288 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _0a5ea30d = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _495ec404 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _5fb3ed7e = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _22292a7f = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _26ec604b = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _0a5e6dd0 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _2652cc36 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _b34d1100 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _73023936 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _f0f445ca = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _d7bda478 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _05fd3108 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\countdown.vue' /* webpackChunkName: "pages/shop/fashion/components/countdown" */))
const _56138bee = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _c8b7a1e8 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _0bb136ea = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _2938295c = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _4f932757 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _45ebfa9a = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _35ce8bf8 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _707fd22a = () => interopDefault(import('..\\pages\\shop\\flower\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _165a4e07 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _38094d4c = () => interopDefault(import('..\\pages\\shop\\flower\\components\\instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _7ae6b587 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _39ff1fb4 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _f6773392 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _80f5cd38 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _5023a6df = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\banner.vue' /* webpackChunkName: "pages/shop/furniture/components/banner" */))
const _08993715 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _5b301047 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _579d5a0a = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _7a95f964 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\countdown.vue' /* webpackChunkName: "pages/shop/furniture/components/countdown" */))
const _19889a9e = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _60de83d8 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _10e3de5e = () => interopDefault(import('..\\pages\\shop\\gym\\components\\blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _cca4b0a2 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _c4f4eab4 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _68f6e2b7 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _21ec1f10 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _206291c6 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _2408d9d2 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _ccdb03fc = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _70fc815e = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _441e1264 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _b03f59fa = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _da61a83a = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _d2a7bd3c = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _5a81fb65 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _6b7ea516 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _49adc4aa = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _baf60a8c = () => interopDefault(import('..\\pages\\shop\\kids\\components\\instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _4085877d = () => interopDefault(import('..\\pages\\shop\\kids\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _9a3a3648 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _57643cd9 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _e54140ee = () => interopDefault(import('..\\pages\\shop\\kids\\components\\slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _d49be95e = () => interopDefault(import('..\\pages\\shop\\pets\\components\\blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _57cd5d9c = () => interopDefault(import('..\\pages\\shop\\pets\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _62466338 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _c5e3917a = () => interopDefault(import('..\\pages\\shop\\pets\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _82e2a024 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _79c57350 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _2325b305 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _3d348818 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _5e38870b = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _025256ee = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _4a349432 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _fc2e9f4a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _fc127048 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _6e7c5133 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _242d2f30 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _23b3989e = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _5a104619 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _82a7dad2 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _a7fa9948 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _3a9be88a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _00c053a1 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _eb8339cc = () => interopDefault(import('..\\pages\\shop\\tools\\components\\category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _fa624dee = () => interopDefault(import('..\\pages\\shop\\tools\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _14e2061b = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _cc6d9b5a = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _5e067da9 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _5f1613c9 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _0694467d = () => interopDefault(import('..\\pages\\shop\\tools\\components\\slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _26342d99 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _ee9fb762 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _6739e5c4 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _d1c296ea = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _b4bd7664 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _034afb57 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _b94f5c9c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _bf7c55e4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _4333ee8c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _02c07309 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _40380bd2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _3db8b295 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _7ce81ac1 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _c5490f24 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _9218b51e = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _007e5576 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _119af5c4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _746f140e = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _342d87bd = () => interopDefault(import('..\\pages\\collection\\_id.vue' /* webpackChunkName: "pages/collection/_id" */))
const _013200cc = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _70ddc273 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _b528595e,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _599f0128,
    name: "contact-us"
  }, {
    path: "/faqs",
    component: _dca8c014,
    name: "faqs"
  }, {
    path: "/our-models-sizes",
    component: _08796c63,
    name: "our-models-sizes"
  }, {
    path: "/privacy-and-security",
    component: _24caea90,
    name: "privacy-and-security"
  }, {
    path: "/your-size-chart",
    component: _4ddf9995,
    name: "your-size-chart"
  }, {
    path: "/blog/blog-nosidebar",
    component: _32f92fa1,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _18f1218a,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _47e44656,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _5ebc4b37,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _1d0e8cdc,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _cf35b1c6,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _7fb2c06e,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _1a91debe,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _739309de,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _68df293c,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _b3f8b3ac,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _37b09f7f,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _05493ac8,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _f0cbdf8e,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _51f44908,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _3f252af4,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _28562af6,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _0a8c3d54,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _4165a7a6,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _757c78ad,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _306839f4,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _0237c544,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _4f4b0f72,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _1e5fb701,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _107d1d3c,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _82f27b02,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _3600a27a,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _3db247d9,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _0a36bbc2,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _26c7e0c5,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _470625c8,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _3d6853d4,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _8931f5a0,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _452d4bee,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _2edaee8f,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _0b01e1bc,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _2680f3cb,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _77cf4648,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _c3b8e32a,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _9b1844c2,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _d2e70602,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _7338d0a5,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _09f663de,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _3d83c845,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _12c6d1ec,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _6b1261cc,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _302178ec,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _032c471a,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _938088fc,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _0a6ae1a4,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _0bfb9ec2,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _0c09b643,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _11f3bb9a,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _d7cdba28,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _825cae86,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _17f04e91,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _353c4645,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _7a83393a,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _0363bf26,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _2638118a,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _2ddb11b7,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _e3ba7024,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _6da5f920,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _6db410a1,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _6dc22822,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _18087854,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _ef7f9a52,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _1c84a1d8,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _7e58ad0c,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _2dc1c01f,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _8022f4be,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _7e5f3cfd,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _ea6506d4,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _6053e7ee,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _63b9712f,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _ae449980,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _7788b440,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _5cc70d5c,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _c20beb70,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _0c8952a4,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _f68ea984,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _32637421,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _5ce040fc,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _09feae58,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _1a9c07da,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _09a2f604,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _51099087,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _3e576966,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _eafb394e,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _62a9ea8b,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _33f69df6,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _7bdfe958,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _29e1d1ee,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _40d4b667,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _76d26181,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _3253a24e,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _0d55bafd,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _ba87d96c,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _b2bff288,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _0a5ea30d,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _495ec404,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _5fb3ed7e,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _22292a7f,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _26ec604b,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _0a5e6dd0,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _2652cc36,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _b34d1100,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _73023936,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _f0f445ca,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _d7bda478,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/countdown",
    component: _05fd3108,
    name: "shop-fashion-components-countdown"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _56138bee,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _c8b7a1e8,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _0bb136ea,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _2938295c,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _4f932757,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _45ebfa9a,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/flower/components/blog",
    component: _35ce8bf8,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _707fd22a,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _165a4e07,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _38094d4c,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _7ae6b587,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _39ff1fb4,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _f6773392,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _80f5cd38,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/banner",
    component: _5023a6df,
    name: "shop-furniture-components-banner"
  }, {
    path: "/shop/furniture/components/blog",
    component: _08993715,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _5b301047,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _579d5a0a,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/countdown",
    component: _7a95f964,
    name: "shop-furniture-components-countdown"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _19889a9e,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _60de83d8,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _10e3de5e,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _cca4b0a2,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _c4f4eab4,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _68f6e2b7,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _21ec1f10,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _206291c6,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _2408d9d2,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _ccdb03fc,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _70fc815e,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _441e1264,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _b03f59fa,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _da61a83a,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _d2a7bd3c,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _5a81fb65,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _6b7ea516,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _49adc4aa,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _baf60a8c,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _4085877d,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _9a3a3648,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _57643cd9,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _e54140ee,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _d49be95e,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _57cd5d9c,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _62466338,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _c5e3917a,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _82e2a024,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _79c57350,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _2325b305,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _3d348818,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _5e38870b,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _025256ee,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _4a349432,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _fc2e9f4a,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _fc127048,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _6e7c5133,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _242d2f30,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _23b3989e,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _5a104619,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _82a7dad2,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _a7fa9948,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _3a9be88a,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _00c053a1,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _eb8339cc,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _fa624dee,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _14e2061b,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _cc6d9b5a,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _5e067da9,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _5f1613c9,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _0694467d,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _26342d99,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _ee9fb762,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _6739e5c4,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _d1c296ea,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _b4bd7664,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _034afb57,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _b94f5c9c,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _bf7c55e4,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _4333ee8c,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _02c07309,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _40380bd2,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _3db8b295,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _7ce81ac1,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _c5490f24,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _9218b51e,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _007e5576,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _119af5c4,
    name: "shop-watch-components-top_products"
  }, {
    path: "/blog/:id",
    component: _746f140e,
    name: "blog-id"
  }, {
    path: "/collection/:id?",
    component: _342d87bd,
    name: "collection-id"
  }, {
    path: "/product/:id?",
    component: _013200cc,
    name: "product-id"
  }, {
    path: "/",
    component: _70ddc273,
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
