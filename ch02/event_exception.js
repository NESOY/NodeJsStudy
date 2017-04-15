// uncaughtException 예외 처리
process.on('uncaughtException', function(code) {
	console.log('uncaughtException Event : ', code);
});


// 정의되지 않은 함수 호출 - uncaughtException 발생
sayHello();
