<template>
    <div>
      <Slider />
      <section>
        <div class="container">
          <div class="row">
            <Sidebar />
            <div class="col-sm-9 padding-right row">
              <div class="features_items">
                <!--features_items-->
                <h2 class="title text-center">Featured Items</h2>
                <div class="col-sm-4 display">
                  <div
                    class="product-image-wrapper"
                    v-for="item in data"
                    v-bind:key="item.id"
                  >
                    <div class="single-products">
                      <div class="productinfo text-center">
                        
                          <img
                            class="card-img-top"
                            :src="server + item.proimage"
                            width="100"
                            height="250"
                            alt="card image"
                          />
                        
                        <h2>{{ item.price }}</h2>
                        <p>{{ item.pro_name }}</p>
                        <a
                          @click="
                            addtocart(
                              item.id,
                              item.quantity,
                              item.pro_name,
                              item.proimage,
                              item.price
                            )
                          "
                          href="#"
                          class="btn btn-default add-to-cart"
                          ><i class="fa fa-shopping-cart"></i>Add to cart</a
                        >
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li>
                          <a
                            @click="
                              addtowishlist(
                                item.id,
                                item.quantity,
                                item.pro_name,
                                item.proimage,
                                item.price
                              )
                            "
                            href="#"
                            ><i class="fa fa-plus-square"></i>Add to wishlist</a
                          >
                        </li>
                        <li>
                          <a href="#"
                            ><i class="fa fa-plus-square"></i>Add to compare</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!--features_items-->
  
              <div class="category-tab">
                <!--category-tab-->
                <!--/category-tab-->
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  </template>
  
  <script>
  import Slider from "./includes/Slider.vue"
  import Sidebar from "./includes/Sidebar.vue";
  import { product } from "../common/Service";
  import { mapState } from "vuex";
  export default {
    name: "Main",
    components: {
      Slider,
      Sidebar,
    },
    data() {
      return {
        data: undefined,
        server: "http://127.0.0.1:8000/uploads/",
        param: undefined,
      };
    },
    computed: mapState({
      msg: (state) => state.uid,
      login: (state) => state.islogin,
    }),
    methods: {
      addtocart(id, quantity, proimage, pro_name, price) {
        // alert(id);
        if (localStorage.getItem("myCart") != undefined) {
          let arr = JSON.parse(localStorage.getItem("myCart"));
          let obj = {
            pid: id,
            quantity: 1,
           productimagename:proimage,
            price: price,
           productname:pro_name,
          };
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          alert('success');
          // this.$swal("Added successfully", "", "success");
        } else {
          let arr = [];
          let obj = {
            pid: id,
            quantity: 1,
            productimagename:proimage,
            price: price,
           productname:pro_name,
          };
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          // this.$swal("Added successfully", "", "success");
      alert('Add this product?');
        }
      },
    },
    async mounted() {
      product().then((res) => {
        if (res) {
          console.log(res.data.data.productData);
          this.data = res.data.data.productData;
        } else {
          alert("Something wrong!");
        }
      });
    },
  };
  </script>
  
  <style>
  .display {
    display: inline-block;
  }
  </style>