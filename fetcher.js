const args = process.argv.slice(2);
const request = require('request');
const fs = require("fs");
const domain = args[0];
const path = args[1];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(path, bytes, (error) => {
    if (error) {
      console.log('error:', error);
    } else {
      console.log(`Downloaded and saved ${bytes.length} bytes to ${path}`)
    }
  });
});