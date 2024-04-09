// `require()` takes relative path to file we want to import and then runs the file
const xyz = require('./people.js');
const { ages } = require('./people.js'); // you can use destructuring

// `require(./people.js)` returns an empty object {} if we don't export anything in the file
// displays `people` and `ages` from `people.js` file because that is was exported
console.log(xyz.people);
console.log(xyz.ages);
console.log(ages);

// importing a built-in Node.js module, 'os'
// 'os' will contain information of the OS it's running on
const os = require('os');

console.log(os.platform(), os.homedir());
