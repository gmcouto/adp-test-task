const axios = jest.createMockFromModule('axios');
let mockResult = Object.create(null);
function setMockResult({ url, result }) {
  mockResult = Object.create(null);
  mockResult[url] = result;
}
async function executeWithMockResult(url) {
  if (mockResult[url]) return mockResult[url];
  return {};
}
axios.get = executeWithMockResult;
axios.post = executeWithMockResult;
axios.setMockResult = setMockResult;
module.exports = axios;
