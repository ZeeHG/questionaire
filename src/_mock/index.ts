import { error } from "console";
import Mock from "mockjs";
Mock.mock("/api/test", "get", () => {
  return {
    errorno: 0,
    data: {
      name: "11 ${Date.now()}",
    },
  };
});
