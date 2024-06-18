import mockjs from "mockjs";

const Random = mockjs.Random;

const apis = [
  {
    url: "/api/v1/auth/dbd/sales",
    type: "get",
    response: (config) => {
      return {
        succ: true,
        code: "RR-USER-001",
        msg: "",
        data: {
          id: "0000",
          title: "销售分析",
          xAxis: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          legend: {
            data: ["销量"],
          },
          series: [
            {
              name: "销量",
              type: "line",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        },
      };
    },
  },
];

export default apis;
