# unpack-bmfonts

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Unpacks a binary buffer of [packed BMFont objects](https://www.npmjs.com/package/pack-bmfonts). See the [spec](https://github.com/mattdesl/pack-bmfonts/blob/master/spec.md) for binary details, or [pack-bmfonts](https://www.npmjs.com/package/pack-bmfonts) to generate the binary file.

```js
var unpack = require('unpack-bmfonts')

fs.readFile('packed-fonts.bin', function(err, data) {
  var fonts = unpack(data)
  
  //the array of BMFont JSON objects  
  console.log(fonts)

  console.log(fonts[0].common.lineHeight)
  console.log(fonts[0].info.face)
})
```

## Usage

[![NPM](https://nodei.co/npm/unpack-bmfonts.png)](https://www.npmjs.com/package/unpack-bmfonts)

#### `fonts = unpack(buffer)`

Unpacks a Buffer of packed binary fonts.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/unpack-bmfonts/blob/master/LICENSE.md) for details.
