jest.mock("axios");

const fetch = require("./fetch-task");

const { getTaskUrl } = require("./adp-config");
const mockedGetTask = {
  data: { id: "123", operation: "division", left: -1, right: 1 },
};

test("Task API is called", async () => {
  require("axios").__setMockResult({ url: getTaskUrl, result: mockedGetTask });
  expect(fetch()).resolves.toBe(mockedGetTask.data);
});
