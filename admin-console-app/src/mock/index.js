import Mock from "mockjs";
import securityApis from "./mock-security";
import systemApis from "./mock-system";
import dashboardApis from "./mock-dashboard";
import postApis from "./mock-post";
const mocks = [...securityApis, ...systemApis, ...dashboardApis, ...postApis];

Mock.setup({
  timeout: "200-300",
});

for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response);
}
