import Mock from "mockjs";
import securityApis from "./mock-security";
import systemApis from "./mock-system";
import dashboardApis from "./mock-dashboard";
const mocks = [...securityApis, ...systemApis, ...dashboardApis];

Mock.setup({
  timeout: "200-300",
});

for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response);
}
