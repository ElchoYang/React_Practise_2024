import mockjs from "mockjs";

const apis = [
  {
    url: "/api/v1/system",
    type: "post",
    response: ({ url, type, body }) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: {
          title: "Admin Console App",
          version: "v1",
        },
      };
    },
  },
];

export default apis;
