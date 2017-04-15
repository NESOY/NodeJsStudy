var fs = require('fs');

var os = fs.createWriteStream('./output.txt');

os.on('finish', function() {
	console.log('finish!');
});


// 키보드에서 입력한 내용
var is = process.stdin;
// 아웃풋 스트림(파일)로 연결
is.pipe(os);
