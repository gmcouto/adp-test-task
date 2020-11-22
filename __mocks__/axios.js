const axios = jest.createMockFromModule('axios');
let mockResult = Object.create(null);
function __setMockResult({ url, result }) {
  mockResult = Object.create(null);
  mockResult[url] = result;
}
async function get(url) {
  if (mockResult[url]) return mockResult[url];
  return {};
}
axios.get = get;
axios.__setMockResult = __setMockResult;
module.exports = axios;
