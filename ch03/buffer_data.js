console.log('engian : ', require('os').endianness());

var buffer = new Buffer(6);

buffer.writeInt8(1, 0); // 01
buffer.writeUInt8(0xFF, 1); // FF
buffer.writeUInt16LE(0xFF, 2); // FF 00
buffer.writeUInt16BE(0xFF, 4); // 00 FF

console.log('HEX : ', buffer.toString('hex'));

console.log(buffer.readInt8(0)); // 1
console.log(buffer.readUInt8(1)); // 255
console.log(buffer.readUInt16LE(2)); // 255
console.log(buffer.readUInt16BE(4)); // 255
