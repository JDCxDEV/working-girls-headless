// define a mixin object
import CoCartAPI from "@cocart/cocart-rest-api";
import formatHelper from './resuable/format'


const CoCart = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v2'
});

const helper = new formatHelper;

export default {
    methods: {
        fetchCategories() {        
            CoCart.get("products/categories",{
            }).then((response) => {
                this.category = helper.formatCategories(response.data);
            }).catch((error) => {
                console.log(error);
            })
        },

        fetchProducts() {        
            CoCart.get("products")
            .then((response) => {
                let data = response.data;
                if(data.total_products) {
                    data.products.forEach((item) => {
                        this.products.push(helper.formatProduct(item));
                    });   
                }
            }).catch((error) => {
                console.log(error);
            })
        },

        async fetchSingleProduct(id) {
            CoCart.get("products/?slug=" + id)
            .then((response) => {
                if(response.data.products.length) {
                    this.getDetail = helper.formatProduct(response.data.products[0], true);
                    this.$store.dispatch('products/fetchRelatedProducts', this.getDetail.related);
                }

            })
            .catch((error) => {
                console.log(error);
            });


        },
        
        async fetchSingleProductWithParams(payload) {

            let params = {
                /* Default  number of product */
                per_page: 4,
                min_price : 1,
              };
              
              params = {...params, ...payload};
              
            params = new URLSearchParams(_.pickBy(params)).toString();
            CoCart.get("products/?" + params)
            .then((response) => {
                let products = response.data.products ;
                this.product_first =  products.length ? helper.formatProduct(products[0]) : {}; 
                this.product_second =  products.length ? helper.formatProduct(products[1]) : {}; 
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
};
