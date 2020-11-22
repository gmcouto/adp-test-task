const axios = require('axios');
const { submitTaskUrl } = require('./adp-config');

const submit = async (result) => {
  try {
    return (await axios.post(submitTaskUrl, result)).data;
  } catch (error) {
    return error.response.data;
  }
};
module.exports = { submit };
