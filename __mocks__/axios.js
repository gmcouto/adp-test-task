'use strict';
const axios = jest.createMockFromModule('axios')
// const {getTaskUrl} = require("../adp-config")
// const __mockedGetTask = {data:{id:'123',operation:'division',left:-1,right:1}}
let mockResult = Object.create(null)
function __setMockResult({url, result}) {
    mockResult = Object.create(null)
    mockResult[url] = result
  }
async function get(url) {
    if(mockResult[url])
        return mockResult[url]
    return {}
}
axios.get = get
axios.__setMockResult= __setMockResult
module.exports = axios