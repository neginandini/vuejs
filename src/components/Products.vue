<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <!-- <Sidebar /> -->

          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              
              <div class="col-sm-4" v-for="(pro,index) in proData" v-bind:key="index">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center">
                      <router-link :to="`/productdeatils/${pro.id}`">
                        <img
                          class="card-img-top"
                          :src="server + pro.proimage"
                          width="250"
                          height="250"
                          alt="card image"
                        />
                        
                      </router-link>
                      <!-- <h2>{{pro.price}}</h2> -->
                      <p>{{pro.pro_name}}</p> 
                      <router-link to="/Cart" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>Add to cart</router-link >
                    </div>
                   
                  </div>
                  
                </div>
              </div>
             
              
            </div>
          </div>

          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { product } from "../common/Service";
//import Sidebar from "../components/includes/Sidebar.vue";
export default {
  name: "Products",
 
  data() {
    return {
      proData: undefined,
     // param: undefined,
     
      server:"http://127.0.0.1:8000/uploads/",
    };
  },
  mounted() {
    product()
    .then((res) => {
      console.log(res.data);
      this.proData = res.data.products;
    });
  },
  // watch: {
  //   $route(to) {
  //     this.param = to.params.id;
  //     categoyproduct(this.param).then((res) => {
  //       this.proData = res.data;
  //       console.log(res.data);
  //       // window.location.reload();
  //     });
  //   },
  // },
  // created() {
  //   this.param = this.$route.params.id;
  // },
};
</script>

<style>
</style>