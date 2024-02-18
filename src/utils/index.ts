import axios from "axios";
import { useUsersStore } from "../store/index";
const store = useUsersStore();
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: "http://47.96.170.158:8090/admin-api/system", // api的base_url
  timeout: 5000, // 请求超时时间
  // headers: {
  //   "Content-Type": "text/html; charset=utf-8",
  // },
});
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.headers["Tenant-id"] = store.TenantId;
    config.headers["Authorization"] = store.Authorization;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default function (method: any, url: string, data: any = null) {
  method = method.toLowerCase();
  if (method === "post") {
    return service.post(url, data);
  } else if (method === "get") {
    return service.get(url, { params: data });
  } else if (method === "delete") {
    return service.delete(url, { params: data });
  } else if (method === "put") {
    return service.put(url, data);
  } else {
    return false;
  }
}
