/**
 * Created by nesoy on 2017. 4. 14..
 */

var fs = require('fs');
fs.readFile('./helloworld.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error('File Read Error : ', err);
        return;
    }
    console.log('File : ', data);
});

try {
    var data = fs.readFileSync('/helloworld.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.error('File Read Error : ', error);
}