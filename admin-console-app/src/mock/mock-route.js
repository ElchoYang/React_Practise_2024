import mockjs from "mockjs";

const apis = [
  {
    url: " /api/v1/userInfo",
    type: "post",
    response: ({ url, type, body }) => {
      return {
        succ: true,
        code: "",
        msg: "",
        data: {
          name: "tom",
          menus: [
            {
              label: "Home",
              key: "/home",
              iconName: "MailOutlined",
              rkey: 'home'
            },
            {
              label: "About",
              key: "/home/about",
              iconName: "AppstoreOutlined",
              rkey: 'about'
            },
            {
              label: "Dashboard",
              key: "/home/dashboard",
              iconName: "PieChartOutlined",
              rkey: 'dashboard'
            },
            {
              label: "Post",
              key: "/home/post",
              iconName: "FileOutlined",
              rkey: 'post'
            },
            {
              label: "User Info",
              key: "/home/userinfo",
              iconName: "UserOutlined",
              rkey: 'userinfo'
            },
          ],
        },
      };
    },
  },
];

export default apis;
