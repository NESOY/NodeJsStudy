var fs = require('fs');
var path = '.';

fs.readdir(path, function(err, files) {
   if ( err ) {
      console.errro('디렉토리 읽기 에러');
      return;
   }
   console.log('디렉토리 내 파일 목록(Async)\n', files);
});
