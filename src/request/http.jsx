import axios from "axios";
import { HOST } from "./api";

class Http{
    request(url, method, query){
        let params = null;
        let data = null;
        if(method === "GET"){
            params = query;
        }else{
            data = query
        }
        //创建请求
        const instance = axios.create();
        //添加拦截
        this.addInterceptors(instance);
        //发送请求
        return instance.request({
            baseURL: HOST,
            url,
            method,
            data,
            params
        })
    }
    get(url, query){
        return this.request(url, "GET", query);
    }
    post(url, data){
        return this.request(url, "POST", data);
    }
    //添加拦截器
    addInterceptors(instance){
        //请求拦截器
        // instance.interceptors.request.use(
        //     (config) => {
        //         console.log(config);
        //     },
        //     (error) => {
        //         return Promise.reject(error)
        //     }
        // )
        //响应拦截器
        // instance.interceptors.response.use(
        //     (data) => {
        //         console.log(data);
        //     },
        //     (error) => {
        //         console.log("xxx");
        //         return Promise.reject(error)
        //     }
        // )
    }
}
export default new Http(HOST);