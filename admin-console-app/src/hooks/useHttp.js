import instance from "../utils/APIRequest";

const useHttp = () => {
  const request = (url, headers, method, data) => {
    return new Promise((resolve, reject) => {
      instance
        .request({
          url: url,
          method: method,
          headers: headers,
          ...data,
        })
        .then((res) => {
          if (res.data.succ) {
            resolve(res.data.data);
          } else {
            reject({ code: res.data.code, message: res.data.msg });
          }
        })
        .catch((err) => {
          reject({ code: "ERR_0000", message: "System Error" });
        });
    });
  };

  const post = (url, headers, data) => {
    return request(url, headers, "post", { data: data });
  };
  const get = (url, headers, data) => {
    return request(url, headers, "get", { params: data });
  };

  return { post, get };
};

export default useHttp;
