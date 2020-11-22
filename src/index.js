const fetch = require('./task-fetcher');

fetch().then((value) => {
  console.log(JSON.stringify(value));
});
