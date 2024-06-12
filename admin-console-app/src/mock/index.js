import Mock from "mockjs";
import securityApis from "./mock-security";
import systemApis from "./mock-system";
const mocks = [...securityApis, ...systemApis];

for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response);
}
