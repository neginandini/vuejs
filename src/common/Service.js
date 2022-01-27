import axios from 'axios';
import {MAIN_URL} from '@/common/Url';


 export function userLogin(data)
 {
        return axios.post(`${MAIN_URL}login`,data)
 }
 export function userRegister(data)
 {
     return axios.post(`${MAIN_URL}register`,data)
 }
   
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contact`,data)
}

export function Category()
{
    return axios.get(`${MAIN_URL}category`)
}

export function categoryproduct(id)
{
    return axios.get(`${MAIN_URL}category/${id}`)
}

export function product()
{
    return axios.get(`${MAIN_URL}product`)
}
export function banner()
{
    return axios.get(`${MAIN_URL}banner`)
}

export function singleproduct(id)
{
    return axios.get(`${MAIN_URL}product/${id}`)
}
export function attributes(id)
{
    return axios.get(`${MAIN_URL}attribute/${id}`)
}
export function coupons()
{
    return axios.get(`${MAIN_URL}coupon`)
}
export function userOrders(data)
{
    return axios.post(`${MAIN_URL}order`,data)
}
export function userAddress(data)
{
    return axios.post(`${MAIN_URL}address`,data)
}

export default {userLogin,userRegister,userContact,Category,categoryproduct,banner,attributes,coupons,userOrders,userAddress};