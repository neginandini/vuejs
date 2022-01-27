<template>
  <section id="slider">
    <!--slider-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12" >
          <div id="slider-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#slider-carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#slider-carousel" data-slide-to="1"></li>
              <li data-target="#slider-carousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" >
               <div class="item active">
                <div class="col-sm-6">
                  <h1><span>E</span>-SHOPPER</h1>
                  <h2>Free E-Commerce Template</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button type="button" class="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div class="col-sm-6" v-for="(ban,index) in bannerData" v-bind:key="index">
                  <img
                          class="card-img-top"
                          :src="server + ban.img_path"
                          width="350"
                          height="350"
                          alt="card image"
                        />
                  <!-- <img src="images/home/pricing.png" class="pricing" alt="" /> -->
                </div>
              </div> 


              <!-- <div class="item">
                <div class="col-sm-6">
                  <h1><span>E</span>-SHOPPER</h1>
                  <h2>100% Responsive Design</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button type="button" class="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div class="col-sm-6">
                  <img
                    src="images/home/girl2.jpg"
                    class="girl img-responsive"
                    alt=""
                  />
                  <img src="images/home/pricing.png" class="pricing" alt="" />
                </div>
              </div> -->

              <!-- <div class="item">
                <div class="col-sm-6" v-for="(ban,index) in bannerData" v-bind:key="index">
                  <h1><span>E</span>-SHOPPER</h1>
                  <h2>Free Ecommerce Template</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button type="button" class="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div class="col-sm-6">
                   <img
                          class="card-img-top"
                          :src="server + ban.img_name"
                          width="350"
                          height="350"
                          alt="card image"
                        />
                  <img src="images/home/pricing.png" class="pricing" alt="" />
                </div>
              </div> -->
            </div>

            <a
              href="#slider-carousel"
              class="left control-carousel hidden-xs"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              href="#slider-carousel"
              class="right control-carousel hidden-xs"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {banner} from '../../common/Service';
export default {
  name: "Slider",
  data(){
    return{
    bannerData:undefined,
     server:"http://127.0.0.1:8000/uploads/",
    }
  },
   mounted() {
    banner()
    .then((res) => {
      console.log(res.data);
      this.bannerData = res.data.banners;
    });
  },
};
</script>

<style>
</style>