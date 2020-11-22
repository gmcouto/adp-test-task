/* eslint-disable global-require */
jest.mock('axios');

const fetcher = require('./task-fetcher');
const { getTaskUrl } = require('./adp-config');

const mockedGetTask = {
  data: { id: '123', operation: 'division', left: -1, right: 1 },
};

test('Task API is called', async () => {
  require('axios').setMockResult({ url: getTaskUrl, result: mockedGetTask });
  expect(await fetcher.fetch()).toStrictEqual(mockedGetTask.data);
});
