var fs = require('fs');

// 동기식
try {
   var data = fs.readFileSync('none_exist.txt', 'utf-8');
}
catch ( exception ) {
   console.error('Readfile Error : ', exception);
}

// 비동기식
fs.readFile('none_exist.txt', 'utf-8', function(err, data) {
    if ( err ) {
        console.error('Readfile error ', err);
    }
    else {
        // 정상 처리        
    }   
});


console.log('에러가 발생해도, 애플리케이션이 크래쉬되지 않고 동작한다.');
