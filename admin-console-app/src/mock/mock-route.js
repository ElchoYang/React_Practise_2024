import mockjs from "mockjs";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "/home"),
  getItem("About", "/home/about"),
  getItem("Dashboard", "/home/dashboard"),
  getItem("Post", "/home/post/"),
];

const apis = [
  {
    url: "/api/v1/routes",
    type: "post",
    response: ({ url, type, body }) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: items,
      };
    },
  },
];

export default apis;
