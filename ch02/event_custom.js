var Person = function(){};
// 상속
var util = require('util');
var EventEmitter = require('events').EventEmitter;
util.inherits(Person, EventEmitter);

// 객체
var p = new Person();
p.on('howAreYou', function() {
   console.log('Fine, Thank you and you?');
});
// 이벤트 발생
p.emit('howAreYou');
