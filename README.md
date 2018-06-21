# freepats

[![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/freepats/master.svg
[travis-url]: https://travis-ci.org/feross/freepats
[npm-image]: https://img.shields.io/npm/v/freepats.svg
[npm-url]: https://npmjs.org/package/freepats
[downloads-image]: https://img.shields.io/npm/dm/freepats.svg
[downloads-url]: https://npmjs.org/package/freepats
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### FreePats General MIDI sound set

## Install

```
npm install freepats
```

## Usage

```js
const freepats = require('freepats')

console.log(freepats)
// { configPath: '/path/to/node_modules/freepats/freepats.cfg',
//   rootPath: '/path/to/node_modules/freepats' }
```

## What is this package?

This package is a **General MIDI sound set**. It is a free (as in free software)
sound bank, suitable for use with a MIDI player, or any other MIDI use case
where instrument sounds are needed.

The files that make up the sound set are packaged up here for convenient
inclusion in a Node.js project.

## What format are the files in?

The files are known as "GUS-type instrument patches".

## Which sound set is used?

The sound set is called "Old FreePats General MIDI sound set" and is available for download on the [General MIDI page of the FreePats website](http://freepats.zenvoid.org/SoundSets/general-midi.html).

The FreePats project is working on a newer sound set with higher quality samples, but it is missing many instruments and not ready to be used yet.

## What is FreePats?

FreePats is a project to create a free and open collection of digital
instruments for music production. FreePats collects sound samples that can be
used to build sound banks for free software synthesizers.

In the same spirit as free software, sound samples in the FreePats project are
distributed under free licenses. Any uploaded content must be original, its
origin and authors must be known and it must be published under a suitable
license.

Learn more on the [FreePats About page](http://freepats.zenvoid.org/about.html).

## License

GPLv2. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
