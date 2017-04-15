/***
 * 준비사항 : openssl 설치, openssl windows 로 검색 후 바이너리 설치
 * 
 * 1. 개인키 발급
 * openssl genrsa -out key.pem 2048
 * 
 * 2. 인증서 발급 요청 만들기
 * openssl req -new -key key.pem -out req.csr
 * 
 * 3. 인증서 발급
 * openssl x509 -req -in req.csr -signkey key.pem -out cert.pem
 * 
 */
var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
    key : fs.readFileSync('./key.pem'),
    cert : fs.readFileSync('./cert.pem')    
}

http.createServer(function(req, res) {
    res.end('Hello Unsecure Server');
}).listen(3000);

https.createServer(options, function(req, res) {
    res.end('Hello Secure Server');
}).listen(3001);

