import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 5000,
  timeoutErrorMessage: "timeout",
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    console.log("request:", config);

    try {
      if (localStorage.getItem("token") != null) {
        config.headers.token = localStorage.getItem("token");
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
request.interceptors.response.use(
  (res) => {
    console.log("response:", res);

    if (!res.data.succ) {
      // handle error message
      console.error(res.data.message);
    }

    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  },
  (options) => {
    console.log(options);
  }
);

export default request;
