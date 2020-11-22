const axios = require('axios');
const { submitTaskUrl } = require('./adp-config');

const submit = async (result) => {
  return (await axios.post(submitTaskUrl, result)).data;
};
module.exports = { submit };
