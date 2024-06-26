import mockjs from "mockjs";

const Random = mockjs.Random;

const list = Array.from({ length: 10 }, () => null).map((value, index) => ({
  id: mockjs.Random.id(),
  title: "mock-list-title " + index,
  content: "mock-list-content " + index,
}));

const apis = [
  {
    url: "/api/v1/post/submit",
    type: "post",
    response: ({ url, type, body }) => {
      var obj = JSON.parse(body);
      obj.id = mockjs.Random.id();
      //  list.push(obj);
      return {
        succ: true,
        code: "",
        msg: "",
        data: obj,
      };
    },
  },
  {
    url: "/api/v1/post/edit",
    type: "post",
    response: ({ url, type, body }) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: {},
      };
    },
  },
  {
    url: "/api/v1/post/delete",
    type: "post",
    response: ({ url, type, body }) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: {},
      };
    },
  },
  {
    url: "/api/v1/post/list",
    type: "post",
    response: () => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: list,
      };
    },
  },
];

export default apis;
