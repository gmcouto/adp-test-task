/* eslint-disable no-console */
const axios = require('axios');
const { getTaskUrl } = require('./adp-config');

async function fetch() {
  try {
    return (await axios.get(getTaskUrl)).data;
  } catch (error) {
    console.error('An error ocurred while fetching a new task:');
    console.error(error.response);
    return { id: '-1', operation: 'An error ocurred. Try Again' };
  }
}
module.exports = { fetch };
