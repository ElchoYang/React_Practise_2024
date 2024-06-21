import mockjs from "mockjs";

const Random = mockjs.Random;
const apis = [
  {
    url: "/api/v1/post/submit",
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
        data: [
          {
            id: mockjs.Random,
            title: "",
            content: "",
          },
        ],
      };
    },
  },
];

export default apis;
