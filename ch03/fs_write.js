var fs = require('fs');

fs.writeFile('textData.txt', 'Hello World', function(err) {
   if ( err ) {
      console.error('파일 저장 실패 : ', err);
      return;
   }
   console.log('파일 저장 성공');
});
