var parse = require('parse-bmfont-binary')

var HEADER_BYTES = [
  80, 66, 77, 70
]

module.exports = function(buf) {
  if (buf.length < 5)
    throw new Error('invalid buffer length for Packed BMFont')

  var header = HEADER_BYTES.every(function(byte, i) {
    return buf.readUInt8(i) === byte
  })

  if (!header)
    throw new Error('BMFont missing PBMF byte header')

  var vers = buf.readUInt8(4)
  if (vers !== 1)
    throw new Error('Expected Packed BMF binary version 1')
  
  var count = buf.readInt16LE(5)

  var i = 7
  var fonts = []
  for (var c=0; c<count; c++) {
    var chunkSize = buf.readInt32LE(i)
    var start = i+4
    var end = start+chunkSize
    var font = parse(buf.slice(start, end))
    fonts.push(font)
    i = end
  }
  return fonts
}