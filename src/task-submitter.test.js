/* eslint-disable global-require */
jest.mock('axios');

const submitter = require('./task-submitter');
const { submitTaskUrl } = require('./adp-config');

const mockedSubmitResult = {
  data: 'Correct',
};

test('Task Submit API is called', async () => {
  require('axios').setMockResult({ url: submitTaskUrl, result: mockedSubmitResult });
  expect(await submitter.submit()).toStrictEqual(mockedSubmitResult.data);
});
