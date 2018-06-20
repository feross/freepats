const test = require('tape')
const freepats = require('../')
const fs = require('fs')

test('check config file exists', t => {
  const file = fs.readFileSync(freepats.configPath, 'utf8')
  t.equal(typeof file, 'string')
  t.ok(file.length > 0)
  t.end()
})

test('check Drum folder exists', t => {
  const dir = fs.readdirSync(freepats.rootPath, 'utf8')
  t.ok(dir.includes('Drum_000'))
  t.ok(dir.includes('Tone_000'))
  t.end()
})
