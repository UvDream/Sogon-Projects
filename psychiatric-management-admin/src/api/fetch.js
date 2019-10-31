import axios from "axios";
import config from "./config.js"; // 倒入默认配置
import store from '@/store';
axios.defaults.withCredentials=true;
export default function fetch(options) {
  return new Promise((reslove, reject) => {
    var service = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: config.headers,
      withCredentials: true
    });
    // request拦截器
    service.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // response拦截器
    service.interceptors.response.use(
      response => {
        let data;
        // IE9
        if (response.data == undefined) {
          data = response.request.responseText;
        } else {
          data = response.data;
        }
        switch (data.code) {
          case "110":
            break;
          default:
        }
        return data;
      },
      err => {
        if (err.response && err.response.status) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权，请登录";
              break;
            case 403:
              err.message = "拒绝访问";
              break;
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`;
              break;
            case 408:
              err.message = "请求超时";
              break;
            case 500:
              err.message = "服务器内部错误";

              break;
            case 501:
              err.message = "服务未实现";
              break;
            case 502:
              err.message = "网关错误";
              break;
            case 503:
              err.message = "服务不可用";
              break;
            case 504:
              err.message = "网关超时";
              break;
            case 505:
              err.message = "HTTP版本不受支持";
              break;
            default:
          }
        }
        return Promise.reject(err); //返回错误信息
      }
    );
    service(options)
      .then(res => {
        reslove(res);
        return res;
      })
      .catch(error => {
        reject(error);
      });
  });
}
