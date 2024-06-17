import mockjs from "mockjs";

const Random = mockjs.Random;

const apis = [
  {
    url: "/api/v1/login",
    type: "post",
    response: ({ url, type, body }) => {
      const res = JSON.parse(body);
      if (res.userName === "tom" && res.pwd === "123") {
        console.log("true");
        return {
          succ: true,
          code: "",
          msg: "",
          data: {
            token: Random.guid(32),
            expire: 60 * 1000, // 60秒
          },
        };
      } else {
        return {
          succ: false,
          code: "ERR-USER-001",
          msg: "用户名密码错!",
          data: "",
        };
      }
    },
  },
  {
    url: "/api/v1/logout",
    type: "post",
    response: ({ url, type, body }) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: null,
      };
    },
  },
];

export default apis;
