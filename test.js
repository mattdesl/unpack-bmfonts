var unpack = require('./')
var test = require('tape')

var fs = require('fs')
var path = require('path')
var parseAscii = require('parse-bmfont-ascii')

var fonts = [
  './fnt/Lato-Regular-16.fnt',
  './fnt/Lato-Regular-24.fnt',
  './fnt/Lato-Regular-32.fnt',
  './fnt/Lato-Regular-64.fnt',
]

fonts = fonts.map(function(file) {
  var data = fs.readFileSync(path.join(__dirname, file), 'utf8')
  var font = parseAscii(data)
  //since the .fnt doesn't include outline...
  font.info.outline = 0
  return font
})

test('unpacks a binary buffer of packed BMFont objects', function(t) {
  fs.readFile(path.join(__dirname, 'fnt', 'packed.bin'), function(err, data) {
    if (err) t.fail(err)
    var result = unpack(data)
    t.equal(result.length, 4, 'correct count')
    t.deepEqual(result, fonts)
  })
  t.end()
})