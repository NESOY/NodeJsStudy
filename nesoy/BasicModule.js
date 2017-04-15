/**
 * Created by nesoy on 2017. 4. 2..
 */
/**
 * Process : Global Object
 */
console.log(process.env);   // 애플리케이션 실행 환경
console.log(process.arch);  // CPU정보
console.log(process.platform); // 플랫폼 정보

/**
 * Timer
 * setTimeout(Callback, delay, arg)
 * clearTimeout()
 *
 * setInterval(Callback, delay, arg)
 * clearInterval()
 */

function sayHello() {
    console.log('Hello World');
}
/* 3초 후에 실행 */
setTimeout(function () {
    sayHello();
}, 3000);

var t = setTimeout(sayHello, 10);
/* 타임아웃 제거 */
clearTimeout(t);

function sayGoodBye(who) {
    console.log('GoodBye', who)
}

/* 2초마다 수행 */
setInterval(function () {
    sayGoodBye()
}, 2000);
/* 인터벌 제거 */
clearInterval(sayGoodBye());


/**
 * Console
 */

/* Log 메시지 */
console.log('log', 'log message');
console.info('info', 'info message');
console.warn('warn', 'warn message');
console.error('error', 'error message');

var obj = {
    name: 'IU',
    job: 'Singer'
}
/* 객체 내용 보기 */
console.log('obj' + obj);
console.log('obj', obj); // 객체 내용 보기

/* Custom Console */
var fs = require('fs'); // 파일 입출력 모듈
var output = fs.createWriteStream('stdout.log'); // Output 위치 지정
var errorOutput = fs.createWriteStream('error.log'); // Error output 위치 지정
var Console = require('console').Console;
var logger = new Console(output,errorOutput);

logger.info('info message');
logger.log('log message');
logger.warn('warning');
logger.error('error message');

/* 실행시간 측정 */
console.time("START");
var sum = 0;
for (var i = 1; i < 10000; i++) {
    sum += i;
}
console.timeEnd("START")

/**
 * Utility Module - not Global Object
 * 문자열 포맷
 * 상속
 */
/* Util Module Loading */
var util = require('util');

/* String Format
* %s : String
* %d : Number
* %j : Json
* */
var str1 = util.format('%d + %d = %d',1,2,(1+2));
var str2 = util.format('%s %s', 'Hello','World')

/* 상속 */
function Parent() {

}
Parent.prototype.sayHello = function () {
    console.log('Hello. From Parent Class');
}
function Child() {

}
util.inherits(Child,Parent); // inherit Relation

var parent = new Parent();
parent.sayHello();

var child = new Child();
child.sayHello();

/**
 * Event 모듈
 * 이벤트를 다루는 기능 제공
 * Readline 모듈
 */

process.on('exit', function (code) {
    console.log('exit event : ', code);
})

process.once('exit',function (code) {
    console.log('exit event with once : ', code);
})

process.emit('exit');
process.emit('exit',0);
process.emit('exit',1);

process.on('uncaughtException',function (code) {
    console.log('uncaughtException Error');
})
sayTest();


