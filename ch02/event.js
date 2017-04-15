process.on('exit', function() {
   console.log('Exit 이벤트. on!');
});

// 한번만 동작
process.once('exit', function() {
	console.log('Exit 이벤트. once!');
});

process.emit('exit');
process.emit('exit', 0);  // 리스너 함수의 파라미터로 0 전달
