<template>
  <div class="col-sm-3">
    <div class="left-sidebar">
      <h2>Category</h2>
      <div class="panel-group category-products" id="accordian">
        <!--category-productsr-->
        <div v-for="(category, index) in catdata" v-bind:key="index">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <router-link :to="`/home/${category.id}`">{{ category.cat_name }}</router-link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <!--/category-products-->

    </div>
  </div>
</template>
<script>
import {Category} from '../../common/Service';
export default {
  name: "Sidebar",
  data()
  {
    return{
      catdata:null,
    }
  },
  mounted()
  {
    Category()
    .then(res=>{
      this.catdata =res.data.categories;
      console.log(this.catdata);
    });
  }
};
</script>

<style>
</style>