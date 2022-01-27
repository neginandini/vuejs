import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';
import Contact from '../components/Contact.vue';
import Checkout from '../components/Checkout.vue';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
import ProductDeatils from '../components/ProductDeatils.vue';

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            name:'Main',
            component:Main
        },
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/Contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/Checkout',
            name:'Checkout',
            component:Checkout
        },
        {
            path:'/Cart',
            name:'Cart',
            component:Cart
        },
        {
            path:'/category/:id',
            name:'Products',
            component:Products
        },
        {
            path:"/productdeatils/:id",
            name:"ProductDeatils",
            component:ProductDeatils
        }


    ]
});