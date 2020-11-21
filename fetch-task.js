"use strict";
const axios = require("axios")
const {getTaskUrl} = require("./adp-config")
async function fetch() {
    return (await axios.get(getTaskUrl)).data
}
module.exports = fetch