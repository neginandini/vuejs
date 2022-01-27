<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          
             
             <Sidebar />

             

          <div class="col-sm-9 padding-right">
            <div class="product-details">
              <!--product-details-->
              <div class="col-sm-5">
                <div class="view-product">
                  <img :src="server + proData.proimage" />
                 
                </div>
                <div
                  id="similar-product"
                  class="carousel slide"
                  data-ride="carousel">
               

                  
                </div>
              </div>

        <!-- Product description -->
              <div class="col-sm-7">
                <div class="product-information">
                
                  <h2>{{proData.pro_name}}</h2>
                  <p>Web ID: 1089772</p>
                 
                  <p><b>Price: {{attributes.price}} </b></p>
                  <p><b>Description:{{attributes.description}}</b></p>
                  <p><b>Condition:</b> New</p>
                  <p><b>Brand:</b> E-SHOPPER</p>
                  <br>
                  <span>
                   <router-link to="/Cart">
                    <button type="button" class="btn btn-fefault cart">
                      <i class="fa fa-shopping-cart"></i>
                      Add to cart
                    </button>
                   </router-link>
                  </span>
                  
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
import { attributes } from "../common/Service";

import Sidebar from "../components/includes/Sidebar.vue";
export default {
  name: "ProductDeatils",
  components: {
    Sidebar,
  },
  data() {
    return {
      proData: undefined,
      attributes:undefined,
      param: undefined,
      server: "http://127.0.0.1:8000/uploads/",
    };
  },
  mounted() {
    attributes(this.param).then((res) => {
      console.log(res.data);
      
      this.proData = res.data.products;
      this.attributes=res.data.attributes[0];
      console.log(this.attributes[0]);
    },
    
    );
  },
  //   watch: {
  //     $route(to) {
  //       this.param = to.params.id;
  //       categoyproduct(this.param).then((res) => {
  //         this.proData = res.data;
  //         console.log(res.data);
  //         // window.location.reload();
  //       });
  //     },
  //   },
  created() {
    this.param = this.$route.params.id;
  },
};
</script>

<style>

</style>