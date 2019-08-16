/*
 * @Description:
 * @Author: AnHaijun
 * @Date: 2019-08-09 00:09:49
 * @LastEditors: AnHaijun
 * @LastEditTime: 2019-08-09 09:59:59
 */
import axios from "axios";
// import router from "../router";

let instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 300000,
  headers: {
    "X-Custom-Header": "foobar"
  }
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // if (localStorage.getItem("localUserInfo")) {
    //   var token = JSON.parse(localStorage.getItem("localUserInfo")).token;
    //   config.headers.Token = token;
    // }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    let resolve = {};
    resolve.data = response.data.result;
    resolve.raw = response.data;
    // if (!resolve.raw.success && resolve.raw.error_code === 7) {
    //     localStorage.removeItem("localUserInfo");
    //     router.push({
    //         path: "/user/login"
    //     });
    // }
    return resolve;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const fetchInstance = (url = "", params = "", method = "post") => {
  const config = {
    url,
    method
  };
  if (params) {
    config["data"] = params;
  }
  return instance(config);
};