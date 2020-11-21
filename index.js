"use strict";
const fetch = require("./fetch-task")
fetch().then((value)=>{console.log(JSON.stringify(value))})