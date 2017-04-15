var querystring = require('querystring');

var str = 'group=EXID&name=하니&since=';
var parsed = querystring.parse(str);
//console.log(parsed);

console.log('group : ', parsed.group);
console.log('name : ', parsed.name);
console.log('since : ', parsed.since);
console.log('friend : ', parsed.friend);