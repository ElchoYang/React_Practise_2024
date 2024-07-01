import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
  timeoutErrorMessage: "timeout",
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    try {
      if (localStorage.getItem("token") != null) {
        config.headers['Authorization'] = localStorage.getItem("token");
      }
    } catch (e) {
      console.error(e);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
  (options) => {
    console.log(options);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    console.log("response:", res);

    if (!res.data.succ) {
      // handle error message
      console.error(res.data.msg);
    }

    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
  (options) => {
    console.log(options);
  }
);

export default instance;
