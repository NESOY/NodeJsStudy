/**
 * Created by nesoy on 2017. 4. 14..
 */

var pathUtil = require('path');
var parsed = pathUtil.parse('/usr/temp/local/image.png');

console.log(parsed);

console.log(parsed.base);
console.log(parsed.ext);
